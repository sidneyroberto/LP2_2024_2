// const sum = (a: number, b: number) => a + b;

import { Contact } from "./models/Contact";

function sum(a: number, b: number) {
  return a + b;
}

console.log(sum(1, 2));

const fullname: string = "Fulano de Tal";
const phone: string = "(99) 9999-9999";
const email: string = "fulano@email.com";
const birthday: Date = new Date("1990-02-12");

const contact1: Contact = {
  name: fullname,
  phone,
  email,
  birthday,
};
console.log(contact1);

const contact2: Contact = {
  name: "Cicrano de Sousa",
  phone: "(88) 88888-8888",
};
console.log(contact2);

const binary = 0b11;
console.log(binary);
const hex = 0xfa;
console.log(hex);

const big: bigint = 19828923876234823487234675234n;
console.log(big);

const arr1: number[] = [];
const arr2: Array<number> = [];
arr1.push(1);
arr1.push(-23);
arr1.push(58);
arr2.push(-7);
arr2.push(0);
arr2.push(73);
console.log(arr1);
console.log(arr2);

const arr3 = ["Oi", "banana", "telefone"];
console.log(arr3);

// Tuplas (Tuples)
const t1: [string, number] = ["semestre", 2];
const t2: [string, Date] = ["aniversário", new Date("1987-01-19")];
console.log(t1);
console.log(t2[0]);
