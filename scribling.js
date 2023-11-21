
let currentPlayer = document.querySelector(".player1")

let player1Score = 0;
let player2Score = 0;


// strating a new game
function newGame(){

    // Set the player to player1
    currentPlayer = document.querySelector(".player1")
    currentPlayer.classList.add("playerTurn")
}



// coloring box function for player1
function colorBoxRed(){
    // Declaring each line number
    const line1Src = document.querySelector('.line1').getAttribute('src')
    const line7Src = document.querySelector('.line7').getAttribute('src')
    const line8Src = document.querySelector('.line8').getAttribute('src')
    const line14Src = document.querySelector('.line14').getAttribute('src')
    // coloring box1
    if(line1Src === 'Img/IMG_0449.PNG' || line1Src === 'Img/IMG_0450.PNG'){
        if(line7Src === 'Img/IMG_0454.PNG' || line7Src === 'Img/IMG_0456.PNG'){
            if(line8Src === 'Img/IMG_0454.PNG' || line8Src === 'Img/IMG_0456.PNG'){
                if(line14Src === 'Img/IMG_0449.PNG' || line14Src === 'Img/IMG_0450.PNG'){
                    document.querySelector('.Box1').classList.remove('blueBox')
                    document.querySelector('.Box1').classList.add('redBox')
                }
            }
        }
    }

}

// coloring box function for 
function colorBoxBlue() {
    // Declaring each line number
    const line1Src = document.querySelector('.line1').getAttribute('src')
    const line7Src = document.querySelector('.line7').getAttribute('src')
    const line8Src = document.querySelector('.line8').getAttribute('src')
    const line14Src = document.querySelector('.line14').getAttribute('src')
    // coloring box1
    if(line1Src === 'Img/IMG_0449.PNG' || line1Src === 'Img/IMG_0450.PNG'){
        if(line7Src === 'Img/IMG_0454.PNG' || line7Src === 'Img/IMG_0456.PNG'){
            if(line8Src === 'Img/IMG_0454.PNG' || line8Src === 'Img/IMG_0456.PNG'){
                if(line14Src === 'Img/IMG_0449.PNG' || line14Src === 'Img/IMG_0450.PNG'){
                    document.querySelector('.Box1').classList.remove('redBox')    
                    document.querySelector('.Box1').classList.add('blueBox')
                }
            }
        }
    }
}







// Handle selected line



function selectLine(e) {
    e.preventDefault();

    // Targeting the line images and changing them when click
    var clickedImg = e.currentTarget.querySelector('.theLines');
  
    // Targetting Horixontal lines
    if (clickedImg.getAttribute('src') === 'Img/IMG_0451.PNG') {
      clickedImg.src = 'Img/IMG_0449.PNG';

      // Adding a class to the image to make it appear
      clickedImg.classList.add('theLinesClicked')

        // Looping to change player
        if(currentPlayer == document.querySelector(".player1")){
            colorBoxRed();
            currentPlayer.classList.remove("playerTurn")
            currentPlayer = document.querySelector(".player2")
            currentPlayer.classList.add("playerTurn")
        }else{
            colorBoxBlue();
            currentPlayer.classList.remove("playerTurn")
            currentPlayer = document.querySelector(".player1")
            currentPlayer.classList.add("playerTurn")
            clickedImg.src = 'Img/IMG_0450.PNG';
            clickedImg.classList.add('theLinesClicked')
        } 
    }
    
    // Targetting vertical lines
    if (clickedImg.getAttribute('src') === 'Img/IMG_0453.PNG') {
        clickedImg.src = 'Img/IMG_0454.PNG';
  
        // Adding a class to the image to make it appear
        clickedImg.classList.add('theLinesClicked')


        // Looping to change player
        if(currentPlayer == document.querySelector(".player1")){
            colorBoxRed();
            currentPlayer.classList.remove("playerTurn")
            currentPlayer = document.querySelector(".player2")
            currentPlayer.classList.add("playerTurn")
        }else{
            colorBoxBlue();
            currentPlayer.classList.remove("playerTurn")
            currentPlayer = document.querySelector(".player1")
            currentPlayer.classList.add("playerTurn")
            clickedImg.src = 'Img/IMG_0456.PNG';
            clickedImg.classList.add('theLinesClicked')
        }
    }

}





// Attching event listeners

document.querySelectorAll(".containingBox a").forEach(function(square){
    square.addEventListener('click',selectLine)
})

document.querySelector('#DBnewGame').addEventListener('click',newGame);

newGame();
