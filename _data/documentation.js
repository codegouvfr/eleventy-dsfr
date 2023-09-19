const EleventyFetch = require("@11ty/eleventy-fetch");

module.exports = async function() {
    let url = "https://code.gouv.fr/documentation/index.md";

    /* This returns a promise */
    return await EleventyFetch(url, {
        duration: "*",
        type: "text"
    });
};