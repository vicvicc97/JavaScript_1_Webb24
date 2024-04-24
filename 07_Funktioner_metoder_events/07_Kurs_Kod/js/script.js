//scope example

function outerFunc() {
  let num = 10;
  function innerFunc() {//this function is not avaliable in the outer scope
    console.log(num); // ​
  }
  return innerFunc;
}
//outerFunc(); 
let closureEx = outerFunc(); //outerFunc() return reference to innerFunc()
closureEx(); // this will log num

// onclick example example





