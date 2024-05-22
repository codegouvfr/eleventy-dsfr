const {DateTime} = require("luxon");
const {nanoid} = require ("nanoid");

const markdownItAnchor = require("markdown-it-anchor");
const markdownItAttrs = require("markdown-it-attrs");
const markdownItContainer = require("markdown-it-container");

const pluginRss = require("@11ty/eleventy-plugin-rss");
const pluginSyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginBundle = require("@11ty/eleventy-plugin-bundle");
const pluginNavigation = require("@11ty/eleventy-navigation");
const {EleventyHtmlBasePlugin} = require("@11ty/eleventy");
const {EleventyI18nPlugin} = require("@11ty/eleventy");
const i18n = require("@codegouvfr/eleventy-plugin-i18n");
const pluginCalendar = require("@codegouvfr/eleventy-plugin-calendar");

const customMarkdownContainers = require("./markdown-custom-containers");

const {translations} = require("./_data/i18n");

module.exports = function (eleventyConfig) {
    // Copy the contents of the `public` folder to the output folder
    // For example, `./public/css/` ends up in `_site/css/`
    eleventyConfig.addPassthroughCopy({
        "./public/": "/",
        "./node_modules/@gouvfr/dsfr/dist/favicon": "/favicon",
        "./node_modules/@gouvfr/dsfr/dist/fonts": "/css/fonts",
        "./node_modules/@gouvfr/dsfr/dist/icons": "/css/icons",
        "./node_modules/@gouvfr/dsfr/dist/dsfr.min.css": "/css/dsfr.min.css",
        "./node_modules/@gouvfr/dsfr/dist/utility/utility.min.css": "/css/utility/utility.min.css",
        "./node_modules/@gouvfr/dsfr/dist/dsfr.module.min.js": "/js/dsfr.module.min.js",
        "./node_modules/@gouvfr/dsfr/dist/dsfr.nomodule.min.js": "/js/dsfr.nomodule.min.js",
        "./node_modules/@gouvfr/dsfr/dist/artwork": "/artwork"
    });

    // Run Eleventy when these files change:
    // https://www.11ty.dev/docs/watch-serve/#add-your-own-watch-targets

    // Watch content images for the image pipeline.
    eleventyConfig.addWatchTarget("content/**/*.{svg,webp,png,jpeg}");

    // App plugins
    eleventyConfig.addPlugin(require("./eleventy.config.drafts.js"));
    eleventyConfig.addPlugin(require("./eleventy.config.i18n.js"));
    eleventyConfig.addPlugin(require("./eleventy.config.images.js"));
    eleventyConfig.addPlugin(require("./eleventy.config.pagination.js"));

    // Official plugins
    eleventyConfig.addPlugin(pluginRss);
    eleventyConfig.addPlugin(pluginSyntaxHighlight, {
        preAttributes: {tabindex: 0}
    });
    eleventyConfig.addPlugin(pluginNavigation);
    eleventyConfig.addPlugin(pluginBundle);
    eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
    eleventyConfig.addPlugin(EleventyI18nPlugin, {
        defaultLanguage: "fr",
        errorMode: "allow-fallback"
    });
    eleventyConfig.addPlugin(i18n, {
        translations,
        fallbackLocales: {
            "en": "fr"
        }
    });
    eleventyConfig.addPlugin(pluginCalendar);

    // Custom collections
    eleventyConfig.addCollection("allSortedByPathAsc", function(collectionApi) {
        return collectionApi.getAll().sort((a, b) => {
            return a.inputPath.localeCompare(b.inputPath);
        });
    });

    // Filters
    eleventyConfig.addFilter("jsDateObject", function jsDateObject(dateStr, format, zone) {
        return DateTime.fromFormat(dateStr, format || "yyyy-LL-dd", {zone: zone || "utc"}).toJSDate();
    });

    eleventyConfig.addFilter("readableDate", function readableDate(dateObj, format, zone) {
        // Formatting tokens for Luxon: https://moment.github.io/luxon/#/formatting?id=table-of-tokens
        return DateTime.fromJSDate(dateObj, {zone: zone || "utc"})
            .setLocale(this.page.lang)
            .toFormat(format || "dd LLLL yyyy");
    });

    eleventyConfig.addFilter("htmlDateString", (dateObj) => {
        // dateObj input: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
        return DateTime.fromJSDate(dateObj, {zone: "utc"}).toFormat("yyyy-LL-dd");
    });

    eleventyConfig.addFilter("getYear", (dateObj) => {
        return DateTime.fromJSDate(dateObj, {zone: "utc"}).year;
    });
    eleventyConfig.addFilter("getMonth", (dateObj) => {
        return DateTime.fromJSDate(dateObj, {zone: "utc"}).month;
    });
    eleventyConfig.addFilter("getDay", (dateObj) => {
        return DateTime.fromJSDate(dateObj, {zone: "utc"}).day;
    });
    eleventyConfig.addFilter("getHour", (dateObj) => {
        return DateTime.fromJSDate(dateObj, {zone: "utc"}).hour;
    });
    eleventyConfig.addFilter("getMinute", (dateObj) => {
        return DateTime.fromJSDate(dateObj, {zone: "utc"}).minute;
    });

    // Get the first `n` elements of a collection.
    eleventyConfig.addFilter("head", (array, n) => {
        if (!Array.isArray(array) || array.length === 0) {
            return [];
        }
        if (n < 0) {
            return array.slice(n);
        }

        return array.slice(0, n);
    });

    // Return the smallest number argument
    eleventyConfig.addFilter("min", (...numbers) => {
        return Math.min.apply(null, numbers);
    });

    // Return all the tags used in a collection
    eleventyConfig.addFilter("getAllTags", collection => {
        let tagSet = new Set();
        for (let item of collection) {
            (item.data.tags || []).forEach(tag => tagSet.add(tag));
        }
        return Array.from(tagSet);
    });

    eleventyConfig.addFilter("filterTagList", function filterTagList(tags, addTags = []) {
        return (tags || []).filter(tag => ["all", "nav", "post", "posts", "events"]
            .concat(addTags)
            .indexOf(tag) === -1);
    });

    eleventyConfig.addFilter("findBySlug", function find(collection = [], slug = "") {
        return collection.find(post => post.fileSlug === slug);
    });

    // Customize Markdown library settings:
    eleventyConfig.amendLibrary("md", mdLib => {
        mdLib.use(markdownItAnchor, {
            permalink: markdownItAnchor.permalink.ariaHidden({
                placement: "after",
                class: "header-anchor",
                symbol: "#",
                ariaHidden: false,
            }),
            level: [1, 2, 3, 4],
            slugify: eleventyConfig.getFilter("slugify")
        });
    });

    eleventyConfig.amendLibrary("md", mdLib => {
        mdLib.renderer.rules.table_open = function(tokens, idx) {
            return '<table class="fr-table">';
        };
    });

    eleventyConfig.amendLibrary("md", mdLib => {
        mdLib.use(markdownItAttrs);
    });

    eleventyConfig.amendLibrary("md", mdLib => {
        mdLib.use(markdownItContainer, 'callout', customMarkdownContainers.callout(mdLib));
    });

    eleventyConfig.amendLibrary("md", mdLib => {
        mdLib.use(markdownItContainer, 'quote', customMarkdownContainers.quote(mdLib));
    });

    eleventyConfig.amendLibrary("md", mdLib => {
        mdLib.use(markdownItContainer, 'alert', customMarkdownContainers.alert(mdLib));
    });

    eleventyConfig.amendLibrary("md", mdLib => {
        mdLib.use(markdownItContainer, 'accordion', customMarkdownContainers.accordion(mdLib));
    });

    // Automatically strip all leading or trailing whitespace
    // to prevent Markdown lib from rendering with wrapping into paragraphs
    // instead of using Nunjucks special syntax. Learn more:
    // https://mozilla.github.io/nunjucks/templating.html#whitespace-control
    eleventyConfig.setNunjucksEnvironmentOptions({
        trimBlocks: true,
        lstripBlocks: true,
    });

    eleventyConfig.addNunjucksGlobal("nanoid", () => nanoid());

    // Features to make your build faster (when you need them)

    // If your passthrough copy gets heavy and cumbersome, add this line
    // to emulate the file copy on the dev server. Learn more:
    // https://www.11ty.dev/docs/copy/#emulate-passthrough-copy-during-serve

    // eleventyConfig.setServerPassthroughCopyBehavior("passthrough");

    return {
        // Control which files Eleventy will process
        // e.g.: *.md, *.njk, *.html, *.liquid
        templateFormats: [
            "md",
            "njk",
            "html",
            "liquid"
        ],

        // Pre-process *.md files with: (default: `liquid`)
        markdownTemplateEngine: "njk",

        // Pre-process *.html files with: (default: `liquid`)
        htmlTemplateEngine: "njk",

        // These are all optional:
        dir: {
            input: "content",         // default: "."
            includes: "../_includes",  // default: "_includes"
            data: "../_data",          // default: "_data"
            output: "_site"
        },

        // -----------------------------------------------------------------
        // Optional items:
        // -----------------------------------------------------------------

        // If your site deploys to a subdirectory, change `pathPrefix`.
        // Read more: https://www.11ty.dev/docs/config/#deploy-to-a-subdirectory-with-a-path-prefix

        // When paired with the HTML <base> plugin https://www.11ty.dev/docs/plugins/html-base/
        // it will transform any absolute URLs in your HTML to include this
        // folder name and does **not** affect where things go in the output folder.
        pathPrefix: "/",
    };
};
