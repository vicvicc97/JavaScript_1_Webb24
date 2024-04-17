

  for (let row = 1; row < 6; row++ ) { 
    let cell=""
    for (let col = 1; col < 6; col++ ) {
        cell += "|" + row * col + "|";
    }
    console.log(cell);
 
}  