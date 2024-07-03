const fs = require('fs');

const writableStream = fs.createWriteStream('output.txt');

writableStream.write('Hello, world!\n');
writableStream.write('Another line.');

writableStream.end();

writableStream.on('finish', function () {
    console.log('Data has been written to output.txt.');
});

writableStream.on('error', function (err) {
    console.error('Error writing to file:', err);
});
