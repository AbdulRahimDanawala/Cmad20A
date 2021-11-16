function func1(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            let error = false;
            if(error){
                console.log("This is resolved Promise")
                resolve()
            }else{ 
                console.log("This is reject promise")
                reject()
        }

        }, 2000);
    })
}
func1().then(()=>{
    console.log("After promise resolved ")
}).catch(()=>{
    console.log("After promise reject")
})