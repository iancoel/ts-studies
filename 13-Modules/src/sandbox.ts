import { Invoice } from './classes/Invoice.js'

const invOne = new Invoice('mario', 'work on the mario website', 250);
const invTwo = new Invoice('luigi', 'work on the luigi website', 300);

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

//Can't do this because now the modifier is readonly -> invOne.client = 'yoshi';
invTwo.amount = 400;

console.log(invoices);



// const form = document.querySelector('form')!;
const form = document.querySelector('.new-item-form') as HTMLFormElement;
//console.log(form.children);

//inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  console.log(
    type.value,
    tofrom.value,
    details.value,
    amount.valueAsNumber
  );
})