"use strict";

// Событийный цикл

// В javascript есть WebApi, в который помещаются фоновые задачи (async код: event listeners, setTimeout)
// есть очередь вызовов и есть текущий вызов
// Пока в очереди есть задачи, то они будут выполняться,
// если задач нет, то движок бездействует и ждёт их,
// если выполняется какая-то тяжелая задача, то вся очередь ждёт её завершения

// Макро и микро задачи

// Каждая задача, которая попадает в очередь коллбэков - это макро задача
// а очередь - это очередь макро задач

// Микро задачи - это задачи, которые формируются внутри then, catch, finally или при помощи оператора await
// Сразу после каждой макро задачи движок исполняет все задачи из очереди микро задач
// перед выполнением следующеё макро задачи

// console.log(1);

// setTimeout(() => {
//   console.log('timeout');
// }, 4000);

// setTimeout(() => {
//   console.log('timeout-4000');
// }, 4000);

// console.log(2);

// Output: 1, 2, timeout, timeout-4000

// let k = 0;
// function count() {
//   for (let i = 0; i < 1e9; i++) {
//     k++;
//   }
//   alert('done')
// }
// count()

// setTimeout(() => {
//   console.log(1);
// }, 0); // 0, 1, 2, 3, 4 = 4 ms

// console.log(2);
// Output: 2, 1

setTimeout(() => console.log('timeout'))

Promise.resolve()
  .then(() => console.log('promise'))

queueMicrotask(() => console.log('micro'));

Promise.resolve()
  .then(() => console.log('promise-2'))

console.log('code');

// () => {} (micro task)
// micro tasks: then/catch/finally/await
// render
// () => {} (micro task)
// micro tasks: then/catch/finally/await
// render
// () => {} (micro task)