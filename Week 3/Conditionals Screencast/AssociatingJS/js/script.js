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

//if the child is old enough, print to the console "you can ride!"
//if kid is over 48 inches in height
if(kidHeight + sneakerLift > minHeight){
    //code performed if condition is true
    console.log("You can ride the coaster!");
}else{
    //code performed if condition is false
    console.log("Sorry kid, you've got some growing to do first!");
}
