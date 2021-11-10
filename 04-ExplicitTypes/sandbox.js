//explicit types
var character;
var age;
var isLoggedIn;
//age = "test";
age = 1;
//isLoggedIn = 25;
isLoggedIn = false;
//arrays
//ideally you want to initialize your string with = [] after the declaration so you can use .push afterwards
var ninjas = [];
//ninjas = [10, "21"];
ninjas = ["test1", "test2"];
//union types
//our way to say "one of two (or three, etc) types"
var mixed = [];
mixed.push('hello');
mixed.push(20);
//mixed.push(false);
var uid;
uid = '123';
uid = 123;
//uid = true;
//objects
var ninjaOne;
ninjaOne = { name: 'yoshi', age: '15' };
ninjaOne = [1];
var ninjaTwo;
//ninjaTwo = [1];
ninjaTwo = {
    name: 'mario',
    age: 30,
    beltColour: 'black'
};
