const path = require("path");

module.exports = {
    tags: [
        "bluehats_posts", "gazette"
    ],
    layout: "layouts/bluehats-post.njk",
    permalink: function (data) {
        return `/${data.lang}/bluehats/${data.page.fileSlug}/`;
    },
    description: "Un condensé des dernières actualités BlueHats",
    eleventyComputed: {
        segments: [{
            url: "/blog/",
            title: "Blog"
        }],
        image: data => {
            return {
                path: path.resolve(`${data.page.inputPath}/../gazette.png`),
                alt: "Gazette BlueHats"
            };
        }
    }
};
