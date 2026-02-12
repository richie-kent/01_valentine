// script.js - Simple JavaScript for interactivity
// Logout functionality
document.getElementById('logout-btn').addEventListener('click', () => {
    localStorage.removeItem('isLoggedIn');
    window.location.href = 'login.html';
});
// Get elements from the DOM
const revealButton = document.getElementById('reveal-button');
const letter = document.getElementById('letter');

// Add event listener to the button
revealButton.addEventListener('click', () => {
    // Toggle visibility of the letter
    letter.classList.toggle('hidden');
    letter.classList.toggle('visible');
    
    // Change button text after revealing
    if (letter.classList.contains('visible')) {
        revealButton.textContent = 'Hide the Letter 💌';
    } else {
        revealButton.textContent = 'Click to Reveal My Love Letter 💌';
    }
});
