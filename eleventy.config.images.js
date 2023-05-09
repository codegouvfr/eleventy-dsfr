const path = require("path");
const eleventyImage = require("@11ty/eleventy-img");

const getOptions = widths => {
	return {
		widths: widths || ["auto"],
		formats: ["avif", "webp", "auto"],
	}
};

const getImageAttributes = (cls, alt, sizes) => {
	return {
		class: `fr-responsive-img ${cls}`,
		alt,
		sizes,
		loading: "lazy",
		decoding: "async",
	};
};

module.exports = eleventyConfig => {
	function relativeToInputPath(inputPath, relativeFilePath) {
		let split = inputPath.split("/");
		split.pop();

		return path.resolve(split.join(path.sep), relativeFilePath);
	}

	// Eleventy Image shortcode
	// https://www.11ty.dev/docs/plugins/image/
	eleventyConfig.addAsyncShortcode("image", async function imageShortcode(src, alt, widths, sizes, cls) {
		// Full list of formats here: https://www.11ty.dev/docs/plugins/image/#output-formats
		// Warning: Avif can be resource-intensive so take care!
		let file = relativeToInputPath(this.page.inputPath, src);
		const options = getOptions(widths);
		options["outputDir"] = path.join(eleventyConfig.dir.output, "img"); // Advanced usage note: `eleventyConfig.dir` works here because we’re using addPlugin.
		let metadata = await eleventyImage(file, options);

		// TODO loading=eager and fetchpriority=high
		return eleventyImage.generateHTML(metadata, getImageAttributes(cls, alt, sizes));
	});

	// Synchronous method for Nunjucks macros
	eleventyConfig.addNunjucksShortcode("imageSync", function imageShortcode(src, alt, widths, sizes, cls) {
		const options = getOptions(widths);
		options["outputDir"] = path.join(eleventyConfig.dir.output, "img"); // Advanced usage note: `eleventyConfig.dir` works here because we’re using addPlugin.
		// generate images, while this is async we don’t wait
		eleventyImage(src, options);

		// get metadata even if the images are not fully generated yet
		let metadata = eleventyImage.statsSync(src, options);
		return eleventyImage.generateHTML(metadata, getImageAttributes(cls, alt, sizes));
	});
};
