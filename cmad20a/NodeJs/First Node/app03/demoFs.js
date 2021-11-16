let fileSystem = require('fs')

fileSystem.readFile('./demoFs.txt', (err, data) => {
    console.log(err)
    console.log(data.toString())
})