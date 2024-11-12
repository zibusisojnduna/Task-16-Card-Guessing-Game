const express = require('express');
const app = express();
const path = require('path');


app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "views"))

app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
    const cards = generateCards()
    res.render("index", {cards})
})

function generateCards() {
    const cardValues = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let cards = [];
    
    // Create 18 pairs of cards
    cardValues.forEach(function(value) {
        cards.push({ id: value, value, matched: false });
        cards.push({ id: value, value, matched: false });
    });
    
    // Shuffle the cards using the Fisher-Yates algorithm
    for (let i = cards.length - 1; i > 0; i--) {
        // Declare 'j' inside the loop
        const j = Math.floor(Math.random() * (i + 1));
        
        // Swap the cards at index i and j
        [cards[i], cards[j]] = [cards[j], cards[i]];
    }
    
    return cards;
}


app.listen(3000, () => {
    console.log("Server is running on port 3000");
});