const http = require('http');

http.createServer((req, res) => {
    res.write("Hello From Server")
    res.end()
}).listen(3000)