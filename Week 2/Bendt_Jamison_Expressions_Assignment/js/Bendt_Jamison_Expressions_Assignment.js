/**
 * Jamison Bendt
 * SDI 1015
 * Expressions Assignment
*/

// Variables
var gamesOwned; // declared a number variable on the number of games you own
var favoriteGame; // declared a string variable for your favorite game
var secondFavorite; // declared a string variable for your second favorite game
var totalPrice; // declared a sum number variable of all games prices
var prices = []; // declared an number array of prices
var averagePrice; //declared a average calculation variable

alert("I want to know what kind of video games you like! "); // a string prompt
favoriteGame = prompt("What is your favorite game?: "); // assigned string variable a prompt
secondFavorite = prompt("What is your second favorite game?: "); // assigned a string variable a prompt

alert("You like " + favoriteGame + " and " + secondFavorite + ". You have good taste in video games, and that is crazy I love those games too !"); // assigned string variables an alert
console.log("You like " + favoriteGame + " and " + secondFavorite + ", you have good taste in video games, and that is crazy I love those games too !"); // assigned alert to the console.log

gamesOwned = prompt("How many games do you own? (we are going to do at least 3 for the sake of the calculation): "); // an alert for the start of the calculation
gamesOwned = Number(gamesOwned); // declared variable as a number
alert("Well we are just going to do at least 3 games, so get those prices ready and we will do some math!"); // an alert for the start of the calculation

prices[0] = prompt("Enter price of the first game on your list: "); // assigned the array a prompt
prices[1] = prompt("Enter price of the second game on your list: "); // assigned the array a prompt
prices[2] = prompt("Enter price of the third and final game on your list: " ); // assigned the array a prompt

prices[0] = parseInt(prices[0]); // declared variable as a number
prices[1] = Number(prices[1]); // declared variable as a number
prices[2] = Number(prices[2]); // declared variable as a number
totalPrice = prices[0] + prices[1] + prices[2]; // declared sum of the 3 arrays
averagePrice = totalPrice / prices.length; // declared the average of the 3 arrays

alert("You have a total of " + gamesOwned + " games, but the 3 games you listed come out for a total price of $" + totalPrice + ", that is crazy I hope you enjoy them!\n \n" +
    "$" + averagePrice + " is the average of the 3 game prices you listed." ); // assigned the array and number variable to alert
console.log("You have a total of " + gamesOwned + " games, but the 3 games you listed come out for a total price of $" + totalPrice + ", that is crazy I hope you enjoy them!\n \n" +
    "$" + averagePrice + " is the average of the 3 game prices you listed." ); // assigned the alert to the console.log
