let flippedCards = []
let matchedCards = 0

function flipCard(index){
const card = document.getElementById(`card-${index}`)
card.classList.add("flipped")

flippedCards.push(card)

if (flippedCards.length === 2) {
    const card1= flippedCards[0]
    const card2= flippedCards[1]

    const card1Value = card1.getAttribute("data-card-id")
    const card2Value = card2.getAttribute("data-card-id")

    if (card1Value === card2Value) {
        matchedCards++;
        if (matchedCards === 18) {
            alert("Well done! You won the game!")
        }
        else {
            setTimeout(() => {
                card1.classList.remove("flipped")
                card2.classList.remove("flipped")
            }, 1000)

        }
        flippedCards = []

    }
}
function resetGame() {
    window.location.reload()
}
}


