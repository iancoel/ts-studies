let greet = () => {
  console.log("hello, world");
};

let greet1: Function;
greet1 = () => {
  console.log("hello, again");
};

//If your function returns nothing, technically it returns 'void' that represents a complete lack of a return value. In javascript, it becomes undefined
const add = (a: number, b: number, c?: number | string) => {
  console.log(a + b);
  console.log(c);
}
add(3, 7);

//Typescript can infer the type of the result so result would be :number
const minus = (a: number, b: number) => {
  return a + b;
}
let result = minus(10, 7);