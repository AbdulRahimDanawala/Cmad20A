console.log("before hello")
setTimeout(()=>{
    console.log("inside hello")
},1000)
console.log("after hello")
setTimeout(()=>{
    console.log("inside set time out")
    setTimeout(()=>{
        console.log("nested set time out")
    },1000)
    console.log("after set time out")
    
},3000)