"use strict";

const button = document.querySelector("button");
button.addEventListener("click", function () {
  console.log(this);
  this.style.backgroundColor = "red";
});
// Если callback функция написана с помощью функционального выражения(ключевое слово function),
// то this ссылается на элемент, на который повешено событие

// Использование стрелочной функции
// button.addEventListener("click", (event) => {
//   console.log(event.target);
//   event.target.style.backgroundColor = "red";
// });

// !!! У стрелочных функций нет своего контекста вызова
const newObject = {
  num: 5,
  sayNumber: function () {
    console.log(this); // newObject
    const say = () => {
      console.log(this); // newObject
    };
    say();
  },
};
newObject.sayNumber();
// В этом примере у стрелочной функции say контекстом вызова
// является контекст родительской функии sayNumber (newObject)
// Если вместо стролочной функции была бы обычная функция или функционально вырежение,
// то this было бы undefined

// const double = x => x * 2;
// console.log(double(10))
