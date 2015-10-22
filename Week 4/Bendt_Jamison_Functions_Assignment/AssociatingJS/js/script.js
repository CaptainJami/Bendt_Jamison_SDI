/**
 * Jamison Bendt
 * SDI 1015
 * Functions Assignment
 */


// Variables with parameter functions.

var floridaNumbers = randomNumber(1, 53, 6); // variable with function parameters
var powerballNumbers = randomNumber(1, 59, 5); // variable with function parameters
var powerballWin = randomNumber(1, 35, 1); // variable with function parameters

// Function to validate prompts entry
function lotteryValidation(lotteryPrompt){
    // Times needed to click for this function to be called
    var timesClicked = 1;
    // While loop for empty prompt
    while(lotteryPrompt === ""){
        // Prompt asking for re-entering a number
        lotteryPrompt = prompt("There is nothing being entered. \n\n Please enter valid input.");
        // Increments the code
        timesClicked++;
        // Runs the code X amount of times
        if(timesClicked === 5){
            console.log("Terminating process.");
            break;
        }

    }
    // Returns function lotteryPrompt
    return lotteryPrompt;
}
// Prompt asking for what lottery you'd like the numbers for
lotteryPrompt = prompt("Please enter which lottery number you'd like to play:\n\nEnter Fl for Florida Lottery. \nEnter Pb for Powerball Lottery.");

// Function for random number generator with parameters (min, max, num)
function randomNumber(min, max, num){
    // Defines variable inside the function to be returned as an array
    var random = [];
    // Defines variable inside the function to return a random number
    var randomNum;
    // A for loop for generating random numbers everytime the function is called
    for(var i = 0; i < num; i++){
        // Returns a random number between (min and max values) plus the min values
        randomNum = Math.random() * (max - min) + min;
        // Makes sure random number is rounded to whole number
        random[i] = Math.round(randomNum);
    }
    // Returns random back into the main code
    return random;
}
// Call to the function lotteryValidation to validate what you typed is applicable
lotteryPrompt = lotteryValidation(lotteryPrompt);

if(lotteryPrompt === "FL" || lotteryPrompt === "Fl" || lotteryPrompt === "fl"){
    // If user entered FL, Fl, or fl this will be printed to the console
    console.log("Your Florida lottery numbers are: " + floridaNumbers);
}else if(lotteryPrompt === "PB" || lotteryPrompt === "Pb" || lotteryPrompt === "pb"){
    // If user entered PB, Pb, pb this will be printed to the console
    console.log("Your powerball numbers are: " + powerballNumbers + " with PB: " + powerballWin);
}else{
    // If neither were entered this will printed to the console
    console.log("That is not what I was looking for.");
}


/**
 Test 1:

 Typed fl

 Your Florida lottery numbers are: 49,36,25,20,5,43


 Test 2:

 Typed Pb

 Your powerball numbers are: 32,37,6,33,33 with PB: 7


 */