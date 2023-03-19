"use strict";

// Оператор опциональной цепочки

const box = document.querySelector(".box");
const block = document.querySelector(".block");

console.log(block);

// if (block) {
//   console.log(block.textContent);
// }

console.log(block?.textContent);
// block?.textContent = 'something' // SyntaxError: Invalid left-hand side in assignment

console.log(1 + 3);

const userData = {
  name: "Denis",
  age: null,
  say: function () {
    console.log("Hello");
  },
};

userData.say();
userData.hey?.();

// if (userData && userData.skills && userData.skills.js) {
//   console.log(userData.skills.js)
// }

console.log(userData?.skills?.js);
console.log(userData?.skills?.["js"]);
