// Приватные методы и свойства, оператор instanceof

"use strict";

class Users {
  #name;
  #age = 0;
  constructor(name, age) {
    this.#name = name;
    this.#age = age;
  }
  #getName() {
    return this.#name;
  }
}

class Admin extends Users {
  constructor(name, age, login, psw) {
    super(name, age);
    this._login = login;
    this._psw = psw;
  }
}

const user1 = new Admin("Denis", 18, "admin", "root");
const user2 = new Users("Maxim", 18);

// console.log(user1 instanceof Users); // true
// console.log(user2 instanceof Users); // true

console.log(user1.constructor == Users); // false
console.log(user2.constructor == Users); // true
