module.exports = {
    tags: [
        "posts"
    ],
    layout: "layouts/post.njk",
    permalink: function (data) {
        return `/${data.lang}/blog/${data.page.fileSlug}/`;
    }
};
