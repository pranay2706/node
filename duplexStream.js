const { Duplex } = require('stream');

const duplexStream = new Duplex({
    read(size) {

    },
    write(chunk, encoding, callback) {

        console.log('Received:', chunk.toString());

        this.push(chunk);
        callback();
    }
});

duplexStream.on('data', function (chunk) {
    console.log('Received data:', chunk.toString());
});

duplexStream.write('Hello, Duplex stream!');
duplexStream.write('Hello,');

duplexStream.end();
