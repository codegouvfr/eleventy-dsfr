const chalk = require("chalk")

const translations = require("./_data/i18n");

const getLocalisedPosts = (collectionApi, lang) =>
    collectionApi.getFilteredByTag("posts")
        .filter(page => page.data.lang === lang);

const chunk = (arr, size) =>
    Array.from({length: Math.ceil(arr.length / size)}, (v, i) =>
        arr.slice(i * size, i * size + size)
    );

module.exports = eleventyConfig => {
    eleventyConfig.addFilter("i18n", function i18n(key, langOverride) {
        const lang = langOverride || this.page.lang;
        if (!translations[lang][key]) {
            console.warn(chalk.yellow(`[i18n] Could not find "${key}" in "${lang}".`));
            return key;
        }
        return translations[lang][key];
    });

    eleventyConfig.addGlobalData("available_langs", Object.keys(translations));

    // Localised collections
    Object.keys(translations).forEach(lang => {
        eleventyConfig.addCollection(`posts_${lang}`, collectionApi => {
            return getLocalisedPosts(collectionApi, lang);
        });

        // Localised and paginated collection
        eleventyConfig.addCollection(`tags_${lang}_4x4`, collectionApi => {
            const paginationSize = 4;
            let tagMap = [];
            const localisedPosts = getLocalisedPosts(collectionApi, lang);
            const postTags = localisedPosts.map(post => post.data.tags)
                .flat();
            eleventyConfig.getFilter("filterTagList")(postTags)
                .filter((tag, index, tags) => tags.indexOf(tag) === index)
                .forEach(tag => {
                const tagPosts = localisedPosts.filter(post => post.data.tags.includes(tag));
                const pagedTagPosts = chunk(tagPosts, paginationSize)
                pagedTagPosts.forEach((pagedItem, pageNumber) => {
                    tagMap.push({
                        tagName: tag,
                        pageNumber: pageNumber,
                        pageData: pagedTagPosts[pageNumber]
                    });
                });
            });
            return tagMap;
        });
    });
}
