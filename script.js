
let currentPlayer = document.querySelector(".player1")



// strating a new game
function newGame(){

    // Set the player to player1
    currentPlayer = document.querySelector(".player1")
    currentPlayer.classList.add("playerTurn")
}


// Handle selected line

// function selectLine(e){
//     e.preventDefault();


//    var lineImgs = document.querySelectorAll('.theLines');

//     lineImgs.forEach(function(lineImg) {
//     if (lineImg.src.includes('Img/IMG_0451.PNG')) {

//         var clickedImg = lineImg;
        
//         clickedImg.src = 'Img/IMG_0449.PNG';
//     }
//     });
// }

function selectLine(e) {
    e.preventDefault();

    // Targeting the line images and changing them when click
    var clickedImg = e.currentTarget.querySelector('.theLines');
  
    if (clickedImg.getAttribute('src') === 'Img/IMG_0451.PNG') {
      clickedImg.src = 'Img/IMG_0449.PNG';

      // Adding a class to the image to make it appear
      clickedImg.classList.add('theLinesClicked')
    }
    
    if (clickedImg.getAttribute('src') === 'Img/IMG_0453.PNG') {
        clickedImg.src = 'Img/IMG_0454.PNG';
  
        // Adding a class to the image to make it appear
        clickedImg.classList.add('theLinesClicked')
      }
    
}




// Attching event listeners

document.querySelectorAll(".containingBox a").forEach(function(square){
    square.addEventListener('click',selectLine)
})

document.querySelector('#DBnewGame').addEventListener('click',newGame);

newGame();

