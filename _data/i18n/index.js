const {readdirSync} = require('fs');

const langDirectories = readdirSync(__dirname, {withFileTypes: true})
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

const buildTranslations = () => {
    const translations = {};
    langDirectories.forEach(lang => {
        const langTranslations = require(`./${lang}`);
        for (const key in langTranslations) {
            if (!(key in translations)) {
                translations[key] = {};
            }
            translations[key][lang] = langTranslations[key];
        }
    });
    return translations;
}

module.exports = {
    availableLang: langDirectories,
    translations: buildTranslations()
};
