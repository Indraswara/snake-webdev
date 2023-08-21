var blockSize = 25;
var rows = 20;
var cols = 20;
var board;
var context;


//snake head

var snakeX = blockSize * 5;
var snakeY = blockSize * 5;

//food 
var foodX;
var foodY;

window.onload = function() {
    board = document.getElementById("board");
    board.height = rows * blockSize; // Fix the typo here
    board.width = cols * blockSize;
    context = board.getContext("2d");

    requestAnimationFrame(update); // Call the update function using requestAnimationFrame
}

function update() {
    context.fillStyle = "black";
    context.fillRect(0, 0, board.width, board.height); // Fix the typo here

    context.fillStyle = "lime";
    context.fillRect(snakeX, snakeY, blockSize, blockSize);

    context.fillStyle = "red";
    context.fillRect(foodX, foodY, blockSize, blockSize);

    requestAnimationFrame(update); // Continue updating in a loop
}

function placeFood(){
    foodX = Math.floor(Math.random() * rows) * blockSize;
    foodY = Math.floor(Math.random() * cols) * blockSize;
}

