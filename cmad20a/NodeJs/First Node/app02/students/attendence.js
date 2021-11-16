let enroll = require('./enroll')

function markAsPresent(name){
    let mathingStudents =  enroll.getAllStudents().find((stu)=> stu.name === name)
     mathingStudents.present = true;
 }
 function markAsAbsent(name){
    let mathingStudents =  enroll.getAllStudents().find((stu)=> stu.name === name)
     mathingStudents.present = false;
 }

 module.exports.markAsPresent = markAsPresent
 module.exports.markAsAbsent = markAsAbsent