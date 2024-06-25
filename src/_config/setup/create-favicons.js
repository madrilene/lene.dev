import fs from 'node:fs';
import sharp from 'sharp';
import {sharpsToIco} from 'sharp-ico';
import {colorVariations} from '../../_data/designTokens/colorArray.js';

const primaryColor = colorVariations[Math.floor(Math.random() * colorVariations.length)];

async function createFavicons() {
  const outputDir = 'src/assets/images/favicons';
  // Ensure the directory exists
  fs.mkdirSync(outputDir, {recursive: true});

  // ------------------ define base SVG
  const svgContent = `
		<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		width="1em"
		height="1em"
		fill="${primaryColor}"
	>
		<path
			fill-rule="evenodd"
			d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
			clip-rule="evenodd"
		/>
	</svg>
	`;

  const svgBuffer = Buffer.from(svgContent);

  // ------------------ Save original SVG
  fs.writeFileSync(`${outputDir}/favicon.svg`, svgBuffer);
  console.log('Original SVG saved');

  // ------------------ Generate PNGs
  await sharp(svgBuffer).resize(192, 192).toFile(`${outputDir}/icon-192x192.png`);
  await sharp(svgBuffer).resize(512, 512).toFile(`${outputDir}/icon-512x512.png`);
  await sharp(svgBuffer).resize(180, 180).toFile(`${outputDir}/icon-180x180.png`);

  // Generate maskable icon with padding
  const maskableSize = 512;
  const padding = Math.round(maskableSize * 0.1);
  const newSize = Math.round(maskableSize - 2 * padding); // Ensure newSize is a whole number
  await sharp(svgBuffer)
    .resize(newSize, newSize) // Resize to new size considering padding
    .extend({
      top: padding,
      bottom: padding,
      left: padding,
      right: padding,
      background: {r: 0, g: 0, b: 0, alpha: 0} // Transparent padding
    })
    .toFile(`${outputDir}/maskable-512x512.png`);

  // Generate ICO
  const iconSharp = sharp(svgBuffer).resize(32, 32);
  await sharpsToIco([iconSharp], `${outputDir}/favicon.ico`, {sizes: [32]});

  console.log('Favicons generated');
}

createFavicons();
