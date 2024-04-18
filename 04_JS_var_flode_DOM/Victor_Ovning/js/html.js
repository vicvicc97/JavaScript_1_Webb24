

//get body ref from HTML
let documentBody = document.getElementById("body");

//create table element
let table = document.createElement("table");
table.style.border = "1px solid black";
table.style.width = "25px";

let rowCount = 10;
let colCount = 5;
for (let row = 0; row < rowCount; row++) {
    let tableRow = document.createElement("tr");
    tableRow.style.border = "1px solid black";
    tableRow.style.width = "5px";
    table.appendChild(tableRow);

    for (let col = 0; col < colCount; col++) {
        if (row === 0){
            let tableHeader = document.createElement("th");
            tableHeader.setAttribute("id", `${row}${col}`)
            tableHeader.innerText = "HEADER";
            tableRow.appendChild(tableHeader);
        }
        else {
            let tableData = document.createElement("td");
            tableData.setAttribute("id", `${row}${col}`)
            tableData.innerText = col;
            tableRow.appendChild(tableData);
        }
    }

    for (let row = 0; row < rowCount; row++) {
        for (let col = 0; col < colCount; col++);
    }
}

//append table to HTML body
documentBody.appendChild(table);

document.getElementById("34").innerText = "TEXT";

document.getElementById("14").innerText = "beep";


//article element
let article = document.createElement("article");
article.style.border = "1px solid black";
article.style.width = "25px";




