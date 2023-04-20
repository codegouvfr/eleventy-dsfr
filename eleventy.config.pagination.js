const paginatedUrl = (url, pageNumber) => {
    const trimmedUrl = url.endsWith('/') ? url.slice(0, -1) : url;
    return `${trimmedUrl}/page-${pageNumber}/`
}

const chunk = (arr, size) =>
    Array.from({length: Math.ceil(arr.length / size)}, (v, i) =>
        arr.slice(i * size, i * size + size)
    );

module.exports = eleventyConfig => {
    eleventyConfig.addFilter("paginated_url", function paginated_url(url, pageNumber) {
        return paginatedUrl(url, pageNumber);
    });
    eleventyConfig.addFilter("pagination_object", function pagination_object(pagination, url) {
        const filteredHrefs = pagination.hrefs.filter(href => href.startsWith(url));
        const pageCount = filteredHrefs.length;
        const pageNumber = pagination.pageNumber % pageCount;
        const currentPageNumber = pageNumber + 1;
        return {
            pageNumber: pageNumber,
            hrefs: filteredHrefs,
            href: {
                next: currentPageNumber < pageCount ? paginatedUrl(url, currentPageNumber + 1) : "",
                previous: currentPageNumber > 1 ? paginatedUrl(url, currentPageNumber - 1) : "",
                first: url,
                last: paginatedUrl(url, pageCount)
            }
        };
    });

    eleventyConfig.addCollection("tags4x4", function (collection) {
        let paginationSize = 4;
        let tagMap = [];
        [...new Set(collection.getAllSorted() // Array of unique tags
            .filter(item => item.data.tags) // Filter items without any tag
            .map(item => item.data.tags)
            .flat()
            .filter(tag => {
                return !["all", "posts", "posts", "tagList"].includes(tag); // Remove some tags
            }))].forEach(tag => {
            const tagItems = collection.getFilteredByTag(tag);
            const pagedItems = chunk(tagItems, paginationSize)
            pagedItems.forEach((pagedItem, pageNumber) => {
                tagMap.push({
                    tagName: tag,
                    pageNumber: pageNumber,
                    pageData: pagedItems[pageNumber]
                });
            });
        });
        return tagMap;
    });
}
