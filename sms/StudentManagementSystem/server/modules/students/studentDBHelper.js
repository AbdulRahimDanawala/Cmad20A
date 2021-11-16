const mongoose = require('mongoose');
const StudentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    gender: String,
    class: String,
    subjects: [String]
})

const StudentsModel = new mongoose.model('students', StudentSchema);

module.exports.saveNewStudentInDB = (studentData) => {

    let model = new StudentsModel(studentData)

    return new Promise((resolve, reject) => {
        model.save((err, doc) => {
            if (err) {
                console.log("Unable to save new Student ", err)
                return reject(err);
            }
            return resolve(doc);
        })
    })
}

module.exports.getMatchingStudentsFromDB = (query) => {

    return new Promise((resolve, reject) => {

        StudentsModel.find(query, (err, docs) => {
            if (err) {
                console.log("Unable to findStudent ", err)
                return reject(err);
            }
            return resolve(docs);
        })
    })
}

module.exports.getMathingStudent=(query)=>{
    return new Promise((resolve, reject) => {

        StudentsModel.findOne(query, (err, doc) => {
            if (err) {
                console.log("Unable to find Student ", err)
                return reject(err);
            }
            return resolve(doc);
        })
    })
}

module.exports.deleteStudentById = (id) => {
    return new Promise((resolve, reject) => {

        StudentsModel.deleteOne({ _id: id }, ((err, success) => {
            if (err) {
                console.log("Unable to delete Student ", err)
                return reject(err);
            }
            return resolve(success);
        }))

    })
}
