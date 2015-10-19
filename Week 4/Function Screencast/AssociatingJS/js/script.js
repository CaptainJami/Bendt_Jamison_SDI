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


{
    var total = calcArea(30, 20);

    function calcArea2(w, h) {
        var area2 = w * h;
        return area2; //function spitting the info
    }

    console.log(total);
}

function calcAreaF(width, height){
    var areaF = width * height;
    return areaF;
}

function calcAreaP(width, height){ // procedure
    var areaF = width* height;
    console.log(areaF);
}

var calcAreaS = function(width, height){
    var areaS = width * height;
    return areaS;
};

var a = calcAreaS(20, 30);

console.log(a);