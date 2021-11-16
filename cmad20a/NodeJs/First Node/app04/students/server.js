const http = require('http');
const enroll = require('./enroll')
const server = http.createServer((req, res) => {
    switch (req.url) {
        case "/add":
           let userName =  `User ${enroll.getAllStudents().length + 1}`
           enroll.addNewStudents(userName)
           res.writeHead(200, {'Content-Type': 'Text/JSON' })
           res.write(JSON.stringify({message: `${userName} Added Successfully`})) 
           break;
        case "/list":
            let allStudents = enroll.getAllStudents()
            res.writeHead(200, {'Content-Type': 'Text/JSON' })
            res.write(JSON.stringify({students: allStudents})) 
            
            break;

        default:
            res.writeHead(200, {'Content-Type': 'Text/html' })
            res.write('<h1>Student Management System</h1>')
            break;
    }
})

server.listen(3000, (err) => {
    if (err) {
        console.log("Error in starting the server");
        console.log(err);
        return;
    }
    console.log("Server started successfully..!")
})