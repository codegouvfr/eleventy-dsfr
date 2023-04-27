const PAGE_PREFIX = "page-";

const paginatedUrl = (url, pageNumber) => {
    const trimmedUrl = url.endsWith("/") ? url.slice(0, -1) : url;
    return `${trimmedUrl}/page-${pageNumber}/`

}

module.exports = eleventyConfig => {
    eleventyConfig.addFilter("paginated_url", (url, pageNumber) => {
        return paginatedUrl(url, pageNumber);
    });

    eleventyConfig.addFilter("pagination_object", (pagination, url) => {
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
                last: pageCount > 1 ? paginatedUrl(url, pageCount) : url
            }
        };
    });

    eleventyConfig.addGlobalData("page_prefix", PAGE_PREFIX);
}
