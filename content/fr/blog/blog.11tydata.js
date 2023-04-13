module.exports = {
    tags: [
        "posts"
    ],
    "layout": "layouts/post.njk",
    eleventyComputed: {
        segments: [{
            url: '/blog',
            title: 'Blog'
        }],
        image: data => {
            if (data.image.src) {
                return {
                    path: `${__dirname}/../../${data.page.filePathStem}/../${data.image.src}`,
                    alt: data.image.alt || 'Blog Post Figure',
                }
            } else {
                return undefined;
            }
        }
    }
};
