const path = require("path");

module.exports = {
    tags: [
        "bluehats_posts", "atelier"
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
            return {
                path: path.resolve(`${data.page.inputPath}/../atelier.png`),
                alt: "Atelier BlueHats"
            };
        },
        badges: data => {
            const postTime = new Date(data.page.date).getTime();
            const currentTime = new Date().getTime();
            if (postTime > currentTime) {
                return ["à venir"];
            }
        }
    }
};
