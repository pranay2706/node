const http = require('http');
const url = require('url')
const server = http.createServer((req, res) => {
    const parsedUrl = new URL('http://example.com:8080/path/name?query=string#hash');
    console.log(parsedUrl.searchParams.get('query'));
    console.log(parsedUrl.searchParams.append('query'));
    if (req.url === '/hello') {
        if (req.method === 'GET') {
            res.statusCode = 200;
            res.end('hello from the server');
        } else if (req.method === 'POST') {
            let body = '';
            req.on('data', chunk => {
                body += chunk.toString();
            });
            req.on('end', () => {
                res.statusCode = 200;
                res.end(`Received POST data: ${body}`);
            });
        } else {
            res.statusCode = 405;
            res.end(`Method ${req.method} not allowed`);
        }
    } else {
        res.statusCode = 404;
        res.end('Not Found');
    }
});
server.listen(8080, '127.0.0.1', () => {
    console.log('Server listening on port 8080');
});







