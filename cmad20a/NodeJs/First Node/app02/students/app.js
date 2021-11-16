let enrollStudents = require('./enroll')
let attendenceStudents = require('./attendence')

enrollStudents.addNewStudents('rahim')
console.log(enrollStudents.getAllStudents())
attendenceStudents.markAsPresent('rahim')
console.log(enrollStudents.getAllStudents())
