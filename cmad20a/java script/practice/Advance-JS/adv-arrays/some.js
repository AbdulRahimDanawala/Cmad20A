let students1 = [
    { name:"rahim", subject:["maths","physics"], class:"x", nationality:"pakistani"},
    { name:"rehman", subject:["maths","physics","chemistry"], class:"x", nationality:"pakistani"}
]
let students2 = [
    { name:"saad", subject:["maths","physics"], class:"Ix", nationality:"indonesian"},
    { name:"farhan", subject:["maths","physics","chemistry"], class:"Ix", nationality:"pakistani"},

]
let allstudents = students1.concat(students2)
// console.log(allstudents)
// allstudents.some((s)=>{
//     console.log(s.subject.length >= 2)
//     console.log(s.nationality === "pakistani")

// })
let check = allstudents.some( s => s.subject.length >= 2)
console.log(check)