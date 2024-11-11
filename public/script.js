const { reset } = require("nodemon")

let flippedCards = []
let matchedCards = []

const cards = document.querySelectorAll(".card")

cards.forEach( card => {
     card.addEventListener("click", () => flipCard(card))
})

document.getElementById("reset-btn").addEventListener("click", resetGame)

function flipCard(card){
    if (flippedCards.length < 2 && !card.classList.contains("flipped") && !matchedCards.includes(card)){
        card.add
    }
}