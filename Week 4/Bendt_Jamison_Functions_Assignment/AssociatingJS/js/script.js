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

function randomNumber(min, max, num){
    var random = [];
    var randomNum;

    for(var i = 0; i < num; i++){
        randomNum = Math.random() * (max - min) + min;
        random[i] = Math.round(randomNum);
    }
    return random;
}

lotteryPrompt = lotteryValidation(lotteryPrompt);

if(lotteryPrompt === "FL" || lotteryPrompt === "Fl" || lotteryPrompt === "fl"){
    console.log("Your Florida lottery numbers are: " + floridaNumbers);
}else if(lotteryPrompt === "PB" || lotteryPrompt === "Pb" || lotteryPrompt === "pb"){
    console.log("Your powerball numbers are: " + powerballNumbers + " with PB: " + powerballWin);
}else{
    console.log("That is not what I was looking for.");
}