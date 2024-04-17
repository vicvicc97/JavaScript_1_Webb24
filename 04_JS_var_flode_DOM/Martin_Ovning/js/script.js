console.log("---------------------------------");

for (let row = 1; row <= 5; row++) {
    let cell ="";
    for (let col = 1; col <= 5; col++) {
        cell += "|" + row * col + "|";
    }
    console.log(cell);
}

console.log("---------------------------------");

let sum = 0;

for (let i = 0; i <= 100; i++) {
    if (i%2 !== 0) {
        sum += i;
    }
}

console.log(sum);

console.log("---------------------------------");

/* F2 shortcut för att ändra till exempel alla variabler med samma namn  */

