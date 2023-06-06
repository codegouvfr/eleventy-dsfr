const PAGE_PREFIX = "page-";

const chunk = (arr, size) =>
    Array.from({length: Math.ceil(arr.length / size)}, (v, i) =>
        arr.slice(i * size, i * size + size)
    );

const paginatedUrl = (url, pageNumber) => {
    if (pageNumber === 1) {
        return url;
    }
    const trimmedUrl = url.endsWith("/") ? url.slice(0, -1) : url;
    return `${trimmedUrl}/page-${pageNumber}/`

}

module.exports = eleventyConfig => {
    eleventyConfig.addFilter("paginatedUrl", (url, pageNumber) => {
        return paginatedUrl(url, pageNumber);
    });

    eleventyConfig.addFilter("buildPagination", (pagination, url) => {
        const filteredHrefs = pagination.hrefs.filter(href => href.startsWith(url));
        const pageCount = filteredHrefs.length;
        const pageNumber = filteredHrefs.findIndex(href => href === pagination.hrefs[pagination.pageNumber]);
        const currentPageNumber = pageNumber + 1;
        return {
            pageNumber: pageNumber,
            hrefs: filteredHrefs,
            href: {
                next: currentPageNumber < pageCount ? paginatedUrl(url, currentPageNumber + 1) : "",
                previous: currentPageNumber > 1 ? paginatedUrl(url, currentPageNumber - 1) : "",
                first: url,
                last: pageCount > 1 ? paginatedUrl(url, pageCount) : url
            }
        };
    });

    eleventyConfig.addFilter("paginateCollectionTags", function paginateCollection(collection, paginationSize) {
        collection.sort(function (a, b) {
            return b.date - a.date; // sort by date - descending
        });
        const entryTags = collection.map(entry => entry.data.tags)
            .flat();
        let tagMap = [];
        eleventyConfig.getFilter("filterTagList")(entryTags)
            .filter((tag, index, tags) => tags.indexOf(tag) === index)
            .forEach(tag => {
                const tagEntries = collection.filter(entry => entry.data.tags.includes(tag));
                const pagedTagEntries = chunk(tagEntries, paginationSize)
                pagedTagEntries.forEach((pagedItem, pageNumber) => {
                    tagMap.push({
                        tagName: tag,
                        pageNumber: pageNumber,
                        pageData: pagedTagEntries[pageNumber]
                    });
                });
            });
        return tagMap;
    });

    eleventyConfig.addGlobalData("pagePrefix", PAGE_PREFIX);
}
