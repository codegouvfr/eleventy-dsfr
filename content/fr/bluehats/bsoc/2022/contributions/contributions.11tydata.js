module.exports = {
    layout: "layouts/post.njk",
    permalink: function (data) {
        return `/fr/bluehats/bsoc-contributions-2022/${data.page.fileSlug}/`;
    },
    eleventyComputed: {
        segments: [
            {
                url: "/bluehats/",
                title: "BlueHats"
            },
            {
                url: "/bluehats/bsoc-contributions-2022/",
                title: "BSoC 2022 : Contributions"
            }
        ],
        showBreadcrumb: true
    }
};
