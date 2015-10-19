/**
 * Jamison Bendt
 * SDI 1015
 * Functions Screencast
 */


function outputMsg(){
    console.log("Hello World");
}

var width = 5;

function calcArea(){
    var width = 20;
    var height = 30;
    var area = width * height;
    console.log(area);
}

calcArea();
calcArea();
calcArea();
console.log(width);

function dogYears(age){ // parameters
    var dogYears = age *7;
    console.log("Sparky is " + dogYears + " years old.")
}
var age1 = 4; // Arguments
dogYears(age1);
dogYears(5);
