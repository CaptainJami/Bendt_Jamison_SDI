/**
 * Jamison Bendt
 * SDI 1015
 * Functions Assignment
 */


// Variables with parameter functions.

var floridaNumbers = randomNumber(1, 53, 6);
var powerballNumbers = randomNumber(1, 59, 5);
var powerballWin = randomNumber(1, 35, 1);

function lotteryValidation(lotteryPrompt){
    var timesClicked = 1;

    while(lotteryPrompt === ""){

        lotteryPrompt = prompt("There is nothing being entered. \n\n Please enter valid input.");

        timeClicked++;

        if(timesClicked === 5){
            console.log("Terminating process.");
            break;
        }

    }
    return lotteryPrompt;
}

lotteryPrompt = prompt("Please enter which lottery number you'd like to play:\n\nEnter Fl for Florida Lottery. \nEnter Pb for Powerball Lottery.");
