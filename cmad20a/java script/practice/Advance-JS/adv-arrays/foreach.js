let students1 = [
    { name:"rahim", subject:["maths","physics"], class:"x"},
    { name:"rehman", subject:["maths","physics"], class:"x"}
]
let students2 = [
    { name:"saad", subject:["maths","physics"], class:"Ix"},
    { name:"farhan", subject:["maths","physics"], class:"Ix"},

]
let allstudents = students1.concat(students2)
// console.log(allstudents)
allstudents.forEach(function(s){
    // console.log("==> s is " , s)
})


let numbers = [10, 20, 30, 40, 50]
numbers.forEach(function(num,index){
    // console.log(index+":"+num)
    console.log((num > 10))
   
})