import fs from 'fs';
import { transformFileSync } from '@babel/core';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Babel configuration for React JSX transformation with automatic runtime
const babelConfig = {
  presets: [
    ['@babel/preset-react', { 
      runtime: 'automatic'
    }]
  ]
};

// Function to transpile JSX to JS
function transpileJSX(inputPath, outputPath) {
  try {
    const result = transformFileSync(inputPath, babelConfig);
    fs.writeFileSync(outputPath, result.code);
    console.log(`Transpiled ${inputPath} -> ${outputPath}`);
    return true;
  } catch (error) {
    console.error(`Error transpiling ${inputPath}:`, error.message);
    return false;
  }
}

// Paths
const distReactDir = join(__dirname, '../dist/react');
const jsxPath = join(distReactDir, 'XmasTree.jsx');
const jsPath = join(distReactDir, 'XmasTree.js');

// Transpile JSX to JS
if (fs.existsSync(jsxPath)) {
  const success = transpileJSX(jsxPath, jsPath);
  if (success) {
    console.log('Build completed successfully!');
  } else {
    console.error('Build failed!');
    process.exit(1);
  }
} else {
  console.error(`Source file not found: ${jsxPath}`);
  process.exit(1);
}