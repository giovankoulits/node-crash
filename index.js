///
///
///
///
const fs = require('node:fs');
const readableStream = fs.createReadStream('./file.txt', {
  encoding: 'utf-8',
  highWaterMark: 2,
});

const writableStream = fs.createWriteStream('./file2.txt', {
  encoding: 'utf-8',
});

readableStream.on('data', (chunk) => {
  console.log(chunk);
  writableStream.write(chunk);
});
console.log('hi');
