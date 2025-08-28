const fs = require('fs');
const path = require('path');

const folder = path.join(__dirname, 'memes/audios');
const files = fs.readdirSync(folder);

const list = files.map(file => {
  return `{ title: "${path.parse(file).name}", src: "memes/audios/${file}" }`;
});

const content = `const AUDIOS = [\n  ${list.join(',\n  ')}\n];\n`;
fs.writeFileSync(path.join(__dirname, 'audios.js'), content);

console.log("✅ audios.js generated!");
