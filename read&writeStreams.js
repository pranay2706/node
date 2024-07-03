const fs = require('fs')

const redableStream = fs.createReadStream('new.txt')
const writableStream = fs.createWriteStream('write.txt')

redableStream.pipe(writableStream)