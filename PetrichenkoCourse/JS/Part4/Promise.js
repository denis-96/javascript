"use strict";

// console.log("Запрос данных...");

// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Подготовка данных...");

//     const product = {
//       name: "Tv",
//       price: 2000,
//     };

//     resolve(product);
//   }, 2000);
// })
//   .then(
//     (product) =>
//       new Promise((resolve, reject) => {
//         setTimeout(() => {
//           product.status = "ordered";
//           resolve(product);
//           // reject()
//         }, 2000);
//       })
//   )
//   .then((data) => {
//     data.modify = true;
//     return data;
//   })
//   .then((data) => console.log(data))
//   .catch(() => {
//     console.error("Error");
//   })
//   .finally(() => {
//     console.log("Finally");
//   });

// setTimeout(() => {
//   console.log('Подготовка данных...')

//   const product = {
//     name: 'Tv',
//     price: 2000
//   }

//   setTimeout(() => {
//     product.status = 'ordered'
//     console.log(product)
//   }, 2000);
// }, 2000);

const test = (time) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(), time);
  });
// test(1000).then(() => console.log('1000 ms'))
// test(2000).then(() => console.log('2000 ms'))

// Promise.all ждёт окончания всех переданных промисов
// и потом выполныет нужный код (в then)
Promise.all([test(1000), test(2000)]).then(() => {
  console.log("All");
});

Promise.race([test(1000), test(2000)]).then(() => {
  console.log("First");
});

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: 'POST',
  body: JSON.stringify({name: 'Denis'}),
  headers: {
    'Content-type': 'application/json'
  }
})
  .then((response) => response.json())  // .json(), .text(), .blob()
  .then((json) => console.log(json));