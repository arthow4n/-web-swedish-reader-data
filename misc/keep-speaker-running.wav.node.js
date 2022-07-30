// Script for generating that keep-speaker-running.wav
const WaveFile = require("wavefile").WaveFile;
const fs = require("fs");
const wav = new WaveFile();
wav.fromScratch(1, 1, "8", [Array.from(Array(60 * 60 * 1)).fill(0)]);
fs.writeFileSync("./keep-speaker-running.wav", wav.toBuffer());

// Then use command to transform into mp3
// ffmpeg -i ./keep-speaker-running.wav -vn -ar 8000 -ac 1 -b:a 1 ./keep-speaker-running.mp3
