"use strict"

let number = 5;

function logNumber() {
  console.log(number)
}

number = 5;
logNumber()

function createCounter() {
  let counter = 0;

  const myFunction = function() {
    counter += 1;
    return counter;
  }

  return myFunction;
}

const increment = createCounter();
console.log(increment())
console.log(increment())
console.log(increment())


{
  let msg = 'Hello'
}

console.log(msg)  // ReferenceError: msg is not defined

for (let i = 0; i < 9; i++) {
  for (let j = 0; j < 9; j++) {
    let num = 3
  }
  console.log(num)  // ReferenceError: num is not defined
}