"use strict";

// const num = new Number(3)
// console.log(num)

// const func = new Function()
// console.log(func)

function User(name, id) {
  this.name = name;
  this.id = id;
  this.human = true;
  this.hello = function () {
    console.log("Hello " + this.name);
  };
}
// Функция User стала конструктором
// Теперь когда она вызывается с ключевым словом new,
// она создаёт новый объект с указанными свойствами
// Внутри переменной denis будет находится объект
const denis = new User("Denis", 16);
const alex = new User("Alex", 20);

denis.hello();
alex.hello();

console.log("denis :>> ", denis); // User { name: 'Denis', id: 16, human: true }
console.log("alex :>> ", alex); // User { name: 'Alex', id: 20, human: true }

User.prototype.exit = function () {
  console.log(`Пользователь ${this.name} ушёл`);
};

denis.exit();

// Конструкторы нужны для создания новых однотипных объектов

// Это был стандарт ES5
// В стандарте ES^ появились классы (синтаксический сахар)
// Классы - красивая обёртка функционала, написанного выше
// В Javascript изначально не было классов

// То же функционал реализованный через класс:
class User {
  constructor(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
  }
  hello() {
    console.log("Hello " + this.name);
  }
  exit() {
    `Пользователь ${this.name} ушёл`;
  }
}
