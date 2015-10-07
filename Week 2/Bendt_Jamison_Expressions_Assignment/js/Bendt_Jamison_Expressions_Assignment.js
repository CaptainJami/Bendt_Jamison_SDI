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
var averagePrice;

alert("I want to know what kind of video games you like! ");
favoriteGame = prompt("What is your favorite game?: "); //assigned string variable a prompt
secondFavorite = prompt("What is your second favorite game?: "); //assigned a string variable a prompt

alert("You like " + favoriteGame + " and " + secondFavorite + ", you have good taste in video games, and that is crazy I love those games too !");
console.log("You like " + favoriteGame + " and " + secondFavorite + ", you have good taste in video games, and that is crazy I love those games too !");

gamesOwned = prompt("How many games do you own? (we are going to do at least 3 for the sake of the calculation): ");
gamesOwned = Number(gamesOwned);
alert("Well we are just going to do at least 3 games, so get those prices ready and we will do some math!");

prices[0] = prompt("Enter price of the first game on your list: "); // assigned the array a prompt
prices[1] = prompt("Enter price of the second game on your list: "); // assigned the array a prompt
prices[2] = prompt("Enter price of the third and final game on your list: " ); // assigned the array a prompt

prices[0] = Number(prices[0]);
prices[1] = Number(prices[1]);
prices[2] = Number(prices[2]);
totalPrice = prices[0] + prices[1] + prices[2];
averagePrice = totalPrice / prices.length;

alert("You have a total of " + gamesOwned + " games, but the 3 games you listed come out for a total price of $" + totalPrice + ", that is crazy I hope you enjoy them!\n \n" +
    "$" + averagePrice + " is the average of the 3 game prices you listed." );
console.log("You have a total of " + gamesOwned + " games for a total price of $" + totalPrice + ", that is crazy I hope you enjoy them!");
