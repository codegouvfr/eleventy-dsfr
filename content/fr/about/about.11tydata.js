module.exports = {
    permalink: function (data) {
        return `/fr/mission/${this.slugify(data.page.fileSlug)}/`;
    }
};