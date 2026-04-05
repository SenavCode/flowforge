import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outPath = path.join(__dirname, '../public/og-image.png');
const logoPath = path.join(__dirname, '../public/images/_Logo/FlowForgeLogo.PNG');

const W = 1200;
const H = 630;

// Build SVG with embedded logo (base64) if available
let logoBase64 = '';
let logoMimeType = 'image/png';
if (fs.existsSync(logoPath)) {
  const logoBuffer = fs.readFileSync(logoPath);
  logoBase64 = logoBuffer.toString('base64');
  if (logoPath.toLowerCase().endsWith('.png')) logoMimeType = 'image/png';
  else if (logoPath.toLowerCase().endsWith('.jpg') || logoPath.toLowerCase().endsWith('.jpeg')) logoMimeType = 'image/jpeg';
}

const logoSection = logoBase64
  ? `<image href="data:${logoMimeType};base64,${logoBase64}" x="400" y="80" width="400" height="116" preserveAspectRatio="xMidYMid meet" />`
  : '';

const logoYOffset = logoBase64 ? 240 : 160;

const svg = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${W}" height="${H}">
  <!-- Background -->
  <rect width="${W}" height="${H}" fill="#0D0F0E"/>

  <!-- Subtle green glow top-right -->
  <radialGradient id="glow1" cx="75%" cy="30%" r="50%">
    <stop offset="0%" stop-color="#4ADE80" stop-opacity="0.08"/>
    <stop offset="100%" stop-color="#0D0F0E" stop-opacity="0"/>
  </radialGradient>
  <rect width="${W}" height="${H}" fill="url(#glow1)"/>

  <!-- Logo -->
  ${logoSection}

  <!-- Headline -->
  <text
    x="600" y="${logoYOffset}"
    font-family="system-ui, -apple-system, sans-serif"
    font-weight="800"
    font-size="56"
    fill="#F1F5F3"
    text-anchor="middle"
    dominant-baseline="middle"
  >Know your breakout</text>
  <text
    x="600" y="${logoYOffset + 72}"
    font-family="system-ui, -apple-system, sans-serif"
    font-weight="800"
    font-size="56"
    fill="#F1F5F3"
    text-anchor="middle"
    dominant-baseline="middle"
  >before you trade it.</text>

  <!-- Subtext -->
  <text
    x="600" y="${logoYOffset + 160}"
    font-family="system-ui, -apple-system, sans-serif"
    font-weight="500"
    font-size="28"
    fill="#4ADE80"
    text-anchor="middle"
    dominant-baseline="middle"
  >TradingView Indicators for Futures Traders</text>

  <!-- Bottom domain -->
  <text
    x="600" y="${H - 40}"
    font-family="system-ui, -apple-system, sans-serif"
    font-weight="400"
    font-size="20"
    fill="#2A2F2D"
    text-anchor="middle"
    dominant-baseline="middle"
  >flowforge-trading.com</text>
</svg>`;

const svgBuffer = Buffer.from(svg);

await sharp(svgBuffer)
  .png()
  .toFile(outPath);

console.log(`OG image written to ${outPath}`);
