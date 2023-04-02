"use strict";

const box = document.querySelector(".box");
const btn = document.querySelector("button");

// const width = box.clientWidth
// const height = box.clientHeight
// const width = box.offsetWidth
// const height = box.offsetHeight
// const width = box.scrollWidth;
// const height = box.scrollHeight;

// console.log(width, height);

btn.addEventListener("click", () => {
  // box.style.height = box.scrollHeight + 'px'
  console.log(box.scrollTop);
});

console.log(box.getBoundingClientRect());

const style = window.getComputedStyle(box)
// console.log(style)
console.log(style.display)


// Скролл относительно текущей позиции - scrollBy(x, y)
// Скролл на указанные координаты - scrollTo(x, y)
