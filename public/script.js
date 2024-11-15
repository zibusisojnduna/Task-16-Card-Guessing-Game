document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');
  let flippedCards = [];
  let matchedPairs = 0;
  let isGameOver = false;

  // Function to handle card clicks
  function flipCard(card) {
    if (flippedCards.length < 2 && !card.classList.contains('flipped') && !isGameOver) {
      card.classList.add('flipped');
      flippedCards.push(card);

      if (flippedCards.length === 2) {
        checkMatch();
      }
    }
  }

  // Function to check if two flipped cards match
  function checkMatch() {
    const [card1, card2] = flippedCards;

    if (card1.dataset.value === card2.dataset.value) {
      matchedPairs++;
      if (matchedPairs === 18) {
        alert('Congratulations! You have won the game!');
        isGameOver = true;
      }
      flippedCards = [];
    } else {
      setTimeout(() => {
        card1.classList.remove('flipped');
        card2.classList.remove('flipped');
        flippedCards = [];
      }, 1000);
    }
  }

  // Add event listeners to all cards
  cards.forEach(card => {
    card.addEventListener('click', () => flipCard(card));
  });

  // Handle game reset
  document.getElementById('resetButton').addEventListener('click', () => {
    if (isGameOver) {
      location.reload(); // Reload the page to reset the game state
    } else {
      alert('Game is not over yet!');
    }
  });
});
