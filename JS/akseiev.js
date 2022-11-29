//строгий режим типу >
"use strict";
// Це коментар. Далі йде увесь код JS-файлу
                                               //чорне це- строка , синє- числа
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
console.log(typeof Number(valueA)); // "number"   //покаже тип


// console.log((0.17 + 0.24).toFixed(2)); // 0.41


const guestName = "Ківі";
const roomNumber = 105;
const greeting = `якщо дасиш мені ${roomNumber} доларов, я продам тебе ${roomNumber} ${guestName}!`; 
console.log(greeting); //якщо дасиш мені 105 доларов, я продам тебе 105 Ківі!

let elementWidth = "50.30px";
elementWidth = Number.parseInt(elementWidth);
console.log('elementWidth: ', elementWidth);   //50



let salary = 1300.11472;
salary = salary.toFixed(2);
salary = Number(salary);  //ПЕРЕРОБИ В ЧИСЛО
console.log(salary);  //1300.11
// або
// let salary = 1300.11472;
// salary = Number(salary.toFixed(2)); //1300.11
//або
// console.log = (Number(salary.toFixed(2))); //1300.11


// //----------------- Задачка. Напиши скріпт_ 
// який просе пользоватєля ввести число і степінь_ 
// возводе число в цю степініь і виводе результат в консоль


//  1) просим ввести число_ і сохранити її в змінну >
// let base = prompt('davay chislo bro');
// base = Number(base);
// console.log(base);//2     // яке число введи_ то ми отримуєм в консолі_синім звісно ж

// //  2)  просим ввести степінь_ і сохранити в зміну >
// let power = prompt('davay teper STEPINN bro');
// power = Number(power);
// console.log(power);//3

// //    3) возвести чисо в степінь_яке написил_і вивести в консольку
// const result = base ** power;
// console.log(result); //2*2*2=8


console.log(Math.random()); //рандомне число карочє
//а от ФОРМУЛА- коли нада рандомне число в діапазоні від-до
// Math.random() * (max - min) + min;
console.log(Math.random() * (29 - 18) + 18);   // KAAAAAAAAAAAAAAAIIIIIIIIFFFFFFFFF♥

console.log(Math.round(4.1)); //роунд округляє до цілого якшо потрібно 4.1=4 , 4.6=5
//можна так обгортати _ ахірєть круто..
console.log(Math.round(Math.random() * (29 - 18) + 18));