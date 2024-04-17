for (let row = 0; row < 10; row++) {
    let cell ="";
    for (let col = 0; col < 5; col++) {
        cell += "|" + row + " " + col + "|";
    }
    console.log(cell);
}