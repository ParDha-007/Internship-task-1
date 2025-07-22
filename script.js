document.addEventListener('DOMContentLoaded', () => {
    const jokeDisplay = document.getElementById('joke-display');
    const fetchJokeButton = document.getElementById('fetch-joke-button');

    const API_URL = 'https://official-joke-api.appspot.com/random_joke'; // A public API for random jokes

    async function fetchJoke() {
        jokeDisplay.innerHTML = '<p>Fetching a hilarious joke...</p>'; // Show loading message

        try {
            const response = await fetch(API_URL);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            // The API returns an object with 'setup' and 'punchline' properties
            jokeDisplay.innerHTML = `<p>${data.setup}</p><p><strong>${data.punchline}</strong></p>`;
        } catch (error) {
            console.error('Error fetching the joke:', error);
            jokeDisplay.innerHTML = `<p style="color: red;">Failed to fetch joke. Please try again later.</p>`;
        }
    }

    // Initial fetch when the page loads
    fetchJoke();

    // Fetch new joke when the button is clicked
    fetchJokeButton.addEventListener('click', fetchJoke);
});
