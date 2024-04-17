console.log("5x5 Multiplication Table:");

for (let row = 1; row <= 5; row++) {
    let cell ="";
    for (let col = 1; col <= 5; col++) {
        cell += "|" + row * col + "|";
    }

    console.log(cell);
}


console.log("---------------------------------------------");

let sum = 0;


for (let i = 0; i <= 100; i++) {

    if (i % 2 !== 0) {

        sum += i;
    }
}

console.log("The sum of odd numbers from 0 to 100 is:", sum);