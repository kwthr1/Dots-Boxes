
let currentPlayer = document.querySelector(".player1")

let player1Score = 0;
let player2Score = 0;

let isBoxColored = false;


// strating a new game
function newGame(){

    // Set the player to player1
    currentPlayer = document.querySelector(".player1")
    currentPlayer.classList.add("playerTurnRed")
}



function selectLine(e) {
    e.preventDefault();

    // Targeting the line images and changing them when click
    var clickedImg = e.currentTarget.querySelector('.theLines');
  
    // Targetting Horizontal lines
    if (clickedImg.getAttribute('src') === 'Img/IMG_0451.PNG') {
      clickedImg.src = 'Img/IMG_0449.PNG';

      // Adding a class to the image to make it appear
      clickedImg.classList.add('theLinesClicked')

        // Looping to change player
        if(currentPlayer == document.querySelector(".player1")){
            colorBoxRed();
            currentPlayer.classList.remove("playerTurnRed")
            currentPlayer = document.querySelector(".player2")
            currentPlayer.classList.add("playerTurnBlue")
        }else{
            colorBoxBlue();
            currentPlayer.classList.remove("playerTurnBlue")
            currentPlayer = document.querySelector(".player1")
            currentPlayer.classList.add("playerTurnRed")
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
            currentPlayer.classList.remove("playerTurnRed")
            currentPlayer = document.querySelector(".player2")
            currentPlayer.classList.add("playerTurnBlue")
        }else{
            colorBoxBlue();
            currentPlayer.classList.remove("playerTurnBlue")
            currentPlayer = document.querySelector(".player1")
            currentPlayer.classList.add("playerTurnRed")
            clickedImg.src = 'Img/IMG_0456.PNG';
            clickedImg.classList.add('theLinesClicked')
        }
    }
    
}



// coloring box function for player1
function colorBoxRed(){

    // Declaring each line number
    const line1Src = document.querySelector('.line1').getAttribute('src')
    const line2Src = document.querySelector('.line2').getAttribute('src')
    const line3Src = document.querySelector('.line3').getAttribute('src')
    const line4Src = document.querySelector('.line4').getAttribute('src')
    const line5Src = document.querySelector('.line5').getAttribute('src')
    const line6Src = document.querySelector('.line6').getAttribute('src')
    const line7Src = document.querySelector('.line7').getAttribute('src')
    const line8Src = document.querySelector('.line8').getAttribute('src')
    const line9Src = document.querySelector('.line9').getAttribute('src')
    const line10Src = document.querySelector('.line10').getAttribute('src')
    const line11Src = document.querySelector('.line11').getAttribute('src')
    const line12Src = document.querySelector('.line12').getAttribute('src')
    const line13Src = document.querySelector('.line13').getAttribute('src')
    const line14Src = document.querySelector('.line14').getAttribute('src')
    const line15Src = document.querySelector('.line15').getAttribute('src')
    const line16Src = document.querySelector('.line16').getAttribute('src')
    const line17Src = document.querySelector('.line17').getAttribute('src')
    const line18Src = document.querySelector('.line18').getAttribute('src')
    const line20Src = document.querySelector('.line20').getAttribute('src')
    const line21Src = document.querySelector('.line22').getAttribute('src')
    const line22Src = document.querySelector('.line22').getAttribute('src')
    const line23Src = document.querySelector('.line23').getAttribute('src')
    const line24Src = document.querySelector('.line24').getAttribute('src')
    const line25Src = document.querySelector('.line25').getAttribute('src')
    const line26Src = document.querySelector('.line26').getAttribute('src')
    const line27Src = document.querySelector('.line27').getAttribute('src')
    const line28Src = document.querySelector('.line28').getAttribute('src')
    const line29Src = document.querySelector('.line29').getAttribute('src')
    const line30Src = document.querySelector('.line30').getAttribute('src')
    const line31Src = document.querySelector('.line31').getAttribute('src')
    const line32Src = document.querySelector('.line32').getAttribute('src')
    const line33Src = document.querySelector('.line33').getAttribute('src')
    const line34Src = document.querySelector('.line34').getAttribute('src')
    const line35Src = document.querySelector('.line35').getAttribute('src')
    const line36Src = document.querySelector('.line36').getAttribute('src')
    const line37Src = document.querySelector('.line37').getAttribute('src')
    const line38Src = document.querySelector('.line38').getAttribute('src')
    const line39Src = document.querySelector('.line39').getAttribute('src')
    const line40Src = document.querySelector('.line40').getAttribute('src')
    const line41Src = document.querySelector('.line41').getAttribute('src')
    const line42Src = document.querySelector('.line42').getAttribute('src')
    const line43Src = document.querySelector('.line43').getAttribute('src')
    const line44Src = document.querySelector('.line44').getAttribute('src')
    const line45Src = document.querySelector('.line45').getAttribute('src')
    const line46Src = document.querySelector('.line46').getAttribute('src')
    const line47Src = document.querySelector('.line47').getAttribute('src')
    const line48Src = document.querySelector('.line48').getAttribute('src')
    const line49Src = document.querySelector('.line49').getAttribute('src')
    const line50Src = document.querySelector('.line50').getAttribute('src')
    const line51Src = document.querySelector('.line51').getAttribute('src')
    const line52Src = document.querySelector('.line52').getAttribute('src')
    const line53Src = document.querySelector('.line53').getAttribute('src')
    const line54Src = document.querySelector('.line54').getAttribute('src')
    const line55Src = document.querySelector('.line55').getAttribute('src')
    const line56Src = document.querySelector('.line56').getAttribute('src')
    const line57Src = document.querySelector('.line57').getAttribute('src')
    const line58Src = document.querySelector('.line58').getAttribute('src')
    const line59Src = document.querySelector('.line59').getAttribute('src')
    const line60Src = document.querySelector('.line60').getAttribute('src')
    const line61Src = document.querySelector('.line61').getAttribute('src')
    const line62Src = document.querySelector('.line62').getAttribute('src')
    const line63Src = document.querySelector('.line63').getAttribute('src')
    const line64Src = document.querySelector('.line64').getAttribute('src')
    const line65Src = document.querySelector('.line65').getAttribute('src')
    const line66Src = document.querySelector('.line66').getAttribute('src')
    const line67Src = document.querySelector('.line67').getAttribute('src')
    const line68Src = document.querySelector('.line68').getAttribute('src')
    const line69Src = document.querySelector('.line69').getAttribute('src')
    const line70Src = document.querySelector('.line70').getAttribute('src')
    const line71Src = document.querySelector('.line71').getAttribute('src')
    const line72Src = document.querySelector('.line72').getAttribute('src')
    const line73Src = document.querySelector('.line73').getAttribute('src')
    const line74Src = document.querySelector('.line74').getAttribute('src')
    const line75Src = document.querySelector('.line75').getAttribute('src')
    const line76Src = document.querySelector('.line76').getAttribute('src')
    const line77Src = document.querySelector('.line77').getAttribute('src')
    const line78Src = document.querySelector('.line78').getAttribute('src')
    const line79Src = document.querySelector('.line79').getAttribute('src')
    const line80Src = document.querySelector('.line80').getAttribute('src')
    const line81Src = document.querySelector('.line81').getAttribute('src')
    const line82Src = document.querySelector('.line82').getAttribute('src')
    const line83Src = document.querySelector('.line83').getAttribute('src')
    const line84Src = document.querySelector('.line84').getAttribute('src')

    // coloring box1
    if(
        (line1Src === 'Img/IMG_0449.PNG' || line1Src === 'Img/IMG_0450.PNG') && 
        (line7Src === 'Img/IMG_0454.PNG' || line7Src === 'Img/IMG_0456.PNG') && 
        (line8Src === 'Img/IMG_0454.PNG' || line8Src === 'Img/IMG_0456.PNG') && 
        (line14Src === 'Img/IMG_0449.PNG' || line14Src === 'Img/IMG_0450.PNG')
    ){
        const box1 = document.querySelector('.Box1')
        // box1.classList.remove('blueBox')
        // box1.classList.add('redBox')
        if (!box1.classList.contains('redBox') && !box1.classList.contains('blueBox')) {
        box1.classList.add('redBox');
        player1Score++
        document.querySelector('.player1Score').innerText = player1Score
        }
        
    }

    // Coloring box2
    if(
        (line2Src === 'Img/IMG_0449.PNG' || line2Src === 'Img/IMG_0450.PNG') && 
        (line8Src === 'Img/IMG_0454.PNG' || line8Src === 'Img/IMG_0456.PNG') && 
        (line9Src === 'Img/IMG_0454.PNG' || line9Src === 'Img/IMG_0456.PNG') && 
        (line15Src === 'Img/IMG_0449.PNG' || line15Src === 'Img/IMG_0450.PNG')
    ){
        const box2 = document.querySelector('.Box2')
        if (!box2.classList.contains('redBox') && !box2.classList.contains('blueBox')) {
        box2.classList.add('redBox');
        player1Score++
        document.querySelector('.player1Score').innerText = player1Score
        }
        
    }

    // Coloring box3
    if(
        (line3Src === 'Img/IMG_0449.PNG' || line3Src === 'Img/IMG_0450.PNG') && 
        (line9Src === 'Img/IMG_0454.PNG' || line9Src === 'Img/IMG_0456.PNG') && 
        (line10Src === 'Img/IMG_0454.PNG' || line10Src === 'Img/IMG_0456.PNG') && 
        (line16Src === 'Img/IMG_0449.PNG' || line16Src === 'Img/IMG_0450.PNG')
    ){
        const box3 = document.querySelector('.Box3')
        if (!box3.classList.contains('redBox') && !box3.classList.contains('blueBox')) {
        box3.classList.add('redBox');
        player1Score++
        document.querySelector('.player1Score').innerText = player1Score
        }
        
    }

}

// coloring box function for 
function colorBoxBlue() {

  

    // Declaring each line number
    const line1Src = document.querySelector('.line1').getAttribute('src')
    const line2Src = document.querySelector('.line2').getAttribute('src')
    const line3Src = document.querySelector('.line3').getAttribute('src')
    const line4Src = document.querySelector('.line4').getAttribute('src')
    const line5Src = document.querySelector('.line5').getAttribute('src')
    const line6Src = document.querySelector('.line6').getAttribute('src')
    const line7Src = document.querySelector('.line7').getAttribute('src')
    const line8Src = document.querySelector('.line8').getAttribute('src')
    const line9Src = document.querySelector('.line9').getAttribute('src')
    const line10Src = document.querySelector('.line10').getAttribute('src')
    const line11Src = document.querySelector('.line11').getAttribute('src')
    const line12Src = document.querySelector('.line12').getAttribute('src')
    const line13Src = document.querySelector('.line13').getAttribute('src')
    const line14Src = document.querySelector('.line14').getAttribute('src')
    const line15Src = document.querySelector('.line15').getAttribute('src')
    const line16Src = document.querySelector('.line16').getAttribute('src')
    const line17Src = document.querySelector('.line17').getAttribute('src')
    const line18Src = document.querySelector('.line18').getAttribute('src')
    const line20Src = document.querySelector('.line20').getAttribute('src')
    const line21Src = document.querySelector('.line22').getAttribute('src')
    const line22Src = document.querySelector('.line22').getAttribute('src')
    const line23Src = document.querySelector('.line23').getAttribute('src')
    const line24Src = document.querySelector('.line24').getAttribute('src')
    const line25Src = document.querySelector('.line25').getAttribute('src')
    const line26Src = document.querySelector('.line26').getAttribute('src')
    const line27Src = document.querySelector('.line27').getAttribute('src')
    const line28Src = document.querySelector('.line28').getAttribute('src')
    const line29Src = document.querySelector('.line29').getAttribute('src')
    const line30Src = document.querySelector('.line30').getAttribute('src')
    const line31Src = document.querySelector('.line31').getAttribute('src')
    const line32Src = document.querySelector('.line32').getAttribute('src')
    const line33Src = document.querySelector('.line33').getAttribute('src')
    const line34Src = document.querySelector('.line34').getAttribute('src')
    const line35Src = document.querySelector('.line35').getAttribute('src')
    const line36Src = document.querySelector('.line36').getAttribute('src')
    const line37Src = document.querySelector('.line37').getAttribute('src')
    const line38Src = document.querySelector('.line38').getAttribute('src')
    const line39Src = document.querySelector('.line39').getAttribute('src')
    const line40Src = document.querySelector('.line40').getAttribute('src')
    const line41Src = document.querySelector('.line41').getAttribute('src')
    const line42Src = document.querySelector('.line42').getAttribute('src')
    const line43Src = document.querySelector('.line43').getAttribute('src')
    const line44Src = document.querySelector('.line44').getAttribute('src')
    const line45Src = document.querySelector('.line45').getAttribute('src')
    const line46Src = document.querySelector('.line46').getAttribute('src')
    const line47Src = document.querySelector('.line47').getAttribute('src')
    const line48Src = document.querySelector('.line48').getAttribute('src')
    const line49Src = document.querySelector('.line49').getAttribute('src')
    const line50Src = document.querySelector('.line50').getAttribute('src')
    const line51Src = document.querySelector('.line51').getAttribute('src')
    const line52Src = document.querySelector('.line52').getAttribute('src')
    const line53Src = document.querySelector('.line53').getAttribute('src')
    const line54Src = document.querySelector('.line54').getAttribute('src')
    const line55Src = document.querySelector('.line55').getAttribute('src')
    const line56Src = document.querySelector('.line56').getAttribute('src')
    const line57Src = document.querySelector('.line57').getAttribute('src')
    const line58Src = document.querySelector('.line58').getAttribute('src')
    const line59Src = document.querySelector('.line59').getAttribute('src')
    const line60Src = document.querySelector('.line60').getAttribute('src')
    const line61Src = document.querySelector('.line61').getAttribute('src')
    const line62Src = document.querySelector('.line62').getAttribute('src')
    const line63Src = document.querySelector('.line63').getAttribute('src')
    const line64Src = document.querySelector('.line64').getAttribute('src')
    const line65Src = document.querySelector('.line65').getAttribute('src')
    const line66Src = document.querySelector('.line66').getAttribute('src')
    const line67Src = document.querySelector('.line67').getAttribute('src')
    const line68Src = document.querySelector('.line68').getAttribute('src')
    const line69Src = document.querySelector('.line69').getAttribute('src')
    const line70Src = document.querySelector('.line70').getAttribute('src')
    const line71Src = document.querySelector('.line71').getAttribute('src')
    const line72Src = document.querySelector('.line72').getAttribute('src')
    const line73Src = document.querySelector('.line73').getAttribute('src')
    const line74Src = document.querySelector('.line74').getAttribute('src')
    const line75Src = document.querySelector('.line75').getAttribute('src')
    const line76Src = document.querySelector('.line76').getAttribute('src')
    const line77Src = document.querySelector('.line77').getAttribute('src')
    const line78Src = document.querySelector('.line78').getAttribute('src')
    const line79Src = document.querySelector('.line79').getAttribute('src')
    const line80Src = document.querySelector('.line80').getAttribute('src')
    const line81Src = document.querySelector('.line81').getAttribute('src')
    const line82Src = document.querySelector('.line82').getAttribute('src')
    const line83Src = document.querySelector('.line83').getAttribute('src')
    const line84Src = document.querySelector('.line84').getAttribute('src')
    // coloring box1
    if(
        (line1Src === 'Img/IMG_0449.PNG' || line1Src === 'Img/IMG_0450.PNG') && 
        (line7Src === 'Img/IMG_0454.PNG' || line7Src === 'Img/IMG_0456.PNG') && 
        (line8Src === 'Img/IMG_0454.PNG' || line8Src === 'Img/IMG_0456.PNG') &&
        (line14Src === 'Img/IMG_0449.PNG' || line14Src === 'Img/IMG_0450.PNG')
    ){
        const box1 = document.querySelector('.Box1')
        // box1.classList.remove('redBox')
        // box1.classList.add('blueBox')
        if (!box1.classList.contains('blueBox') && !box1.classList.contains('redBox') ) {
        box1.classList.add('blueBox');
        
        player2Score++
        document.querySelector('.player2Score').innerText = player2Score
        }
        
    }

    // Coloring box2
    if(
        (line2Src === 'Img/IMG_0449.PNG' || line2Src === 'Img/IMG_0450.PNG') && 
        (line8Src === 'Img/IMG_0454.PNG' || line8Src === 'Img/IMG_0456.PNG') && 
        (line9Src === 'Img/IMG_0454.PNG' || line9Src === 'Img/IMG_0456.PNG') &&
        (line15Src === 'Img/IMG_0449.PNG' || line15Src === 'Img/IMG_0450.PNG')
    ){
        const box2 = document.querySelector('.Box2')
        if (!box2.classList.contains('blueBox') && !box2.classList.contains('redBox') ) {
        box2.classList.add('blueBox');
        player2Score++
        document.querySelector('.player2Score').innerText = player2Score
        }
        
    }

    // Coloring box3
    if(
        (line3Src === 'Img/IMG_0449.PNG' || line3Src === 'Img/IMG_0450.PNG') && 
        (line9Src === 'Img/IMG_0454.PNG' || line9Src === 'Img/IMG_0456.PNG') && 
        (line10Src === 'Img/IMG_0454.PNG' || line10Src === 'Img/IMG_0456.PNG') && 
        (line16Src === 'Img/IMG_0449.PNG' || line16Src === 'Img/IMG_0450.PNG')
    ){
        const box3 = document.querySelector('.Box3')
        if (!box3.classList.contains('blueBox') && !box3.classList.contains('redBox') ) {
        box3.classList.add('blueBox');
        player2Score++
        document.querySelector('.player2Score').innerText = player2Score
        }
        
    }

}





// Attching event listeners

document.querySelectorAll(".containingBox a").forEach(function(square){
    square.addEventListener('click',selectLine)
})

document.querySelector('#DBnewGame').addEventListener('click',newGame);

newGame();

