const cards = document.querySelectorAll('.card');
let hasFlippedCard = false;
let firdtCard, secondCard;

function flipCard() {
this.classList.add('flip');
if(!hasFlippedCard){
    hasFlippedCard = true;
    firdtCard = this;
    return;
}
secondCard = this;
checkForMath();
};


cards.forEach((card) =>{
    card.addEventListener('click', flipCard)
})
