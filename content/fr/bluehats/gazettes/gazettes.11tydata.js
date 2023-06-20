const path = require("path");

module.exports = {
    tags: [
        "bluehats_posts", "gazette"
    ],
    layout: "layouts/bluehats-post.njk",
    permalink: function (data) {
        return `/${data.lang}/bluehats/${data.page.fileSlug}/`;
    },
    description: "Un condensé des dernières actualités BlueHats.",
    eleventyComputed: {
        image: data => {
            if (!data.image) {
                return {
                    path: path.resolve("./public/img/gazette.png"),
                    alt: 'Illustration contenant le titre "Gazette BlueHats"'
                }
            } else {
                return data.image;
            }
        }
    }
};
