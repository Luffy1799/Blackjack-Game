//Player info

let player = {
    name: "Luffy",
    chips: 200
}


//variables

let sum = 0;
let cards = [];
let chips = 200;
let isRunning = false;
let hasBlackjack = false;



let playerEl = document.getElementById("playerel");
playerEl.textContent = player.name + ": $" + player.chips;

// Start game button 

function startGame() {
    if(isRunning == false) {
    cardone = randomCard();
    cardtwo = randomCard();
    cards = [cardone, cardtwo];
    sum = cardone + cardtwo;
    isRunning = true;
    renderGame();
    }

}
// New card button

function newCard() {
    if(isRunning == true && hasBlackjack == false) {
    let newCard = randomCard();
    sum += newCard;
    cards.push(newCard);
    renderGame()
    }
}
// random number function

function randomCard() {
    let rCard = Math.floor(Math.random() * 13) +1;
    if(rCard == 1) {
        return 11;
    }
    else if (rCard > 10) {
        return 10;
    }
    else {
        return rCard;
    }
}
// page update

function renderGame() {
    let tCards = document.getElementById("cards");
    tCards.textContent = "Cards: "
    for(i=0; i < cards.length; i++ ) {
        tCards.textContent += cards[i] + " ";
    }
    let finalSum = document.getElementById("sum");
    finalSum.textContent = "Sum: " + sum;
    let status = document.getElementById("status");

    if(sum < 21) {
    status.textContent = "Do you want to draw a new card ?"
    }
    else if (sum == 21) {
        status.textContent = "You got Backjack !!";
        hasBlackjack = true;
        isRunning = false;

    }
    else if (sum > 21) {
        status.textContent = "You are out of the game";
        isRunning = false;
    }

}