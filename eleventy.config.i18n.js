const {availableLang} = require("./_data/i18n");

module.exports = eleventyConfig => {
    eleventyConfig.addFilter("filterCollectionLang", function filterCollectionLang(collection, langOverride) {
        const lang = langOverride || this.page.lang;
        return collection.filter(entry => entry.data.lang === lang);
    });

    eleventyConfig.addGlobalData("availableLang", availableLang);
}
