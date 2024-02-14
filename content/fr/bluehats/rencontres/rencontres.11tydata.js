const path = require("path");

module.exports = {
    tags: [
        "bluehats_posts", "rencontre", "events"
    ],
    layout: "layouts/bluehats-post.njk",
    permalink: function (data) {
        return `/${data.lang}/bluehats/${data.page.fileSlug}/`;
    },
    eleventyComputed: {
        image: data => {
            if (!data.image) {
                return {
                    path: path.resolve("./public/img/rencontre.png"),
                    alt: 'Illustration contenant le titre "Rencontre BlueHats"'
                }
            } else {
                return data.image;
            }
        },
        badges: data => {
            const postTime = new Date(data.page.date).getTime();
            const currentTime = new Date().getTime();
            if (postTime > currentTime) {
                return ["à venir"];
            } else {
                return ["passé"]
            }
        },
        start: data => data.page.date
    }
};
