const http = require('http')

const port = 8080

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('hello')
        console.log(req.file)
    }
})

server.listen(port, () => {
    console.log('server running on port ' + port)
})

