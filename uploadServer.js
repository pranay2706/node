const http = require('http')
const url = require('url')
const fs = require('fs')
const extractFilename = require('./extractFilename')
const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url)
    if (parsedUrl.path === '/uploadSingle' && req.method === 'POST') {
        let body = ''
        req.on('data', chunk =>
            body += chunk.toString()
        )
        req.on('end', () => {
            body = body.toString()
            fs.writeFileSync(`${__dirname}/data/file.txt`, body)
            res.end('file uploaded successfully')
        })
    } else if (parsedUrl.path === '/uploadMultiple' && req.method === 'POST') {
    } else if (parsedUrl.path === '/uploadMultiExt' && req.method === 'POST') {
        console.log("hello")
        let body = [];
        let fileName = "";
        req.on('data', chunk => {
            body.push(chunk);
        });
        req.on('end', () => {
            try {
                fileName = extractFilename(body.toString());
                console.log('Extracted filename:', fileName);
            } catch (error) {
                console.error('Error extracting filename:', error.message);
            }
            const buffer = Buffer.concat(body);
            fs.writeFile(`${__dirname}/data/${fileName}`, buffer.toString('base64'), (err) => {
                if (err) {
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('Error saving file');
                    return;
                }
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.end('File uploaded successfully');
            });
        });
    } else {
        res.statusCode = 400
        res.end('Not Found')
    }
})
server.listen(8080, '127.0.0.1', () => {
    console.log('server listing on port 8080')
})









