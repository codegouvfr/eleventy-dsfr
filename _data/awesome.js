const EleventyFetch = require("@11ty/eleventy-fetch");

const compareAwesomeScore = (a, b) => {
    return b.awesomeScore - a.awesomeScore;
}

const sortByAwesomeScoreOrName = (a, b) => {
    const awesomeScoreDiff = compareAwesomeScore(a, b);
    if (awesomeScoreDiff < 0 || awesomeScoreDiff > 0) {
        return awesomeScoreDiff;
    } else {
        return a.name.localeCompare(b.name);
    }
}

module.exports = async function () {
    const URL = "https://code.gouv.fr/data/awesome-codegouvfr-old.json";

    let awesome = await EleventyFetch(URL, {
        duration: "2w",
        type: "json"
    });

    return awesome.toSorted(sortByAwesomeScoreOrName);
};
