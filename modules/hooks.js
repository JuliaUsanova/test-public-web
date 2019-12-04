import { downloadTranslations } from './lokalise';
import * as fs from 'fs-extra';
import path from 'path';

const LOCATIONS = {
    ch: ['de', 'fr', 'en', 'ru'],
    nl: ['nl-de', 'en', 'ru'],
    uk: ['en', 'ru'],
};

export default function hooksModule(moduleOptions) {
    // this.nuxt.hook('modules:done', (moduleContainer) => {
    //   // This will be called when all modules finished loading
    // })
    //
    // this.nuxt.hook('render:before', (renderer) => {
    //   // Called after the renderer was created
    // })
    //
    // this.nuxt.hook('build:compile', async ({ name, compiler }) => {
    //   // Called before the compiler (default: webpack) starts
    // })

    this.nuxt.hook('generate:before', async (generator) => {
        await clearDist();

        // This will be called before Nuxt generates pages
        await downloadTranslations();
    });

    this.nuxt.hook('generate:done', async (generator) => {
        // This will be called after Nuxt generates pages
        let dirPermissions = 484;
        let resourcePath = path.resolve(__dirname, '../dist');

        let promises = Object.keys(LOCATIONS).map((country) => {
            let countryDir = path.resolve(__dirname, `../dist-${country}`);

            return fs
                .ensureDir(countryDir, dirPermissions)
                .then(() => {
                    console.log('creating ', countryDir, '...');
                    return Promise.resolve();
                })
                .then(() => {
                    let fromDir = path.resolve(resourcePath, './_nuxt');
                    let toDir = path.resolve(countryDir, './_nuxt');

                    console.log('copying _nuxt to', toDir, '...');

                    return fs.copy(fromDir, toDir);
                })
                .then(() => {
                    let languages = LOCATIONS[country];
                    let langPromises = languages.map((lang) => {
                        let toDir = path.resolve(countryDir, lang);
                        let fromDir = path.resolve(resourcePath, lang);

                        console.log('copying ', lang, ' to ', toDir, '...');

                        return fs.copy(fromDir, toDir).then(() => {
                            console.log(`successfully copied files for ${country} / ${lang}!`);
                            return Promise.resolve();
                        });
                    });

                    return Promise.all(langPromises);
                })
                .catch((err) => {
                    if (err && err.code !== 'EEXIST') {
                        console.error(err);
                    }
                });
        });

        await Promise.all(promises);
    });
}

async function clearDist() {
    Object.keys(LOCATIONS).forEach(async (country) => {
        console.log(`deleting the 'dist-${country}' folder ...`);
        await fs
            .remove(path.resolve(__dirname, `../dist-${country}`))
            .catch((err) => console.error(err));
    });

    console.log(`deleting the 'dist' folder ...`);
    return await fs.remove(path.resolve(__dirname, '../dist')).catch((err) => console.error(err));
}
