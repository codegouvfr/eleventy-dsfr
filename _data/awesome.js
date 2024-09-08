const EleventyFetch = require("@11ty/eleventy-fetch");

module.exports = async function () {
    const URL = "https://code.gouv.fr/data/awesome-codegouvfr.json";

    let awesome = await EleventyFetch(URL, {
        duration: "2w",
        type: "json"
    });

    return awesome;
};
