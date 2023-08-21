
var blockSize = 25;
var rows = 20;
var cols = 20;
var board; 
var context; 


window.onload = function(){
    board = document.getElementById("board");
    board.heigth = rows  * blockSize;
    board.width = cols * blockSize;
    context = board.getContext("2d");

    update()
}

function update(){
    context.fillstyle = "red";
    context.fillRect(0, 0, board.width, board.heigth);
    
}