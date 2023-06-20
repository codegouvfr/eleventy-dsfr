const SEARCH_RESULTS_URL = `/${document.documentElement.lang}/search-results/`;
const SEARCH_PARAM = "term";

(() => {
    const SEARCH_SELECTOR = "#header-search";

    const searchBox = document.querySelector(SEARCH_SELECTOR);
    const searchInput = searchBox.querySelector("input");
    const searchBtn = searchBox.querySelector("button");

    const search = () => {
        location.href = `${SEARCH_RESULTS_URL}?${SEARCH_PARAM}=${searchInput.value}`;
    }

    searchInput.addEventListener("keydown", async (event) => {
        if (event.code === "Enter") {
            await search();
        }
    });
    searchBtn.addEventListener("click", async () => {
        await search();
    });
})();
