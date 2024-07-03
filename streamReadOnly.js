const fs = require('fs');
const readableStream = fs.createReadStream('text.txt', 'utf8');
readableStream.on('data', chunk => {
    console.log(`Received ${chunk.length} bytes of data.`);
    console.log(chunk);
});
readableStream.on('end', () => {
    console.log('End of file.');
});
readableStream.on('error', err => {
    console.error('An error occurred:', err.message);
});