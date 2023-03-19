"use strict";

// let id = Symbol('id');

const obj = {
  name: "Test",
  [Symbol("id")]: 1,
  getId() {
    return this[id];
  },
};

// let id2 = Symbol('id')
// console.log(id === id2)

// obj[id] = 1;
console.log(obj[Object.getOwnPropertySymbols(obj)[0]]);

// for (const value in obj) {
//   console.log(value)
// }

const myAwesomeDB = {
  movies: [],
  actors: [],
  [Symbol.for("id")]: 123,
};

console.log(myAwesomeDB[Symbol.for("id")]);
console.log(myAwesomeDB);
