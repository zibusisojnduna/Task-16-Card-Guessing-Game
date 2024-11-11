const { render } = require('ejs');
const express = require('express');
const app = express();
const path = require('path');
const { generateCards } = require('./games')

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
    const cards = generateCards()
    res.render("index", {cards})
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});