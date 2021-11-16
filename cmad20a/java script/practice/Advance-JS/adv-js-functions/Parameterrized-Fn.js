function param(name, age) {
    var name = "my name is " + name;
    var age = "my age is " + age;
    return name + age
}
var param = param("Rahim ", 22);
console.log(param)
// Second Example

function name(...param) {


    var userName = param[0]
    var userAge = param[1]
    var userStudent = param[2]
    console.log("Username is "+userName+" Userage is " + userAge + " userStudent is " + userStudent)



}
name("rahim" , 22 , "cmad20A")

