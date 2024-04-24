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

//funktioner ovning
    //Skapa tre funktioner för att hantera maträtter. Istället för att använda listor eller arrayer kommer vi att använda funktioner för att spara och manipulera data

    //en funktion för att lägga till en maträtt (counter++)
let counter = 0; //represent dish count

function addDish(){
    counter++;
}
    //en funktion för att räkna antalet tillagda maträtter (log(counter)) 
fun

addDish();
addDish();
addDish();
addDish();


// onclick example example





