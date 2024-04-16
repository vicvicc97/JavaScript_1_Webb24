/*
 Basic for loop declaration include (variable declaration; loop run condition; increment)  
 */

// +1 increment
console.log(`
        for (let index = 0; index < 10; index++) { //<- index ++ is the same as i = i + 1;
            console.log("index = " + index);
        }
        `);
console.log("Starting loop from 0 to 9 with +1 increment");

for (let index = 0; index < 10; index++) { //<- index ++ is the same as i = i + 1;
    console.log("index = " + index);
}
console.log("Stoping loop index = 10");



console.log("----------------------------------------------------------------------------------------");



// -1 increment
console.log(`
        for (let index = 10; index > 0; index--) { //<- index -- is the same as i = i - 1;
            console.log("index = " + index);
        }
        `);
console.log("Starting loop from 10 to 1 with -1 increment");

for (let index = 10; index > 0; index--) { //<- index -- is the same as i = i - 1;
    console.log("index = " + index);
}
console.log("Stoping loop index = 0");



console.log("----------------------------------------------------------------------------------------");



// nested loops
console.log(`
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                console.log("i = " + i + " : j = " + j);
            }
        }
    `);

for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        console.log("i = " + i + " : j = " + j);
    }
}




console.log("----------------------------------------------------------------------------------------");



// complex loop
console.log(`
        for (let i = 0; i < 10; i++) {
            let printString = "";
            for (let j = i; j >= 0; j--) {
                printString = printString + "*";
            }
            console.log(printString);
        }
    `);

for (let i = 0; i < 10; i++) {
    let printString = "";
    for (let j = i; j >= 0; j--) {
        printString = printString + "*";
    }
    console.log(printString);
}

//DOM-----------------------------------------------------------

let h1 = document.getElementById("h1");


for (let index = 0; index < 10; index++) {
    let p = document.createElement("p");
    p.textContent = index;
    h1.appendChild(p);
}
