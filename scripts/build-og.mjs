import sharp from 'sharp';
import { readFileSync } from 'fs';
import { resolve } from 'path';

const svg = readFileSync(resolve('public/og-image.svg'));

await sharp(Buffer.from(svg))
  .png()
  .toFile(resolve('public/og-image.png'));

console.log('OG image written to public/og-image.png');
