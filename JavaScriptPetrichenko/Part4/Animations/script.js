"use strict";

const btn = document.querySelector(".btn");

// Плохой не оптимизированный способ
// function myAnimation() {
//   const element = document.querySelector(".box");
//   let pos = 0;

//   const id = setInterval(frame, 10);

//   function frame() {
//     if (pos === 300) {
//       clearInterval(id);
//     } else {
//       pos++;
//       element.style.top = pos + "px";
//       element.style.left = pos + "px";
//     }
//   }
// }

// Хороший способ с использованием requestAnimationFrame
let pos = 0;
const box = document.querySelector(".box");

function myAnimation() {
  pos += 5;
  box.style.top = pos + "px";
  box.style.left = pos + "px";

  if (pos < 300) {
    requestAnimationFrame(myAnimation);
  } else pos = 0
}

btn.addEventListener("click", () => requestAnimationFrame(myAnimation));

let id  = requestAnimationFrame(myAnimation)
cancelAnimationFrame(id)