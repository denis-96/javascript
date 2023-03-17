'use strict';

const box = document.getElementById('box');
const buttons = document.getElementsByTagName('button');
const circles = document.getElementsByClassName('circle');
const wrapper = document.querySelector('.wrapper');
const hearts = wrapper.querySelectorAll('.heart');
const oneHeart = wrapper.querySelector('.heart');


// box.style.backgroundColor = 'blue'
// box.style.width = '500px'
box.style.cssText = 'background-color: blue; width: 500px'

buttons[1].style.borderRadius = '100%'
circles[0].style.backgroundColor = 'red'

// for (const heart of hearts) {
//   heart.style.backgroundColor = 'blue'
// }

hearts.forEach(heart => {
  heart.style.backgroundColor = 'blue'
})

const div = document.createElement('div');
// const text = document.createTextNode('Hello world')

div.classList.add('black');
wrapper.append(div)
div.innerHTML = "<h1>Hello World</h1>"
// div.textContent = "hello"

// div.insertAdjacentHTML("beforebegin", "<h2>Hello</h2>");
// div.insertAdjacentHTML("afterbegin", "<h2>Hello</h2>");
// div.insertAdjacentHTML("beforeend", "<h2>Hello</h2>");
div.insertAdjacentHTML("afterend", "<h2>Hello</h2>");


// Современные методы
// append
// wrapper.append(div)  

// prepend
// wrapper.prepend(div)

// before
// oneHeart.before(div)

// after
// oneHeart.after(div)

// remove
// circles[0].remove()

// replaceWith
// oneHeart.replaceWith(circles[0]);

// Устаревшие методы
// wrapper.appendChild(div);
// wrapper.insertBefore(div, hearts[1])
// wrapper.removeChild(hearts[1])
// wrapper.replaceChild(circles[0], hearts[0])
