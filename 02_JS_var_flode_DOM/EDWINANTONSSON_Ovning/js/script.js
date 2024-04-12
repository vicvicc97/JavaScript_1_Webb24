function changeColour() {
    onclick = document.getElementById('body1').style.backgroundColor = 'yellow';
}

let testNum = 16;
if (testNum < 10) {
    console.log("Smaller!");
}
    else if (testNum > 10) {
        console.log("Bigger!");
    }
const A = 10;
const B = 10;
console.log(A < B);
console.log(A > B);
console.log(A === B);
console.log(A != B);
console.log(A <= B);
console.log(A >= B);
console.log(A == B);



let num = 1;
counter.innerHTML = num;

function increase() {
    num = num * 2;
    counter.innerHTML = num;
    console.log(num)

    if (num >= 128) {
        console.log("Number Reset");
        document.getElementById('counter').style.color = 'blue';
        num = 1;
    }
    
}


let fName = "Edwin Antonsson";
let age = 21;
let isStudent = true;
let literal = `Mitt namn är ${fName}`;

console.log(fName, age, isStudent);
console.log(typeof fName + " " + typeof age + " " + typeof isStudent);

// alert("mitt namn är " + fName);
// alert(literal)
