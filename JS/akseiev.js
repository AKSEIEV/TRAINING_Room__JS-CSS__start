//строгий режим типу >
"use strict";
// Це коментар. Далі йде увесь код JS-файлу

const x = 10;
const y = 5;
console.log("x > y:", x > y);

console.log(x * y); //50

console.log(x / y); //2


console.log(x % y); //0

let value = 5;
console.log(value * y); //25

value += 10;
console.log(value); //15

const valueA = "5";
console.log(Number(valueA)); // 5
console.log(typeof Number(valueA)); // "number"


// console.log((0.17 + 0.24).toFixed(2)); // 0.41


const guestName = "Ківі";
const roomNumber = 105;
const greeting = `якщо дасиш мені ${roomNumber} доларов, я продам тебе ${roomNumber} ${guestName}!`; 
console.log(greeting); //якщо дасиш мені 105 доларов, я продам тебе 105 Ківі!

