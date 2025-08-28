const fs = require("fs");
const path = "memes/videos/";

fs.readdir(path, (err, files) => {
  if (err) throw err;

  let arr = files
    .filter(f => f.endsWith(".mp4") || f.endsWith(".webm"))
    .map(f => `  { title: "${f}", src: "${path}${f}" }`);

  let output = "const VIDEOS = [\n" + arr.join(",\n") + "\n];";
  fs.writeFileSync("videos.js", output);

  console.log("✅ videos.js generated!");
});
