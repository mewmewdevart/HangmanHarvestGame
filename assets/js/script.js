// Import the data.js file
import { horrorMovies, trashMovies, grossingMovies, romanceMovies, animationMovies } from "./data.js";

// Getting the game screen elements
const gameStartScreen = document.getElementById("gameStartScreen");
const gamePlayScreen = document.getElementById("gameplayScreen");
document.getElementById("start-button").addEventListener("click", startGame);


// Selecting a random movie from the available categories
let selectedMovie = ft_getRandomMovieFromList({ horrorMovies, trashMovies, grossingMovies, romanceMovies, animationMovies }); // Chosen movie : Based on a random movie

// Initializing variables for displayed letters, remaining guesses, word length, and game status
let displayedLetters = ""; // Letters that are being displayed
let remainingGuesses = 6; // Remaining guesses for the player
let wordLength; // Length of the word
let isGameOver = false; // Game status

// Generating the displayed letters with spaces and dashes
let i = 0;
while (i < selectedMovie.length) {
	if (selectedMovie[i] === " ")
		displayedLetters += " ";
	else if (selectedMovie[i] === "-")
		displayedLetters += "-";
	else
		displayedLetters += "_";
	i++;
}

// Splitting the displayed letters into an array for manipulation
displayedLetters = displayedLetters.split("");

// Logging the selected movie and displayed letters to the console
console.log(selectedMovie);
console.log(displayedLetters);

// Function to update the display with the current state of the game
function ft_updateDisplay() {
	// Updating the displayed word on the screen
	const displayedWord = document.getElementById("wordDisplay");
	displayedWord.textContent = displayedLetters.join(" ");

	// Updating the count of letters in the word
	const countElement = document.getElementById("countLetters");
	const letterCount = selectedMovie.replace(/[^a-zA-Z]/g, '').length;
	countElement.textContent = letterCount;

	// Updating the category of the movie on the screen
	const categoryElement = document.getElementById("categoryMovies");
	const category = ft_getCategory(selectedMovie);
	categoryElement.textContent = category;
}

// Function to get the category of a given movie
function ft_getCategory(movieName) {
	if (horrorMovies.some(movie => movie.name === movieName)) {
		return "Terror";
	} else if (trashMovies.some(movie => movie.name === movieName)) {
		return "Ruim";
	} else if (grossingMovies.some(movie => movie.name === movieName)) {
		return "Maior Bilheteria";
	} else if (romanceMovies.some(movie => movie.name === movieName)) {
		return "Romance";
	} else if (animationMovies.some(movie => movie.name === movieName)) {
		return "Animação";
	} else {
		return "Unknown";
	}
}

// Function to start the game by hiding the start screen and displaying the gameplay screen
function startGame() {
	gameStartScreen.style.display = 'none';
	gamePlayScreen.style.display = 'flex';
}

// Function to get a random category from the movie data and return a random movie name from that category
function ft_getRandomMovieFromList(movieList) {
	const randomNumber = Math.random();

	if (randomNumber < 0.2)
		return ft_getRandomMovieName(movieList.horrorMovies);
	else if (randomNumber < 0.4)
		return ft_getRandomMovieName(movieList.trashMovies);
	else if (randomNumber < 0.6)
		return ft_getRandomMovieName(movieList.grossingMovies);
	else if (randomNumber < 0.8)
		return ft_getRandomMovieName(movieList.romanceMovies);
	else
		return ft_getRandomMovieName(movieList.animationMovies);
}

// Function to get a random movie name from a given category array
function ft_getRandomMovieName(movieArray) {
	const randomIndex = Math.floor(Math.random() * movieArray.length);
	return movieArray[randomIndex].name;
}

// Calling the updateDisplay function to initialize the display with the initial state of the game
ft_updateDisplay();
