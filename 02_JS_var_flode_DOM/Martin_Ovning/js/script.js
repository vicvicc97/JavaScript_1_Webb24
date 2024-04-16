const firstAndLastName = `Martin Vrshkoski`;
let age = 21;
let student = true;

/* console.log(`My name is ${firstAndLastName}. I am ${age} years old.`) */

let time = 12;

if (time > 15) {
    console.log("It is not morning");
} else  if(time > 17) {
    console.log("It is night");
} else if (time === 12) {
    console.log("It's lunch time");
} else {
    console.log("It is something else");
}

let hour = 8;

if (hour > 5 || hour < 10) {
    console.log("Hour is between 5 and 10");
} 

if ( !(hour < 5)) {
    console.log("It is crazy");
}


i = 10;

if (i > 10) {
    console.log("Bigger");
} else if (i < 10) {
    console.log("Smaller")
} else {
    console.log("Give up!!!");
}

