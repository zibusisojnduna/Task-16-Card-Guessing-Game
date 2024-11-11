function generateCards() {
    const cardValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A]
    const cards = []

    cardValues.forEach(value => {
        cards.push({ value, id:value})
        cards.push({ value, id:value})
    })

    for (let i = cards.length -1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        [cards[i], cards[j]] = [cards[j], cards[i]] 
    }
    return cards
}

module.exports= {generateCards}