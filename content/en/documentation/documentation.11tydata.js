module.exports = {
    permalink: function (data) {
        return `/en/doc/${this.slugify(data.page.fileSlug)}/`;
    }
};