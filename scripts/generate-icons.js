const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const PUBLIC_DIR = path.join(__dirname, '../public');
const SVG_PATH = path.join(PUBLIC_DIR, 'icon.svg');

async function generateIcons() {
  try {
    // Read the SVG file
    const svgBuffer = fs.readFileSync(SVG_PATH);
    
    // Generate favicon.ico (multiple sizes in one file)
    await sharp(svgBuffer)
      .resize(32, 32)
      .toFile(path.join(PUBLIC_DIR, 'favicon.ico'));
    
    // Generate apple-icon.png
    await sharp(svgBuffer)
      .resize(180, 180)
      .png()
      .toFile(path.join(PUBLIC_DIR, 'apple-icon.png'));
    
    console.log('✅ Icons generated successfully!');
  } catch (error) {
    console.error('❌ Error generating icons:', error);
  }
}

generateIcons(); 