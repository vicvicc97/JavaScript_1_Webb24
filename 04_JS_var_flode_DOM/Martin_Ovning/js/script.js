/* 
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
*/

/* F2 shortcut för att ändra till exempel alla variabler med samma namn  */
/* 
let body = document.querySelector("body");

body.style.backgroundColor = "green";

let p = document.createElement("p")
let h1 = document.createElement("h1")

p.innerText += "Hello World";
h1.innerText += "Header";

body.appendChild(h1)
body.appendChild(p) 
*/

console.log("---------------------------------");

let body = document.querySelector("body");

let nav = document.createElement("nav");


let table = document.createElement("table");
table.style.border = "2px solid black"
table.style.width = "50%";
table.style.height = "100px";
table.style.margin = "30vh auto 0 auto"
table.style.borderCollapse = "collapse";

let rowCount = 5;
let colCount = 5;

for (let row = 0; row < rowCount; row++) {
    let tableRow = document.createElement("tr");
    tableRow.style.border = "30px"
    tableRow.style.width = "90%";
    table.appendChild(tableRow);


    for (let col = 0; col < colCount; col++) {
        if (row === 0) {
            let tableHeader = document.createElement("th");
            tableHeader.innerText = "Header";
            tableRow.appendChild(tableHeader);
        } else {
            let tableData = document.createElement("td");
            tableData.setAttribute("id", `${row}${col}`);
            tableData.innerText = col;
            tableData.style.border = "1px solid black";
            tableData.style.padding = "5px";
            tableData.style.textAlign = "center";
            tableRow.appendChild(tableData);
        }
        
    }

}

body.appendChild(table);

for (let row = 0; row < rowCount; row++) {
    for (let col = 0; col < colCount; col++) {
        if (row !== 0) {
            document.getElementById(`${row}${col}`).innerText = row;
        }
    }
    
}

document.getElementById("34").innerText = "nr"

let headers = document.getElementsByTagName("th");
let headersData = ["name", "job", "bil", "cat", "dog"];

for (let index = 0; index < headers.length; index++) {
    headers[index].innerText = headersData[index];
    
}