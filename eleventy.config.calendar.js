const {DateTime} = require("luxon");
const ics = require('ics');

const compareEventDate = (event) => {
    const eventTime = DateTime.fromJSDate(event.data.date, {zone: "utc"}).toMillis();
    const currentTime = DateTime.now().toMillis();
    return eventTime - currentTime;
}

module.exports = eleventyConfig => {
    eleventyConfig.addFilter("createEvents", (jsonEvents) => {
        const {error, value} = ics.createEvents(JSON.parse(jsonEvents));
        return value;
    });

    eleventyConfig.addFilter("createEvent", (jsonEvent) => {
        const {error, value} = ics.createEvent(JSON.parse(jsonEvent));
        return value;
    });

    eleventyConfig.addFilter("previousEvents", (events) => {
        return (events || []).filter(event => compareEventDate(event) < 0);
    });

    eleventyConfig.addFilter("nextEvents", (events) => {
        return (events || []).filter(event => compareEventDate(event) > 0);
    });
}