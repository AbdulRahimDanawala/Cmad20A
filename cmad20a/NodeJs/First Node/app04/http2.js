const http = require('http');

let server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": 'text/html' })
    switch (req.url) {
        case '/home':
            res.write('<h2>Welcome To Rahim  Home Page</h2>')
            break;
        case '/about':
            res.write('<h2>Welcome To Rahim about Page</h2>')
            break;
        case '/contact':
            res.write('<h2>Welcome To Rahim Contact Page</h2>')
            break;
        default:
            res.write('<h2>Welcome To my web</h2>')

            break;
    }
    res.end()
})
server.listen(3000, (err) => {
    if (err) {
        console.log('Error is Running')
        console.log(err)
    }
    console.log('Server Start Sucessfully')
})