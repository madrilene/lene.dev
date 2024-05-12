import fs from 'node:fs';
import Color from 'colorjs.io';
import rgbHex from 'rgb-hex';

// ------------------ select a base color to generate the whole color palette
const baseColorHex = '#c33c00';
const baseColor = new Color(baseColorHex).to('oklch');

// ------------------ create an array of primary 18 colors manipulating the hue of the base color
const generateHueVariations = (baseColor, steps, hueIncrement) => {
  let colors = [];
  for (let i = 0; i < steps; i++) {
    if (i >= 3 && i <= 9) {
      continue;
    }
    const hueAdjustedColor = baseColor.clone().set({h: h => (h + hueIncrement * i) % 360});
    colors.push(hueAdjustedColor);
  }
  return colors;
};

const colorVariations = generateHueVariations(baseColor, 36, 10);

// Convert each color to a hex string for easy usage
const colorHexVariations = colorVariations.map(color => '#' + rgbHex(color.to('srgb').toString()));

// Write colorVariations to a JS module
fs.writeFileSync(
  './src/_data/designTokens/colorArray.js',
  `export const colorVariations = ${JSON.stringify(colorHexVariations, null, 2)};`
);
