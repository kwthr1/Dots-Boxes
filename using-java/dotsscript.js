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


function closeBox(theClasses,playerColor) {
    
    CompeletedBoxes = 0;

    theClasses.forEach(function(value){
        if(value.startsWith("box")){

            // build the name of the box
            let theBox = value.replace("box" , "theBox")
            if(document.querySelector("."+theBox) && !document.querySelector("."+theBox).classList.contains('redBox') && !document.querySelector("."+theBox).classList.contains('blueBox')){
                let fillBox = true;
                document.querySelectorAll('.'+value).forEach(function(lineB){
                    if(!lineB.classList.contains('redLine') && !lineB.classList.contains('blueLine')){
                        fillBox = false;
                    }
                })

                if(fillBox == true){
                    let clickSound = document.querySelector('.clickSound')
                    let boxSound = document.querySelector('.boxSound')
                    clickSound.pause();
                    document.querySelector("."+theBox).classList.add(playerColor+"Box")
                    boxSound.currentTime = 0;
                    boxSound.play();
                    CompeletedBoxes++
                }

            }

        }
    })
    return CompeletedBoxes
}

function selectLine(e){
    e.preventDefault();


    // Targeting the lines to click them
    var clickedLine = e.currentTarget

    // making the lines appear when clicked
    clickedLine.classList.add('clickedLine')

    // targeting the lines to color them
    theColoredClick = clickedLine.querySelector('.line')

    let clickSound = document.querySelector('.clickSound')
    clickSound.currentTime = 0.2;
    clickSound.play();

    // during player1 turn
    if(currentPlayer == document.querySelector(".player1")){

        // color the line red
        theColoredClick.classList.add('redLine')

        // checking if the player compeleted a box
        closeBox(theColoredClick.classList,"red");

        // adding to the score
        player1Score = document.querySelectorAll('.redBox').length
        document.querySelector('.scoreOfPlayer1').innerText = player1Score

        // checking for a possible winner
        displayWinner();

        if(CompeletedBoxes === 0){
            // if the player did not copelete a box change the player
            currentPlayer.classList.remove('playerTurnRed')
            currentPlayer = document.querySelector(".player2")
            currentPlayer.classList.add("playerTurnBlue")
        }else{
            // if the player compeleted a box return the current player and disable clicked line
            clickedLine.classList.add('disabled');
            return currentPlayer
        }

        // disabling the clicked lines
        clickedLine.classList.add('disabled');
        

    // during player 2 turn
    }else if(currentPlayer == document.querySelector(".player2")){

        // color the line blue
        theColoredClick.classList.add('blueLine')

        // checking if the player compeleted a box
        closeBox(theColoredClick.classList,"blue");

        // adding to the score
        player2Score = document.querySelectorAll('.blueBox').length
        document.querySelector('.scoreOfPlayer2').innerText = player2Score

        // checking for a possible winner
        displayWinner();

        if(CompeletedBoxes === 0){
            // if the player did not copelete a box change the player
            currentPlayer.classList.remove('playerTurnBlue')
            currentPlayer = document.querySelector(".player1")
            currentPlayer.classList.add('playerTurnRed')
        }else{
            // if the player compeleted a box return the current player and disable clicked line
            clickedLine.classList.add('disabled');
            return currentPlayer
        }

        // disabling the clicked lines
        clickedLine.classList.add('disabled');
    }

    

}

// The winner function 
function displayWinner(){
    let winningSound = document.querySelector('.winningSound')
    winningSound.currentTime = 0;
    if(player1Score+player2Score==36){
        if(player1Score>player2Score){
            document.querySelector('.winnerMessage').innerHTML = "<img class='trophy' src='Img/IMG_0481.PNG' alt='Trophy'>" + "Player 1 Wins!" + "<img class='trophy' src='Img/IMG_0481.PNG' alt='Trophy'>"
            winningSound.play();
        }else if(player1Score<player2Score){
            document.querySelector('.winnerMessage').innerHTML = "<img class='trophy' src='Img/IMG_0481.PNG' alt='Trophy'>" + "Player 2 Wins!" + "<img class='trophy' src='Img/IMG_0481.PNG' alt='Trophy'>"
            winningSound.play();
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

    // let clickSound = document.querySelector('.clickSound')

    // Adding an event listener to selecting the line function
    document.querySelectorAll(".lineClick").forEach(function(lineElement){
        lineElement.addEventListener('click',selectLine)
    });
    
    // document .querySelectorAll('.lineClick').forEach(function(lineElement) {
    //     lineElement.addEventListener('click', function() 
    //     {
    //         let clickSound = document.querySelector('.clickSound')
    //         clickSound.currentTime = 0;
    //         clickSound.play();
    //     })
    // })

}





// Attaching event listeners 

document.addEventListener('DOMContentLoaded', function() {
    drawLines();
});

// document.querySelector('#newGame').addEventListener('click',newGame);


const newGameButton = document.querySelector('#newGame');

newGameButton.addEventListener('click', function() {
  location.reload();
});

newGame();