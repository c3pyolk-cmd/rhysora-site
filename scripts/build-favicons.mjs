import sharp from 'sharp';
import { resolve } from 'path';

const source = resolve('public/logo.png');

const sizes = [
  { size: 32,  name: 'favicon-32x32.png' },
  { size: 16,  name: 'favicon-16x16.png' },
  { size: 180, name: 'apple-touch-icon.png' },
  { size: 192, name: 'icon-192.png' },
  { size: 512, name: 'icon-512.png' },
];

for (const { size, name } of sizes) {
  await sharp(source)
    .resize(size, size, {
      fit: 'contain',
      background: { r: 10, g: 14, b: 26, alpha: 1 }
    })
    .png()
    .toFile(resolve(`public/${name}`));
  console.log(`Generated public/${name}`);
}
