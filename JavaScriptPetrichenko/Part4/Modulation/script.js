"use strict";

// const app = "123"; 
const number = 1;

// Анонимная самовызывающаяся функция
(function () {
  let number = 2;
  console.log(number); // 2
  console.log(number + 3); // 5
})();

console.log(number) // 1

const user = (function() {
  const privat = function() {
    console.log("I'm privat")
  }
  return {
    sayHello: privat
  }
}())

user.sayHello()