const fs = require("fs");
const fsPromises = fs.promises;
const path = require("path");

const {DateTime} = require("luxon");
const ics = require('ics');

const compareEventDate = (event) => {
    const eventTime = DateTime.fromFormat(event.start.join("-"), "yyyy-L-d-HH-m", {zone: "utc"})
        .toJSDate().getTime();
    const currentTime = new Date().getTime();
    return eventTime - currentTime;
}

const readEventsFile = async (dir) => {
    let filehandle = null;
    try {
        filehandle = await fsPromises.open(path.resolve(dir.input, dir.data, "events.json"), "r");
        return filehandle.readFile({
            encoding: "utf8"
        });
    } finally {
        if (filehandle) {
            await filehandle.close();
        }
    }
};

const createCalendar = (events) => new Promise((resolve, reject) => {
    ics.createEvents(events, (error, value) => {
        if (error) {
            return reject(error);
        }
        return resolve(value);
    });
});

module.exports = eleventyConfig => {
    eleventyConfig.addFilter("previousEvents", (events) => {
        return (events || []).filter(event => compareEventDate(event) < 0);
    });

    eleventyConfig.addFilter("nextEvents", (events) => {
        return (events || []).filter(event => compareEventDate(event) > 0);
    });

    eleventyConfig.addFilter("readableEventDate", function readableEventDate(eventDate, format, zone) {
        const jsEventDate = DateTime.fromFormat(eventDate.join(" "), "yyyy L d HH m", {zone: zone || "utc"}).toJSDate();
        return eleventyConfig.getFilter("readableDate").call(this, jsEventDate, format, zone);
    });

    eleventyConfig.on('eleventy.after', async ({dir, results, runMode, outputMode}) => {

        const events = JSON.parse(await readEventsFile(dir));

        const calendar = await createCalendar(events);

        fs.writeFileSync(path.resolve(dir.output, "calendar.ics"), calendar);
    });
}