const line = 6
let currentPlayer = document.querySelector(".player1")

let player1Score = 0;
let player2Score = 0;


// Start a new functioin
function newGame(){
    // Set player to be player1

    currentPlayer = document.querySelector(".player1")
    currentPlayer.classList.add("playerTurnRed")
}

function selectLine(e){
    e.preventDefault();



    var clickedLine = e.currentTarget

    clickedLine.classList.add('clickedLine')
    
    if(currentPlayer == document.querySelector(".player1")){
        clickedLine.querySelector('.line').classList.add('redLine')
        currentPlayer.classList.remove('playerTurnRed')
        currentPlayer = document.querySelector(".player2")
        currentPlayer.classList.add("playerTurnBlue")
    }else if(currentPlayer == document.querySelector(".player2")){
        clickedLine.querySelector('.line').classList.add('blueLine') 
        currentPlayer.classList.remove('playerTurnBlue')
        currentPlayer = document.querySelector(".player1")
        currentPlayer.classList.add('playerTurnRed')
    }


}


function drawLines() {

    let board = ""

    for(i=0 ; i < line ;i++){
        board += "<div class='horizontalLine'><img class='theDot' src='img/IMG_0445.PNG' alt='A Dot'>"
        for(j=0 ; j < line ; j++){
            board += "<a href='#' class='lineClick lineOpacity'><div class='line lineH'></div></a>"
            board += "<img class='theDot' src='img/IMG_0445.PNG' alt='A Dot'>"
        }
        board += "</div>"
        board += "<div class='verticalLine'><a href='#' class='lineClick lineOpacity'><div class='line lineV'></div></a>"
        for(k=0 ; k < line ; k++){
            board += "<div class='box'></div>"
            board += "<a href='#' class='lineClick lineOpacity'><div class='line lineV'></div></a>"
        }
        board += "</div>"
    }

    board += "<div class='horizontalLine'><img class='theDot' src='img/IMG_0445.PNG' alt='A Dot'>"
    for(let l=0 ; l < line ; l++){
        board += "<a href='#' class='lineClick lineOpacity'><div class='line lineH'></div></a>"
        board += "<img class='theDot' src='img/IMG_0445.PNG' alt='A Dot'>"
    }
    board += "</div>"

    document.querySelector(".theBoard").innerHTML = board;

    document.querySelectorAll(".lineClick").forEach(function(lineElement){
        lineElement.addEventListener('click',selectLine)
    });
    

}





// Attaching event listeners 

document.addEventListener('DOMContentLoaded', function() {
    drawLines();
});

// document.querySelectorAll(".lineClick").forEach(function(lineElement){
//     lineElement.addEventListener('click',selectLine)
// });

newGame();
