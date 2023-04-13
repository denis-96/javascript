"use strict";

// 1)
// function showThis() {
//   console.log(this); // undefined

//   function inner() {
//     console.log(this); // undefined
//   }
//   inner();
// }
// showThis();

// 2)
// const myObject = {
//   a: 20,
//   b: 15,
//   sum: function() {
//     console.log(this); // myObject

//     function inner() {
//       console.log(this); // undefined
//     }
//     inner();
//   },
// };
// myObject.sum();

// 3)
// function User(name, id) {
//   this.name = name;
//   this.id = id;
//   this.human = true
// }
// const denis = new User('Denis', 16)

// 4)
function sayName(surname, age) {
  console.log(this);
  console.log(this.name + " " + surname + ", " + age);
}

const user = {
  name: "John",
};
// call, apply - позволяют вызвать функцию с нужным контекстом(this)
// Они обе делают одно и тоже, но есть небольшая разница в синтаксисе
sayName.call(user, "Smith", 23);
sayName.apply(user, ["Smith", 23]);

// bind - создаёт и возвращает новую функцию привязанную к нужному контексту вызова
function count(num) {
  return this * num;
}
const double = count.bind(2);  // double - новая функция с привязанным контекстом
console.log(double(3))
console.log(double(12))


// 1) Обычная функция: this = глобальный объект(window в браузере или global в node),
//    но если use strict = undefined
// 2) Контекст (this) у методова объекта - сам объект
// 3) this в конструкторах и классах - это новый экземпляр объекта
// 4) Ручная привязка this: call, apply, bind
