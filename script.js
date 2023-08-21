var blockSize = 25;
var rows = 20;
var cols = 20;
var board;
var context;


//snake head

var snakeX = blockSize * 5;
var snakeY = blockSize * 5;

var velocityX = 0; 
var velocityY = 0;

var snakeBody = [];
//food 
var foodX;
var foodY;

window.onload = function() {
    board = document.getElementById("board");
    board.height = rows * blockSize; // Fix the typo here
    board.width = cols * blockSize;
    context = board.getContext("2d");

    placeFood();
    document.addEventListener("keydown", changeDirection);
    setInterval(update, 1000/10)
}

function update() {
    context.fillStyle = "black";
    context.fillRect(0, 0, board.width, board.height); // Fix the typo here

    context.fillStyle = "red";
    context.fillRect(foodX, foodY, blockSize, blockSize);
    
    if(snakeX == foodX && snakeY == foodY){
        snakeBody.push([foodX, foodY]);
        placeFood();
    }
    context.fillStyle = "lime";
    snakeX += velocityX * blockSize;
    snakeY += velocityY * blockSize;
    context.fillRect(snakeX, snakeY, blockSize, blockSize);
    for(let i = 0; i<snakeBody.length; i++){
    context.fillRect(snakeBody[i][0], snakeBody[i][1], blockSize, blockSize);
    }
}

function placeFood(){
    foodX = Math.floor(Math.random() * rows) * blockSize;
    foodY = Math.floor(Math.random() * cols) * blockSize;
}

function changeDirection(e){
    if(e.code == "ArrowUp" && velocityY != 1){
        velocityX = 0;
        velocityY = -1; 
    }
    if(e.code == "ArrowDown" && velocityY != -1){
        velocityX = 0;
        velocityY = 1; 
    }
    if(e.code == "ArrowLeft" && velocityX != 1){
        velocityX = -1;
        velocityY = 0; 
    }
    if(e.code == "ArrowRight" && velocityX != -1){
        velocityX = 1;
        velocityY = 0; 
    }
}

