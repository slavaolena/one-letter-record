import fs from 'node:fs';
import path from 'node:path';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
const filePath = path.join(outputDir, 'entry.txt');

// Create output directory if it doesn't exist
fs.mkdirSync(outputDir, { recursive: true });

// Write the letter "P" to entry.txt
// P stands for Productive - a day of building bounties and helping users
fs.writeFileSync(filePath, 'P');

console.log(`Successfully wrote letter "P" to ${filePath}`);
