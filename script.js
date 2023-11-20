
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
  
    // Targetting Horixontal lines
    if (clickedImg.getAttribute('src') === 'Img/IMG_0451.PNG') {
      clickedImg.src = 'Img/IMG_0449.PNG';

      // Adding a class to the image to make it appear
      clickedImg.classList.add('theLinesClicked')

        // Looping to change player
        if(currentPlayer == document.querySelector(".player1")){
            currentPlayer.classList.remove("playerTurn")
            currentPlayer = document.querySelector(".player2")
            currentPlayer.classList.add("playerTurn")
        }else{
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
            currentPlayer.classList.remove("playerTurn")
            currentPlayer = document.querySelector(".player2")
            currentPlayer.classList.add("playerTurn")
        }else{
            currentPlayer.classList.remove("playerTurn")
            currentPlayer = document.querySelector(".player1")
            currentPlayer.classList.add("playerTurn")
            clickedImg.src = 'Img/IMG_0456.PNG';
            clickedImg.classList.add('theLinesClicked')
        }
    }

    // Trying for coloring the boxes
    // const theLinesHori = this.getElementsByClassName('lines-horizontal');
    // const theLinesVer = this.getElementsByClassName('lines-vertical');
    // console.log(theLinesHori)
    // // console.log(theLinesHori);
    // for(let i=0; i < theLinesVer.length ; i++){
    //     // console.log(theLines[i]);
    //     // for(let j=0 ; j < theLines[i].length ; j++){
    //     //     if()
    //     // }
    //     if((theLinesHori[i][1].getAttribute('src') === 'Img/IMG_0449.PNG' || theLinesHori[i][1].getAttribute('src') === 'Img/IMG_0450.PNG')){
    //         document.querySelector('.Box1').classList.add('redBox')
    //     }
    //     console.log(theLinesHori[i][1])
    // }

    // successful very long way to color the boxes
    // const line1Src = document.querySelector('.line1').getAttribute('src')
    // const line7Src = document.querySelector('.line7').getAttribute('src')
    // const line8Src = document.querySelector('.line8').getAttribute('src')
    // const line14Src = document.querySelector('.line14').getAttribute('src')
    // if(line1Src === 'Img/IMG_0449.PNG' || line1Src === 'Img/IMG_0450.PNG'){
    //     if(line7Src === 'Img/IMG_0454.PNG' || line7Src === 'Img/IMG_0456.PNG'){
    //         if(line8Src === 'Img/IMG_0454.PNG' || line8Src === 'Img/IMG_0456.PNG'){
    //             if(line14Src === 'Img/IMG_0449.PNG' || line14Src === 'Img/IMG_0450.PNG'){
    //                 document.querySelector('.Box1').classList.add('redBox')
    //             }
    //         }
    //     }
    // }
    
}




// Attching event listeners

document.querySelectorAll(".containingBox a").forEach(function(square){
    square.addEventListener('click',selectLine)
})

document.querySelector('#DBnewGame').addEventListener('click',newGame);

newGame();

