const path = require('path');
const CleanCSS = require('clean-css');

// module import filters
const {
	wordCount,
	limit,
	sortByKey,
	toHtml,
	where,
	toISOString,
	formatDate,
	dividedBy,
	newlineToBr,
	toAbsoluteUrl,
	stripNewlines,
	stripHtml,
	getLatestCollectionItemDate,
	minifyCss
} = require('./config/filters/index.js');

// module import shortcodes
const {
	asideShortcode,
	insertionShortcode,
	imageShortcode,
	imageShortcodePlaceholder,
	liteYoutube,
	svg,
	svgSprite
} = require('./config/shortcodes/index.js');

// module import collections
const {getAllProjects} = require('./config/collections/index.js');

// module import transforms

// plugins
const markdownLib = require('./config/plugins/markdown.js');
const {EleventyRenderPlugin} = require('@11ty/eleventy');
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const {slugifyString} = require('./config/utils');
const {escape} = require('lodash');

const TEMPLATE_ENGINE = 'njk';

module.exports = function (eleventyConfig) {
	eleventyConfig.setLiquidOptions({
		dynamicPartials: true,
		strict_filters: true
	});

	// 	--------------------- Custom Watch Targets -----------------------
	eleventyConfig.addWatchTarget('./src/_assets');
	eleventyConfig.addWatchTarget('./utils/*.js');
	eleventyConfig.addWatchTarget('./tailwind.config.js');

	// --------------------- layout aliases -----------------------
	eleventyConfig.addLayoutAlias('base', 'base.njk');
	eleventyConfig.addLayoutAlias('page', 'page.njk');
	eleventyConfig.addLayoutAlias('home', 'home.njk');
	eleventyConfig.addLayoutAlias('post', 'post.njk');

	// 	---------------------  Custom filters -----------------------
	eleventyConfig.addFilter('wordCount', wordCount);
	eleventyConfig.addFilter('limit', limit);
	eleventyConfig.addFilter('sortByKey', sortByKey);
	eleventyConfig.addFilter('where', where);
	eleventyConfig.addFilter('escape', escape);
	eleventyConfig.addFilter('toHtml', toHtml);
	eleventyConfig.addFilter('toIsoString', toISOString);
	eleventyConfig.addFilter('formatDate', formatDate);
	eleventyConfig.addFilter('dividedBy', dividedBy);
	eleventyConfig.addFilter('newlineToBr', newlineToBr);
	eleventyConfig.addFilter('toAbsoluteUrl', toAbsoluteUrl);
	eleventyConfig.addFilter('stripNewlines', stripNewlines);
	eleventyConfig.addFilter('stripHtml', stripHtml);
	eleventyConfig.addFilter('slugify', slugifyString);
	eleventyConfig.addFilter('toJson', JSON.stringify);
	eleventyConfig.addFilter('fromJson', JSON.parse);
	eleventyConfig.addFilter('getLatestCollectionItemDate', getLatestCollectionItemDate);
	eleventyConfig.addFilter('cssmin', minifyCss);
	eleventyConfig.addFilter('keys', Object.keys);
	eleventyConfig.addFilter('values', Object.values);
	eleventyConfig.addFilter('entries', Object.entries);

	// 	--------------------- Custom shortcodes ---------------------
	eleventyConfig.addPairedShortcode('aside', asideShortcode);
	eleventyConfig.addPairedShortcode('insertion', insertionShortcode);
	eleventyConfig.addNunjucksAsyncShortcode('image', imageShortcode);
	eleventyConfig.addNunjucksAsyncShortcode('imagePlaceholder', imageShortcodePlaceholder);
	eleventyConfig.addShortcode('youtube', liteYoutube);
	eleventyConfig.addShortcode('svg', svg);
	eleventyConfig.addNunjucksAsyncShortcode('svgSprite', svgSprite);
	eleventyConfig.addShortcode('year', () => `${new Date().getFullYear()}`); // current year, stephanie eckles

	// 	--------------------- Custom transforms ---------------------

	// 	--------------------- Custom collections -----------------------
	eleventyConfig.addCollection('projects', getAllProjects);

	// 	--------------------- Plugins ---------------------
	eleventyConfig.addPlugin(EleventyRenderPlugin);
	eleventyConfig.addPlugin(syntaxHighlight);
	eleventyConfig.setLibrary('md', markdownLib);

	// 	--------------------- Passthrough File Copy -----------------------

	eleventyConfig.addPassthroughCopy('src/_assets/fonts/');
	eleventyConfig.addPassthroughCopy('src/_assets/svg/');
	eleventyConfig.addPassthroughCopy('src/_assets/sounds/');
	eleventyConfig.addPassthroughCopy('src/_assets/images/image-placeholder.png');
	eleventyConfig.addPassthroughCopy('src/_assets/images/opengraph-default.jpg');
	// social icons von images zu root
	eleventyConfig.addPassthroughCopy({
		'src/_assets/images/favicon/site.webmanifest': 'site.webmanifest'
	});
	eleventyConfig.addPassthroughCopy({
		'src/_assets/images/favicon/favicon.ico': 'favicon.ico'
	});
	eleventyConfig.addPassthroughCopy({
		'src/_assets/images/favicon/favicon.svg': 'favicon.svg'
	});
	eleventyConfig.addPassthroughCopy({
		'src/_assets/images/favicon/apple-touch-icon.png': 'apple-touch-icon.png'
	});
	eleventyConfig.addPassthroughCopy({
		'src/_assets/images/favicon/favicon-32x32.png': 'favicon-32x32.png'
	});
	eleventyConfig.addPassthroughCopy({
		'src/_assets/images/favicon/favicon-16x16.png': 'favicon-16x16.png'
	});
	eleventyConfig.addPassthroughCopy({
		'src/_assets/images/favicon/android-chrome-192x192.png': 'android-chrome-192x192.png'
	});
	eleventyConfig.addPassthroughCopy({
		'src/_assets/images/favicon/android-chrome-512x512.png': 'android-chrome-512x512.png'
	});
	eleventyConfig.addPassthroughCopy({
		'src/_assets/images/favicon/maskable.png': 'maskable.png'
	});

	// 	--------------------- watch for file changes during local development ---------------------
	eleventyConfig.setUseGitIgnore(false);

	return {
		dir: {
			input: 'src/',
			output: 'dist',
			includes: '_includes',
			layouts: '_layouts'
		},
		dataTemplateEngine: TEMPLATE_ENGINE,
		markdownTemplateEngine: TEMPLATE_ENGINE,
		htmlTemplateEngine: TEMPLATE_ENGINE,
		templateFormats: ['md', 'html', 'liquid', TEMPLATE_ENGINE],

		passthroughFileCopy: true
	};
};
