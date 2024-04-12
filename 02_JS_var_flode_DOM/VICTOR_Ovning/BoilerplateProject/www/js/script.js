//setup canvas
let canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
window.addEventListener("resize", uppdateCanvasSize);
//setup context
let context = canvas.getContext("2d");


function uppdateCanvasSize(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    startX = Math.floor(Math.random()*canvas.width);
    startY = Math.floor(Math.random()*canvas.height);
    drawRectangle(context, startX ,startY);
}


//draw on canvas
function draw(context, startX, startY, shape){

    drawStart(startX,startY);
    shape();
    drawEnd();

}
function drawStart(startX, startY){
    context.save();
    context.translate(startX,startY);
    context.beginPath();
    context.moveTo(0,0);
}
function drawEnd(){
    context.stroke();
    context.restore();
}
function rectangle(){
    let lineLength = 20;
    context.lineTo(0,lineLength);
    context.lineTo(lineLength,lineLength);
    context.lineTo(lineLength,0);
    context.closePath();
}

function reset(){

    let startX = Math.floor(Math.random()*canvas.width);
    let startY = Math.floor(Math.random()*canvas.height);
    draw(context, startX ,startY, rectangle);
}

