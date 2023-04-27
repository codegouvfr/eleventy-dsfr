const chalk = require("chalk");

module.exports = {
    tags: [
        "posts"
    ],
    layout: "layouts/post.njk",
    permalink: function (data) {
        return `/${data.lang}/blog/${data.page.fileSlug}/`;
    },
    eleventyComputed: {
        segments: [{
            url: "/blog/",
            title: "Blog"
        }],
        image: data => {
            if (data.image.src) {
                if (!data.image.alt) {
                    console.warn(chalk.yellow(`[a11y] Missing alternative text for image source ${data.image.src}.`));
                }
                return {
                    path: `${__dirname}/../../${data.page.filePathStem}/../${data.image.src}`,
                    alt: data.image.alt || data.title,
                }
            } else {
                return undefined;
            }
        }
    }
};
