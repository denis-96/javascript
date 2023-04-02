"use strict";

// function* generator() {
//   yield 'S';
//   yield 'c';
//   yield 'r';
//   yield 'i';
//   yield 'p';
//   yield 't';
// }

// const str = generator();
// console.log(str.next());  // done: false
// console.log(str.next());  // done: false
// console.log(str.next());  // done: false
// console.log(str.next());  // done: false
// console.log(str.next());  // done: false
// console.log(str.next());  // done: false
// console.log(str.next());  // done: true

function* range(start, end, step=1) {
  console.log(arguments)
  for (let i = start; i < end; i += step) {
    yield i;
  }
}

for (const i of range(0, 10, 2)) {
  console.log(i);
}

