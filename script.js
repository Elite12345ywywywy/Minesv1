document.addEventListener('DOMContentLoaded', () => {
    const gameBoard = document.getElementById('game-board');
    const suggestButton = document.getElementById('suggest-button');
    const totalBoxes = 25;

    // Generate boxes
    for (let i = 0; i < totalBoxes; i++) {
        const box = document.createElement('div');
        box.classList.add('box');
        gameBoard.appendChild(box);
    }

    // Handle click event on CHECK RESULT button
    suggestButton.addEventListener('click', () => {
        const boxes = document.querySelectorAll('.box');
        const numberOfSuggestions = Math.floor(Math.random() * 4) + 2; // Random between 2 and 5
        const suggestedIndexes = [];

        // Clear previous suggestions
        boxes.forEach(box => {
            const overlay = box.querySelector('.suggestion-overlay');
            if (overlay) {
                box.removeChild(overlay);
            }
        });

        // Generate random suggestions
        while (suggestedIndexes.length < numberOfSuggestions) {
            const randomIndex = Math.floor(Math.random() * totalBoxes);
            if (!suggestedIndexes.includes(randomIndex)) {
                suggestedIndexes.push(randomIndex);
            }
        }

        // Add fire animation to suggested boxes
        suggestedIndexes.forEach(index => {
            const overlay = document.createElement('div');
            overlay.classList.add('suggestion-overlay');

            // Add your fire image here
            const img = document.createElement('img');
            img.src = 'sanam1_1.png'; // Replace with your fire image filename
            overlay.appendChild(img);

            boxes[index].appendChild(overlay);
        });
    });
});

// Function to open links in a new tab or the default browser
function openLink(url) {
    const win = window.open(url, '_blank');
    if (win) {
        win.focus();
    } else {
        window.location.href = url;
    }
}