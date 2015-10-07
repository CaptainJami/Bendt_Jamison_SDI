/**
 * Jamison Bendt
 * SDI 1015
 * Expressions Assignment
*/

// Variables
var gamesOwned; // declared a number variable on the number of games you own
var favoriteGame; // declared a string variable for your favorite game
var secondFavorite; // declared a string variable for your second favorite game
var totalPrice; // declared a number variable of all games prices
var prices = []; // declared an number array of prices

prices[0] = prompt("Enter price of the first game on your list: "); // assigned the array a prompt
prices[1] = prompt("Enter price of the second game on your list: "); // assigned the array a prompt
prices[2] = prompt("Enter price of the third game on your list: " ); // assigned the array a prompt
prices[3] = prompt("Enter price of the fourth game on your list: "); // assigned the array a prompt
prices[4] = prompt("Enter price of the fifth and final game on your list: "); // assigned the array a prompt

favoriteGame = prompt("What is your favorite game?: "); //assigned string variable a prompt
secondFavorite = prompt("What is your second favorite game?: "); //assigned a string variable a prompt

gamesOwned = prompt("How many games do you own?: ");
gamesOwned = Number(gamesOwned);

var totalPrice = ([]);