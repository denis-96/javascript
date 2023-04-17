"use strict";
// 24.03.23

const now = new Date();

// const date = new Date('2023-03-22')
// const date2 = Date.parse('2023-03-22')
// console.log(date);
// console.log(date2);

// Getters
// console.log(now.getFullYear()); // 2023
// console.log(now.getMonth()); // 2
// console.log(now.getDate()); // 24
// console.log(now.getDay()); // 5 (Friday)
// now.getHours(), now.getMinutes(), now.getSeconds()

// console.log(now.getHours()); // 21
// console.log(now.getUTCHours()); // 19

// console.log(now.getTimezoneOffset())
// console.log(now.getTime())

// Setters
now.setHours(10);
now.setMinutes(40);
console.log(now);

let start = new Date();

for (let index = 0; index < 10000000; index++) {
  let some = index ** 3;
}

let end = new Date();

console.log(`Цикл отработал за ${end - start} миллисекунд`)