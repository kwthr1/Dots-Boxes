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

function colorBoxRed(){
    colorBoxLine = document.querySelectorAll('.line')
        for(let i=1; i<line+1;i++){
            for(let j=0; j<line; j++){
                if((colorBoxLine[j].classList.contains('redLine')|| colorBoxLine[j].classList.contains('blueLine')) &&
                    (colorBoxLine[j].classList.contains(`box${i}${j}`)) &&
                    (!document.querySelector(`.theBox${i}${j}`).classList.contains('blueBox'))){
                        document.querySelector(`.theBox${i}${j}`).classList.add('redBox')
                    }
            }
        }

        // if(document.querySelectorAll(`box${i}${j}`).classList.contains('blueLine')||document.querSelectorAll(`box${i}${j}`).classList.contains('redLine')){
            // document.querySelector(`.theBox${i}${j}`).classList.add('redBox')
        // }
}

function colorBoxBlue() {
    colorBoxLine = document.querySelectorAll('.line')
        for(let i=1; i<line+1;i++){
            for(let j=0; j<line; j++){
                if((colorBoxLine[j].classList.contains('redLine')|| colorBoxLine[j].classList.contains('blueLine')) &&
                    (colorBoxLine[j].classList.contains(`box${i}${j}`)) &&
                    (!document.querySelector(`.theBox${i}${j}`).classList.contains('redBox'))){
                        document.querySelector(`.theBox${i}${j}`).classList.add('blueBox')
                    }
            }
        }
}

function closeBox(theClasses,playerColor) {
    theClasses.forEach(function(value){
        // console.log(value)
        if(value.startsWith("box")){

            // build the name of the box
            let theBox = value.replace("box" , "theBox")
            // console.log(theBox)
            // console.log(document.querySelector("."+theBox))
            if(document.querySelector("."+theBox) && !document.querySelector("."+theBox).classList.contains('redBox') && !document.querySelector("."+theBox).classList.contains('blueBox')){
                let fillBox = true;
                document.querySelectorAll('.'+value).forEach(function(lineB){
                    if(!lineB.classList.contains('redLine') && !lineB.classList.contains('blueLine')){
                        fillBox = false;
                    }
                })

                if(fillBox == true){
                    document.querySelector("."+theBox).classList.add(playerColor+"Box")
                }

            }

        }
    })
}

function selectLine(e){
    e.preventDefault();


    // Targeting the lines to click them
    var clickedLine = e.currentTarget

    let clickToColor = 0

    clickedLine.classList.add('clickedLine')
    theColoredClick = clickedLine.querySelector('.line')
    // Coloring the line red during player1 trun
    if(currentPlayer == document.querySelector(".player1")){
        theColoredClick.classList.add('redLine')
        // colorBoxRed();
        closeBox(theColoredClick.classList,"red");
        
        
        // disabling the clicked lines
        clickedLine.classList.add('disabled');
        clickedLine.removeEventListener('click', selectLine);
        // Changing the player from player1 to player2
        currentPlayer.classList.remove('playerTurnRed')
        currentPlayer = document.querySelector(".player2")
        currentPlayer.classList.add("playerTurnBlue")
    
    // Coloring the line blue during player2 turn
    }else if(currentPlayer == document.querySelector(".player2")){
        theColoredClick.classList.add('blueLine')
        // colorBoxBlue();
        closeBox(theColoredClick.classList,"blue");
        // disabling the clicked lines
        clickedLine.classList.add('disabled');
        clickedLine.removeEventListener('click', selectLine);
        // Changing the player back to player1
        currentPlayer.classList.remove('playerTurnBlue')
        currentPlayer = document.querySelector(".player1")
        currentPlayer.classList.add('playerTurnRed')
    }

    player1Score = document.querySelectorAll('.redBox').length
    document.querySelector('.scoreOfPlayer1').innerText = player1Score
    player2Score = document.querySelectorAll('.blueBox').length
    document.querySelector('.scoreOfPlayer2').innerText = player2Score

    // console.log(player1Score+player2Score)

    if(player1Score+player2Score==36){
        console.log(player1Score+player2Score)
    }

    if(player1Score+player2Score==36){
        if(player1Score>player2Score){
            document.querySelector('.winnerMessage').innerHTML = "Player 1 Wins!"
        }else if(player1Score<player2Score){
            document.querySelector('.winnerMessage').innerHTML = "Player 2 Wins!"
        }else{
            document.querySelector('.winnerMessage').innerHTML = "It's a Tie!"
        }
    }
    


}

// a function to draw our board of dots, lines, and boxes
function drawLines() {

    let board = ""

    for(i=0 ; i < line ;i++){
        board += "<div class='horizontalLine'><img class='theDot' src='img/IMG_0445.PNG' alt='A Dot'>"
        for(j=0 ; j < line ; j++){
            board += "<a href='#' class='lineClick lineOpacity'><div class='line lineH box"+ i +"" + j +" box"+ [i+1] + "" + j +"'></div></a>"
            board += "<img class='theDot' src='img/IMG_0445.PNG' alt='A Dot'>"
        }
        board += "</div>"
        board += "<div class='verticalLine'><a href='#' class='lineClick lineOpacity'><div class='line lineV box"+[i+1]+""+0+"'></div></a>"
        for(j=0 ; j < line ; j++){
            board += "<div class='box theBox"+[i+1]+""+j+"'></div>"
            board += "<a href='#' class='lineClick lineOpacity'><div class='line lineV box"+[i+1]+""+j+" box"+ [i+1] + "" + [j+1] +"'></div></a>"
        }
        board += "</div>"
    }

    board += "<div class='horizontalLine'><img class='theDot' src='img/IMG_0445.PNG' alt='A Dot'>"
    for(let i=0 ; i < line ; i++){
        board += "<a href='#' class='lineClick lineOpacity'><div class='line lineH box"+6+""+i+"'></div></a>"
        board += "<img class='theDot' src='img/IMG_0445.PNG' alt='A Dot'>"
    }
    board += "</div>"

    document.querySelector(".theBoard").innerHTML = board;

    // Adding an event listener to selecting the line function
    document.querySelectorAll(".lineClick").forEach(function(lineElement){
        lineElement.addEventListener('click',selectLine)
    });
    

}





// Attaching event listeners 

document.addEventListener('DOMContentLoaded', function() {
    drawLines();
});

newGame();
