/**
 * Jamison Bendt
 * SDI 1015
 * Assignment Name
 */

temp = 65
if(temp == 75){
    goToTheBeach();
}

if(sunny){
    goToTheBeach();

    if(warmWater){
        wearNewSuit();
    }

}else{
    goToTheMovies();
}

//Conditional Logic

var oldEnough = false;

//if the child is old enough, print to the console
if(oldEnough) {
    //code performed if condition is true
    console.log("You can ride the coaster!");
}

//Conditional Logic - Relational Expressions

var kidHeight = 47;
var minHeight = 48;
var sneakerLift = 2;
var wParentHeight = 45;

//if the child is old enough, print to the console "you can ride!"
//if kid is over 48 inches in height
if(kidHeight + sneakerLift > minHeight){
    //code performed if condition is true
    console.log("You can ride the coaster!");
}else if(kidHeight > wParentHeight){
    //you can ride!
    console.log("You can ride, but only with a parent present. ");

}else{
    //code performed if condition is false
    console.log("Sorry kid, you've got some growing to do first!");
}

//Conditional Logic - Logical Operators

var budget = 300;
var iPhonePrice = 199.99;
var paycheck = 200;

//if the price of the phone is less than our budget AND if our paycheck is over 300
if(iPhonePrice && paycheck < 300){
    console.log("We can buy the phone!");
}else{
    console.log("No phone for you!!");
}

var gpa = 48;

// if the gpa is over the min 2.0 score, the student can graduate
if(gpa > 2.0){
    console.log("You can graduate!");
}else{
    console.log("GPA is too low!");
}

(gpa > 2.0) ? console.log("You can graduate!") : console.log("GPA too low!");