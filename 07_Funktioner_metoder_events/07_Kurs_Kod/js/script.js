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
let counter = 0; //represents dish count

function addDish(){
    counter = counter + 1; //the same as counter++
    console.log("Dish added");
}
    //en funktion för att räkna antalet tillagda maträtter (log(counter)) 
function dishCount(){
  console.log(counter);
}
  //en funktion för att visa alla tillagda maträtter (for(´${i}  maträtt´)).
function showDishes(){
  for (let i = 0; i < counter; i++) {
    console.log(`${i}  maträtt`);
  }
}

function removeDish(){
  counter = counter - 1; //the same as counter--
  console.log("Dish removed");
}

function resetDishes(){
  counter = 0;
  console.log("Dishes reset")
}

//excuting functions
addDish();
addDish();
addDish();
addDish();
dishCount();
addDish();
resetDishes();
addDish();
addDish();
dishCount();
showDishes();


// onclick example example





