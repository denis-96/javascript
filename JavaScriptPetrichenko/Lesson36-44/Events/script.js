"use strict"

const buttons = document.querySelectorAll('button');
const overlay = document.querySelector('.overlay')

// button.onclick = function() {
//   alert('click');
// }
let i = 0;
const onButtonClick = (event) => {
  console.log(event.target);
  console.log(event.type);
  // i++
  // if (i == 1) {
  //   button.removeEventListener('click', onButtonClick);
  // }
}
 
// button.addEventListener('click', onButtonClick);
// overlay.addEventListener('click', onButtonClick);

buttons.forEach(btn => {
  btn.addEventListener('click', onButtonClick, {once: true});
});


// event.preventDefault  -  отмена стандартного поведения

const link = document.querySelector('a')

link.addEventListener('click', (event) => {
  event.preventDefault();
  console.log(event.target);
});