import postcss from 'postcss';
import postcssImport from 'postcss-import';
import postcssImportExtGlob from 'postcss-import-ext-glob';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import fs from 'node:fs/promises';
import path from 'node:path';

export const cssConfig = eleventyConfig => {
  eleventyConfig.addTemplateFormats('css');

  eleventyConfig.addExtension('css', {
    outputFileExtension: 'css',
    compile: async (inputContent, inputPath) => {
      let outputPath;

      if (inputPath.endsWith('/src/assets/css/global.css')) {
        outputPath = './src/_includes/css/global-inline.css';
      } else if (inputPath.includes('/src/assets/css/components/')) {
        const filename = path.basename(inputPath);
        outputPath = `./dist/assets/components/${filename}`;
      } else {
        return () => '';
      }

      const result = await postcss([
        postcssImportExtGlob,
        postcssImport,
        tailwindcss,
        autoprefixer,
        cssnano
      ]).process(inputContent, {from: inputPath});

      await fs.mkdir(path.dirname(outputPath), {recursive: true});

      await fs.writeFile(outputPath, result.css);

      return () => result.css;
    }
  });
};
