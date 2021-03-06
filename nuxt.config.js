require('dotenv').config();

module.exports = {
    plugins: [{ src: '~plugins/i18n.js' }],
    /*
     ** Headers of the page
     */
    head: {
        title: 'public-web',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
            { 'http-equiv': 'X-UA-Compatible', content: 'ie=edge' },
            {
                hid: 'description',
                name: 'description',
                content: 'Coople manage onboarding project',
            },
        ],
        link: [
            {
                rel: 'shortcut icon',
                type: 'image/x-icon',
                href: '/favicon-coople.ico',
            },
        ],
    },
    modules: [
        'nuxt-i18n',
        '@nuxtjs/axios',
        '~/modules/hooks',
        'bootstrap-vue/nuxt',
        '@nuxtjs/style-resources',
    ],
    bootstrapVue: {
        bootstrapCSS: false, // Or `css: false`
        bootstrapVueCSS: false, // Or `bvCSS: false`
        componentsPlugin: ['CarouselPlugin']
    },
    styleResources: {
        scss: ['~assets/styles/coople-manage.main.scss'],
    },
    router: {
        middleware: 'test',
    },
    // TODO: LEAVE ONLY LANGUAGES REQUIRED PER TENANT
    i18n: {
        locales: [
            {
                code: 'ru',
                iso: 'ru-RU',
                name: 'Russian',
                file: 'ru_RU.json',
            },
            {
                code: 'en',
                iso: 'en-US',
                name: 'English',
                file: 'en.json',
            },
            {
                code: 'de',
                iso: 'de-CH',
                name: 'Dutch',
                file: 'de_CH.json',
            },
            {
                code: 'fr',
                iso: 'fr-CH',
                name: 'French',
                file: 'fr.json',
            },
            {
                code: 'nl-de',
                iso: 'nl-NL',
                name: 'Dutch',
                file: 'nl_NL.json',
            },
        ],
        defaultLocale: 'en',
        ueI18nLoader: false,
        // Separator used to generated routes name for each locale, you shouldn't
        // need to change this
        routesNameSeparator: '___',

        // Suffix added to generated routes name for default locale if strategy is prefix_and_default,
        // you shouldn't need to change this
        defaultLocaleRouteNameSuffix: 'default',

        // Routes generation strategy, can be set to one of the following:
        // - 'no_prefix': routes won't be prefixed
        // - 'prefix_except_default': add locale prefix for every locale except default
        // - 'prefix': add locale prefix for every locale
        // - 'prefix_and_default': add locale prefix for every locale and default
        strategy: 'prefix',
        // Wether or not the translations should be lazy-loaded, if this is enabled,
        // you MUST configure langDir option, and locales must be an array of objects,
        // each containing a file key
        lazy: true,

        // Directory that contains translations files when lazy-loading messages,
        // this CAN NOT be empty if lazy-loading is enabled
        // langDir: null,
        langDir: 'locales/',
        // Set this to a path to which you want to redirect users accessing root URL (/)
        // rootRedirect: 'index.html',

        // Enable browser language detection to automatically redirect user
        // to their preferred language as they visit your app for the first time
        // Set to false to disable
        detectBrowserLanguage: {
            // If enabled, a cookie is set once a user has been redirected to his
            // preferred language to prevent subsequent redirections
            // Set to false to redirect every time
            useCookie: true,
            // Cookie name
            cookieKey: 'i18n_redirected',
            // Set to always redirect to value stored in the cookie, not just once
            alwaysRedirect: false,
            // If no locale for the browsers locale is a match, use this one as a fallback
            fallbackLocale: 'en',
        },
        // TODO: Uncomment for dev
        // detectBrowserLanguage: false,
        // If true, SEO metadata is generated for routes that have i18n enabled.
        // Note that performance can suffer with this enabled and there might be compatibility
        // issues with some plugins. Recommended way is to set up SEO as described in:
        // https://nuxt-community.github.io/nuxt-i18n/seo.html#improving-performance
        // TODO: Enable on prod
        seo: false,
        // Fallback base URL to use as prefix for alternate URLs in hreflang tags.
        // By default VueRouter's base URL will be used and only if that is not available,
        // fallback URL will be used.
        // TODO: Replace by prod domain
        baseUrl: 'http://localhost:3000/',
        vueI18n: {
            fallbackLocale: 'en',
        },
        // Called right before app's locale changes
        // beforeLanguageSwitch: (oldLocale, newLocale) => null,

        // // Called after app's locale has changed
        // onLanguageSwitched: (oldLocale, newLocale) => null
    },
    axios: {},
    css: ['@/assets/styles/main.scss'],
    /*
     ** Customize the progress bar color
     */
    loading: { color: '#3B8070' },
    loaders: {
        // file: {},
        // fontUrl: { limit: 1000 },
        imgUrl: {
            limit: 1000,
            fallback: require.resolve('responsive-loader'),
            quality: 85,
        },
        // pugPlain: {},
        // vue: {
        //   transformAssetUrls: {
        //     video: 'src',
        //     source: 'src',
        //     object: 'src',
        //     embed: 'src'
        //   }
        // },
        // css: {},
        // cssModules: {
        //   localIdentName: '[local]_[hash:base64:5]'
        // },
        // sass: {
        //   indentedSyntax: true
        // },
        // scss: {},
        // stylus: {},
        // vueStyle: {}
    },
    /*
     ** Build configuration
     */
    build: {
        /*
         ** Run ESLint on save
         */
        extend(config, { isDev, isClient, loaders }) {
            if (isDev && isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/,
                });
            }
        },
    }
};
