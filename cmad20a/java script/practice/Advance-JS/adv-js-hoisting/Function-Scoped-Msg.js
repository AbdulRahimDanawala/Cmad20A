
// Function-Scoped-Msg

function myMsg(){
  msg = "I am student in Cmad 20 A"
  console.log(typeof(msg))
  return (msg)
}
myMsg()
console.log(myMsg())
function hoist() {
    console.log(message);
    var message='Hoisting is all the rage!'
  }
  
  hoist();