const path = require("path");

module.exports = {
    tags: [
        "bluehats_posts", "rencontre"
    ],
    layout: "layouts/post.njk",
    permalink: function (data) {
        return `/${data.lang}/bluehats/${data.page.fileSlug}/`;
    },
    eleventyComputed: {
        segments: [{
            url: "/blog/",
            title: "Blog"
        }],
        image: data => {
            if (!data.image) {
                return {
                    path: path.resolve("./public/img/rencontre.png"),
                    alt: 'Illustration contenant le titre "Rencontre BlueHats"'
                }
            } else {
                return data.image;
            }
        }
    }
};
