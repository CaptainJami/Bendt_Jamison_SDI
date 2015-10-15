/**
 * Jamison Bendt
 * SDI 1015
 * Conditionals Assignment
 */

var station = prompt("Is the gas station open?");

if(station == "Yes" || station == "yes"){
    station = true;
}else{
    station = false;
}

var gasStation = (station === true) ? "The station is open, lets get some candy!" : "The station is closed, I guess I will wait until tomorrow.";

console.log(gasStation);

var budget = prompt("What is your budget for candy?");

if(budget === ""){
    budget = prompt("Please enter a valid number.");
    console.log("Let's hope " + budget + " is enough for this delicious candy.");
}else{
    console.log("Let's hope " + budget + " is enough for this delicious candy.");
}
budget = Number(budget);

var candyBarPrice1 = Number(prompt("What is the price of the first candy bar?"));



var candyBarPrice2 = Number(prompt("What is the price of the second candy bar?"));




var salesTax = 0.06;
var candyBarPrice1Total = (candyBarPrice1 * salesTax) + candyBarPrice1;
var candyBarPrice2Total = (candyBarPrice2 * salesTax) + candyBarPrice2;
var candyBarTax = (candyBarPrice1 + candyBarPrice2) * salesTax;
var candyBarTotal = candyBarTax + candyBarPrice1 + candyBarPrice2;
var totalPrice = (candyBarTotal * salesTax) + candyBarTotal;
var leftOver1 = budget - candyBarPrice1Total;
var leftOver2 = budget - candyBarPrice2Total;
var neededAmount = candyBarTotal - (candyBarPrice1 + candyBarPrice2);
var price = budget - totalPrice;


if(candyBarPrice1Total <= budget || candyBarPrice2Total <= budget){
    console.log("You have enough money for only the first candy bar with $" + leftOver1 + " left over.");
    console.log("You have enough money for only the second candy bar with $" + leftOver2 + " left over.");
}

if(candyBarTotal <= budget){
    console.log("You have enough for both of the candy bars with $" + price + " left over.");
}else{
    console.log("Sorry you don't have enough for both candy bars you were short $" + neededAmount);
}
