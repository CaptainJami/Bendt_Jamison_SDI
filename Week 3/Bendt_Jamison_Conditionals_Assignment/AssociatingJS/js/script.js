/**
 * Jamison Bendt
 * SDI 1015
 * Conditionals Assignment
 */

var station = confirm("Is the gas station open?\n" + "Click OK for Yes, and Cancel for No."); // confirm prompt for true, false value on station variable


if(station === true) { // conditional if for station confirm

    var gasStation = (station === true) ? "The station is open, lets get some candy!" : "The station is closed, I guess I will wait until tomorrow."; // ternary conditional for station confirm

    console.log(gasStation); // output for variable gasStation ternary conditional

    var budget = prompt("What is your budget for candy?"); // declared a variable and prompted for user information

    if (budget === "") { // validation if else statement for budget
        budget = prompt("Please enter a valid number."); // prompted for user information
        console.log("Let's hope " + budget + " is enough for this delicious candy."); // output for conditional if else statement validation for budget true value
    } else {
        console.log("Let's hope " + budget + " is enough for this delicious candy."); // output for conditional if else statement validation for budget false value
    }
    budget = Number(budget); // declared variable a number

    var candyBarPrice1 = prompt("What is the price of the first candy bar?"); // declared a variable and prompted for user information

    if (candyBarPrice1 === "") { // validation if else statement for candyBarPrice1
        candyBarPrice1 = prompt("Please enter a valid number."); // prompted for user information
        console.log("$" + candyBarPrice1 + " for a candy bar? That is crazy."); // output for conditional if else statement validation for candyBarPrice1 true value
    } else {
        console.log("$" + candyBarPrice1 + " for a candy bar? That is crazy."); // output for conditional if else statement validation for candyBarPrice1 false value
    }
    candyBarPrice1 = Number(candyBarPrice1); // declared variable a number

    var candyBarPrice2 = Number(prompt("What is the price of the second candy bar?")); // declared a variable and prompted for user information

    if (candyBarPrice2 === "") {// validation if else statement for candyBarPrice1
        candyBarPrice2 = prompt("Please enter a valid number."); // prompted for user information
        // output for conditional if else statement validation for candyBarPrice2 true value
        console.log("$" + candyBarPrice2 + " for a candy bar? That is crazy.");
    } else {
        // output for conditional if else statement validation for candyBarPrice2 false value
        console.log("$" + candyBarPrice2 + " for a candy bar? That is crazy.");
    }
    candyBarPrice2 = Number(candyBarPrice2); // declared variable a number

    var salesTax = 0.06; // declared and assigned a variable
    var candyBarPrice1Total = (candyBarPrice1 * salesTax) + candyBarPrice1; // declared and assigned a calculation variable
    var candyBarPrice2Total = (candyBarPrice2 * salesTax) + candyBarPrice2; // declared and assigned a calculation variable
    var candyBarTax = (candyBarPrice1 + candyBarPrice2) * salesTax; // declared and assigned a calculation variable
    var candyBarTotal = candyBarTax + candyBarPrice1 + candyBarPrice2; // declared and assigned a calculation variable
    var totalPrice = (candyBarTotal * salesTax) + candyBarTotal; // declared and assigned a calculation variable
    var leftOver1 = budget - candyBarPrice1Total; // declared and assigned a calculation variable
    var leftOver2 = budget - candyBarPrice2Total; // declared and assigned a calculation variable
    var neededAmount = candyBarTotal - (candyBarPrice1 + candyBarPrice2); // declared and assigned a calculation variable
    var price = budget - totalPrice; // declared and assigned a calculation variable


    if (candyBarPrice1Total <= budget || candyBarPrice2Total <= budget) {
        // output for conditional statement candyBarPrice1Total
        console.log("You have enough money for only the first candy bar with $" + leftOver1 + " left over.");
        // output for conditional statement candyBarPrice2Total
        console.log("You have enough money for only the second candy bar with $" + leftOver2 + " left over.");
    }

    if (candyBarTotal <= budget) {
        // output for conditional if else true statement
        console.log("You have enough for both of the candy bars with $" + price + " left over.");
    } else {
        // output for conditional if else false statement
        console.log("Sorry you don't have enough for both candy bars you were short $" + neededAmount);
    }
}