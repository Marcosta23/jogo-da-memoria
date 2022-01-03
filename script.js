const cards = document.querySelectorAll('.card');
let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false;
let clicks = 0;


function flipCard() {
    if(lockBoard) return;
    if (this === firstCard) return;

this.classList.add('flip');
if(!hasFlippedCard){
    hasFlippedCard = true;
    firstCard = this;
    return;
}
secondCard = this;
hasFlippedCard = false;
checkForMatch();
};

function checkForMatch(){
    if(firstCard.dataset.card === secondCard.dataset.card){
        disableCards();
        return;
    };
    if(clicks < 5){
        clicks++
    }else{
        alert('Game Over!\nPressione F5 para reiniciar a partida');
        resetBoard();
    }
    unflipCards();
}

function disableCards (){
    firstCard.removeEventListenner('click', flipCard);
    secondCard.removeEventListenner('click', flipCard);

    resetBoard();
}

function unflipCards(){
    lockBoard = true;

    setTimeout(() =>{
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetBoard();
    },500);
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}
(function shuffle() {
    cards.forEach((card) => {
        let randomPosition = Math.floor(Math.random() * 16);
        card.style.order = randomPosition;
    })
})();

cards.forEach((card) =>{
    card.addEventListener('click', flipCard)
})
