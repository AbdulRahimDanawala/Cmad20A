let students = []
function addNewStudents(name){
    students.push({name:name, present:false})
}

function getAllStudents(){
    return students
}
module.exports.addNewStudents = addNewStudents
module.exports.getAllStudents = getAllStudents