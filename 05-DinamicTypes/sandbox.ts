let x: any;
x = 25;
x = true;
x = 'test';
x = {
  name: 'luigi',
}

let mixed2: any[] = [];
mixed2.push(5);
mixed2.push('mario');
mixed2.push(false);

let ninja: { name: any, age: any };
ninja = { name: 'yoshi', age: 'yoshi' };

//Tough it can be useful in certain situations, mistakes may be made using ':any'. Use with caution.