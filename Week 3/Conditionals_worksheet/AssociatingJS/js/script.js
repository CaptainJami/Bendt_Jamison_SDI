/**
 * Jamison Bendt
 * SDI 1015
 * Conditionals Worksheet
 */

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
    //If you have greater than or equal to gallonsLeft.
    console.log("Yes you can make it without stopping for gas!");
}else{
    //If you don't have greater than or equal to gallonsLeft.
    console.log("You only have " + gallonsLeft + " gallons of gas in your tank, better get gas now while you can!");
}

// Grade Letter Calculator

//variable(s)
var currentGrade = prompt("What is your number grade currently in this class? (rounded to nearest number)");

currentGrade = Number(currentGrade);

if(currentGrade >= 95){
    // If current grade is greater than or equal to 95.
    grade = "A+";
}else if (currentGrade >= 90){
    // If current grade is greater than or equal to 90.
    grade = "A";
}else if (currentGrade >= 85){
    // If current grade is greater than or equal to 85.
    grade = "B+";
}else if (currentGrade >= 80){
    // If current grade is greater than or equal to 80.
    grade = "B";
}else if (currentGrade >= 75){
    // If current grade is greater than or equal to 75
    grade = "C+";
}else if (currentGrade >= 73){
    // If current grade is greater than or equal to 73
    grade = "C";
}else if (currentGrade >= 70){
    // If current grade is greater than or equal to 70
    grade = "D";
}else if (currentGrade <= 69){
    // If current grade is less than or equal to 69
    grade = "F";
}

console.log("You have a " + currentGrade + "%, which means you have earned a(n) " + grade + " in the class!");


// Movie Ticket Price
var movieTime = prompt("What time is the movie you want to see?");
var customerAge = prompt("How old are you?");
var ticketDiscount = 7.00;
var normalPrice = 12.00;

if(movieTime >= 3 && movieTime <= 5 || customerAge <= 10 || customerAge >= 55){
    // If customer is under the age of 10 and or over 55, also if attending movie between 3-5 pm
    console.log("The ticket price is $" + ticketDiscount + ".");
}else{
    // If the customer is between 10 and 55 and is attending before 3 or after 5
    console.log("The ticket price is $" + normalPrice + ".");
}
