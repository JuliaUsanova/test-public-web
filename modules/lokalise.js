const { LokaliseApi } = require("@lokalise/node-api");
const path = require("path");
const unzipper = require("unzipper");
const request = require("request");

const PROJECT_ID = process.env.PROJECT_ID;
const API_KEY = process.env.API_KEY;
const lokalise = new LokaliseApi({ apiKey: API_KEY });

export async function downloadTranslations() {
  const meta = await lokalise.files.download(PROJECT_ID, {
    format: "json",
    original_filenames: false,
    bundle_structure: "%LANG_ISO%.%FORMAT%",
    include_description: false,
    include_comments: false
  });
  await request(meta.bundle_url).pipe(
    unzipper.Extract({ path: path.resolve("./locales") })
  );
  return true;
}

export async function uploadTranslations() {}
