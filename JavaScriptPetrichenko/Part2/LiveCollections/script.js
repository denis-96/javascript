"use strict";

const boxesQuery = document.querySelectorAll(".box");
const boxesGet = document.getElementsByClassName("box");

boxesQuery[0].remove();
boxesGet[0].remove();

for (let i = 0; i < 5; i++) {
  const div = document.createElement("div");
  div.classList.add("box");
  document.querySelector(".wrapper").append(div);
}

console.log(boxesQuery); // 3 элемента в массиве
console.log(boxesGet); // 6 элементов в массиве
// boxesQuery - статичная коллекция
// boxesGet - живая коллекция

// console.log(document.body.children)

console.log(Array.from(boxesGet));

// matches - сравнивает элемент с css селектором
boxesQuery.forEach((box) => {
  if (box.matches(".this")) console.log("this one");
});

// closest - ищет первый родительский элемент с указанным селектором
console.log(boxesQuery[2].closest(".wrapper"));
