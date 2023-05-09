const path = require("path");

module.exports = {
    tags: [
        "bluehats_posts", "rencontre"
    ],
    layout: "layouts/bluehats-post.njk",
    permalink: function (data) {
        return `/${data.lang}/bluehats/${data.page.fileSlug}/`;
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
                    path: path.resolve(`${data.page.inputPath}/..`, data.image.src),
                    alt: data.image.alt || data.title,
                }
            } else {
                return {
                    path: path.resolve(`${data.page.inputPath}/../rencontre.png`),
                    alt: "Rencontre BlueHats"
                };
            }
        }
    }
};
