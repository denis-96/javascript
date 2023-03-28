"use strict";

// filter

const names = ["Ivan", "Ann", "Ksenia", "Voldemart"];
const shortNames = names.filter((name) => name.length < 5);
console.log(shortNames);

// map

const answers = ["IvAn", "AnnA", "Hello"];
const normalAnswers = answers.map((answer) => answer.toLowerCase());
console.log(normalAnswers);

// some
// перебирает массив и если хотябы один элемент соответсвует условию
// в колбэк функции, то возвращет true, иначе false

const array = [4, "one", "two"];
console.log(array.some((item) => typeof item === "number")); // true

// every
// перебирает массив и если все элементы соответсвует условию
// в колбэк функции, то возвращет true, иначе false
console.log(array.every((item) => typeof item === "string")); // false

// reduce
// Служит для того чтобы собирать (схлопывать) массив в одно единое значение

const numbers = [4, 5, 3, 7, 8];
const result = numbers.reduce(
  (previousValue, currentValue) => previousValue + currentValue
);
// reduce проходится по всему массиву и передаёт в колбэк функцию
// previousValue и currentValue
// Колбэк функция должна возвращать следующее значение previousValue
// На первой итерации previousValue = 4, currentValue = 5
// На второй: previousValue = 9, currentValue = 3
// На третей: previousValue = 12, currentValue = 7
// И так далее до конча массива
// На выходе будет возвращён previousValue
console.log(result);

// Так же вторым аргументом  в методе reduce можно передать начальное значение
// В таком случае первым значение previousValue будет оно
console.log(
  numbers.reduce((previousValue, currentValue) => {
    console.log(previousValue, currentValue);
    return previousValue + currentValue;
  }, 0)
);

const fruits = ["apple", "pineapple", "cherry", "strawberry"];
console.log(fruits.reduce((prev, curr) => `${prev}, ${curr}`));
console.log(fruits.join(", "));

// Подсчёт количества букв во всех словах из массива
console.log(fruits.reduce((prev, curr) => prev + curr.length, 0));

const object = {
  ivan: "persone",
  ann: "persone",
  dog: "animal",
  cat: "animal",
};
console.log(
  Object.fromEntries(
    Object.entries(object).filter((item) => item[1] === "persone")
  )
);
