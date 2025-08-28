const fs = require('fs');
const path = require('path');

const folder = path.join(__dirname, 'memes/images');
const files = fs.readdirSync(folder);

const list = files.map(file => {
  return `{ title: "${path.parse(file).name}", src: "memes/images/${file}" }`;
});

const content = `const IMAGES = [\n  ${list.join(',\n  ')}\n];\n`;
fs.writeFileSync(path.join(__dirname, 'images.js'), content);

console.log("✅ images.js generated!");
