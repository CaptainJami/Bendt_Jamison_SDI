/**
 * Jamison Bendt
 * SDI 1015
 * Functions Worksheet
 */


// Circumference

var circle = function(radius){
    var circumference = 2 * (3.14 * radius);
    return circumference;
};

var answer = circle(prompt("What is the radius of the circle?: "));
console.log("The circumference of the circle is " + answer);


// Stung!

var weight = function(pounds){
    var stung = 8.66666667 * pounds;
    return stung;
};