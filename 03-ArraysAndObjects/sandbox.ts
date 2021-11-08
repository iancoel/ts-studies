// arrays
let names = ['luigi', 'mario', 'yoshi'];
names.push('toad');
// names.push(10)

let numbers = [20, 15, 10, 5];
numbers.push(0);
// number.push("-5");

let mixed = ['ryu', 4, 'ken', true];
mixed.push('test');
mixed.push(2);
mixed[0] = 8;


// objects
let ninja = {
  name: 'mario',
  belt: 'black',
  age: 30,
};
//ninja.age = '30';
//likewise arrays, if a property was declared as a predetermined type, it won't compile if it get assigned to a diferent one

ninja = {
  name: 'yoshi',
  belt: 'orange',
  age: 15,
};