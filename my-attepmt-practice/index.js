// Declared the variables outside the function to make it a global variable so it can continue adding the score after every click
let playerOneScore = 0;
let playerTwoScore = 0;
// come back and check on the end game function so we can work on it a bit more
let gameIsOver =  false;


function fullDisplay() {
const firstDiceRandomNum = Math.floor(Math.random() * 6) + 1;
const secondDiceRandomNum = Math.floor(Math.random() * 6) + 1;

const firstDiceImage = 'assets/dice' + firstDiceRandomNum + '.png';
const secondDiceImage = 'assets/dice' + secondDiceRandomNum + '.png';


document.querySelectorAll('img')[0].setAttribute('src', firstDiceImage);
document.querySelectorAll('img')[1].setAttribute('src', secondDiceImage);

// function diceLogic() {
    if (firstDiceRandomNum > secondDiceRandomNum) {
        document.querySelector('h1').innerHTML = "Player 1 Wins";
        playerOneScore += 5
        playerTwoScore -= 3
        document.querySelector('.p1score').innerHTML = playerOneScore;
        document.querySelector('.p2score').innerHTML = playerTwoScore;
    } else if (secondDiceRandomNum > firstDiceRandomNum) {
        document.querySelector('h1').innerHTML = "Player 2 Wins";
        playerTwoScore += 5
        playerOneScore -= 3
        document.querySelector('.p2score').innerHTML = playerTwoScore
        document.querySelector('.p1score').innerHTML = playerOneScore;
    } else {
        document.querySelector('h1').innerHTML = "Draw"
    }
//   }
}

/* Gameover Function */
function gameOver(winner) {
    gameIsOver = true;

    if(playerOneScore >= 100 || playerTwoScore >= 100) {
        console.log(`${winner} wins The Game`);
    }
}

console.log(gameOver(fullDisplay()));
/* End of Gameover Function */

/* Button */
const button = document.getElementById('btn-id');

button.addEventListener('click', function() {
   fullDisplay();

     // Check for a game over condition
    //  if (playerOneScore >= 100 || playerTwoScore >= 100) {
    //     gameOver(playerOneScore >= 100 || playerTwoScore >= 100);
    // }

    // if (playerOneScore >= 100 || playerTwoScore >= 100) {
    //     const winner = playerOneScore >= 100 || playerTwoScore >= 100;
    //     gameOver(winner);
    // }
})


// try adding the dice together and see if we can add a score feature


