const Image = require('@11ty/eleventy-img');
const path = require('path');
const ColorThief = require('colorthief');
const htmlmin = require('html-minifier');
let sizeOf = require('image-size');

const imageShortcodePlaceholder = async (src, cls, alt, caption, loading = 'lazy', sizes = '100vw') => {
  if (!alt) {
    throw new Error(`Missing \`alt\` on myImage from: ${src}`);
  }

  let metadata = await Image(src, {
    widths: [230, 580, 770, 1200],
    formats: ['avif', 'webp', 'jpeg'],
    urlPath: '/_assets/images/',
    outputDir: './dist/_assets/images/',
    filenameFormat: function (id, src, width, format, options) {
      const extension = path.extname(src);
      const name = path.basename(src, extension);

      return `${name}-${width}w.${format}`;
    },
  });

  let lowsrc = metadata.jpeg[0];

  let imgPath = lowsrc.url;
  let d = sizeOf(imgPath);

  return ColorThief.getColor(imgPath).then((color) => {
    return htmlmin.minify(
      `<figure class="-mx-6 lg:-mx-24 my-8 md:my-16 lg:my-24">
  <div class="relative" style="background-color: rgba(${color},1); padding-bottom: calc(${d.height}/${
        d.width
      } * 100%);">
  <picture>
    ${Object.values(metadata)
      .map((imageFormat) => {
        return `  <source type="${imageFormat[0].sourceType}" srcset="${imageFormat
          .map((entry) => entry.srcset)
          .join(', ')}" sizes="${sizes}">`;
      })
      .join('\n')}

        <img
        class="${cls} lazy"
        src="/_assets/images/image-placeholder.png"
        data-src="./src${lowsrc.url}"
        alt="${alt}"
        caption="${caption}"
        width="${lowsrc.width}"
        height="${lowsrc.height}"
        decoding="async">


    </picture></div>
    ${caption ? `<figcaption class="py-2 px-6 text-xs text-black">${caption}</figcaption>` : ``}
</figure>`,
      { collapseWhitespace: true }
    );
  });
};

module.exports = imageShortcodePlaceholder;
