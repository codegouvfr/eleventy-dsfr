var _paq = window._paq = window._paq || [];
/* tracker methods like "setCustomDimension" should be called before "trackPageView" */
_paq.push(["setExcludedQueryParams", ["simulationId", "_csrf"]]);
_paq.push(['trackPageView']);
_paq.push(['enableLinkTracking']);
(function () {
    var u = "https://stats.data.gouv.fr/";
    _paq.push(['setTrackerUrl', u + 'matomo.php']);
    _paq.push(['setSiteId', '95']);
    var d = document, g = d.createElement('script'), s = d.getElementsByTagName('script')[0];
    g.async = true;
    g.src = u + 'matomo.js';
    s.parentNode.insertBefore(g, s);
})();