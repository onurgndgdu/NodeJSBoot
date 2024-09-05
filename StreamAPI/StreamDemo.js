const fs = require('fs');

const readableStream = fs.createReadStream('largeFile.txt', 'utf8');

readableStream.on('data', (chunk) => {
  console.log('New data:', chunk);
});
