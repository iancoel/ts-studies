//explicit types
let character: string;
let age: number;
let isLoggedIn: boolean;

//age = "test";
age = 1;

//isLoggedIn = 25;
isLoggedIn = false;


//arrays
//ideally you want to initialize your string with = [] after the declaration so you can use .push afterwards
let ninjas: string[] = [];

//ninjas = [10, "21"];
ninjas = ["test1", "test2"];


//union types
//our way to say "one of two (or three, etc) types"
let mixed: (string|number)[] = [];
mixed.push('hello');
mixed.push(20);
//mixed.push(false);

let uid: (string|number);
uid = '123';
uid = 123;
//uid = true;


//objects
let ninjaOne: object;
ninjaOne = { name: 'yoshi', age: '15' };
ninjaOne = [1];

let ninjaTwo: {
  name: string,
  age: number,
  beltColour: string,
};
//ninjaTwo = [1];
ninjaTwo = {
  name: 'mario',
  age: 30,
  beltColour: 'black',
}