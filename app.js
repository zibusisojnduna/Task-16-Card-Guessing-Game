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

function generateCards(){
    const cardValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A]
    const cards = []

    cards.push({ id: value, value, matched: false})
    cards.push({ id: value, value, matched: false})

    for (let i = cards.length -1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        [cards[i], cards[j]] = [cards[j], cards[i]]

    }
    return cards
}

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});