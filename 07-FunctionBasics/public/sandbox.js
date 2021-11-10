"use strict";
var greet = function () {
    console.log("hello, world");
};
var greet1;
greet1 = function () {
    console.log("hello, again");
};
//If your function returns nothing, technically it returns 'void' that represents a complete lack of a return value
var add = function (a, b, c) {
    console.log(a + b);
    console.log(c);
};
add(3, 7);
//Typescript can infer the type of the result so result would be :number
var minus = function (a, b) {
    return a + b;
};
var result = minus(10, 7);
