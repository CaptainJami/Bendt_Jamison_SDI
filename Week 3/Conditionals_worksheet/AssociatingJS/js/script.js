/**
 * Jamison Bendt
 * SDI 1015
 * Conditionals Worksheet
 */

// Stuff your face

// variable(s)
var competitorsWeight = prompt("What is your weight? (in pounds)");

if(competitorsWeight >= 250 ){
    console.log("The competitor qualifies for the heavyweight division.");
}else{
    console.log("The competitor needs to gain some weight!")
}

// Last Chance for Gas!

//variable(s)
var gasEfficiency = prompt("What is your cars miles per gallon?"); //declared and assigned a variable with a prompt asking for user data
var gaugeReading = prompt("What is the gas gauge reading? (in decimal percentage)"); //declared and assigned a variable with a prompt asking for user data
var gasCapacity = prompt("How many gallons of gas can your car hold?"); //declared and assigned a variable with a prompt asking for user data
var gallonsLeft;

gasEfficiency = Number(gasEfficiency);
gaugeReading = Number(gaugeReading);
gasCapacity = Number(gasCapacity);

gallonsLeft = gasEfficiency * gaugeReading + gasCapacity;

if(gallonsLeft >= 200 / gasEfficiency) {
    console.log("Yes you can make it without stopping for gas!");
}else{
    console.log("You only have " + gallonsLeft + " gallons of gas in your tank, better get gas now while you can!");
}

// Grade Letter Calculator

//variable(s)
var currentGrade = prompt("What is your number grade currently in this class? (rounded to nearest number)");


currentGrade = Number(currentGrade);

}
