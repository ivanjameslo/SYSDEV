document.addEventListener('DOMContentLoaded', () => {
    let loadMoreBtn = document.querySelector('#loadMore');
    let currentRow = 1; //first row of cards

    loadMoreBtn.addEventListener('click', () => {
        currentRow++;

        let cards = [...document.querySelectorAll('.container .row-container:nth-child(' + currentRow + ') .card')];

        // If there are cards in the new row, display the first set of 3 cards
        if (cards.length > 0) {
            let cardsToShow = cards.slice(0, 3); // Shows the first 3 cards of the new row
            cardsToShow.forEach(card => card.style.display = 'inline-block');
        }

        // Check if there is another row of cards
        let nextRowExists = document.querySelector('.container .row-container:nth-child(' + (currentRow + 1) + ')') !== null;

        if (!nextRowExists) {
         loadMoreBtn.textContent = 'No Data'; // Change button text
         loadMoreBtn.disabled = true; 
         loadMoreBtn.style.backgroundColor = 'none'; 
         loadMoreBtn.style.cursor = 'not-allowed';
        }
    });
});