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



