const EleventyFetch = require("@11ty/eleventy-fetch");

module.exports = async function () {
    const URL = "https://code.gouv.fr/data/sill.json";
    // const URL = "https://code.gouv.fr/sill/api/sill.json"; // To use when SILL is up

    let sill = await EleventyFetch(URL, {
        duration: "2w",
        type: "json"
    });

    return sill;
};