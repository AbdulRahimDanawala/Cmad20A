let Default = 30


function add(num1,num2 = Default){
    return num1+num2
}

console.log(add(12,12))
console.log(add(12))
console.log(add(12, 13))
console.log(add(12, undefined))