// Статические методы и свойства классов

"use strict";

class Users {
  static countUsers = 0;

  constructor(name, old) {
    Users.countUsers++;
    this.name = name;
    this.old = old;
  }

  getName() {
    return this.name;
  }

  static compareAge(user1, user2) {
    console.log(this === Users);
    return user1.old === user2.old;
  }
}

// Эвкивалент
// Users.compareAge = function (user1, user2) {
//   return user1.old === user2.old;
// };

class Admin extends Users {
  constructor(name, old, login, psw) {
    super(name, old);
    this.login = login;
    this.psw = psw;
  }

  static createAdmin(name, old) {
    // Внутри статических методова this указывает на тот класс,
    // из которого этот статический метод был вызван
    console.log(this === Admin);
    return new this(name, old, "admin", "root");
  }
}

const user1 = new Users("Михаил", 19);
const user2 = new Admin("Фёдор", 19, "aaa", "0123");

const user3 = Admin.createAdmin("Сергей", 33);

// console.log(Admin.compareAge(user1, user2));
console.log(Users.countUsers);
