function hoist() {
    a = 20;
    //var b = 100;// ReferenceError: a is not defined
  }
  
  hoist()
  
  console.log(a);
//   console.log(b);