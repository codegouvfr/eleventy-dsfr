const chalk = require("chalk")

const translations = require("./_data/i18n");

module.exports = eleventyConfig => {
    eleventyConfig.addFilter("i18n", function i18n(key, langOverride) {
        const lang = langOverride || this.page.lang;
        if (!translations[lang][key]) {
            console.warn(chalk.yellow(`[i18n] Could not find "${key}" in "${lang}".`));
            return key;
        }
        return translations[lang][key];
    });

    eleventyConfig.addFilter("filterCollectionLang", function filterCollectionLang(collection, langOverride) {
        const lang = langOverride || this.page.lang;
        return collection.filter(entry => entry.data.lang === lang);
    });

    eleventyConfig.addGlobalData("availableLangs", Object.keys(translations));
}
