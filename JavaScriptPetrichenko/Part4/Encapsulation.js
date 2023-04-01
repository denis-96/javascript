'use strict';

// function User(name, age) {
//   this.name = name;  // свойство объекта
//   let userAge = age  // не свойство объекта

//   this.say = function() {
//     console.log(`Пользователь ${this.name} ${userAge}`)
//   }

//   this.getAge = function() {
//     return userAge;
//   }

//   this.setAge = function(age) {
//     if (typeof age === 'number' && age > 0 && age < 110) {
//       userAge = age
//     } else {
//       console.log('Недопустимое значение')
//     }
//   }
// }

// const ivan = new User('Ivan', 27)
// console.log(ivan.name)
// // console.log(ivan.userAge)  // undefined
// console.log(ivan.getAge())

// ivan.setAge(30)
// ivan.setAge(300)
// ivan.name = 'Alex'

// ivan.say()

class User {
  constructor(name, age) {
    this.name = name
    this._age = age
  }
  #surname = 'Petrychenko'

  say = () => {
    console.log(`Пользователь ${this.name} ${this._age} ${this.#surname}`)
  }

  get age() {
    return this._age
  }

  set age(age) {
    if (typeof age === 'number' && age > 0 && age < 110) {
      this._age = age
    } else {
      console.log('Недопустимое значение')
    }
  } 
}

const ivan = new User('Ivan', 27)
console.log(ivan.surname) // undefined
ivan.say()

// class User {
//     constructor(name, age) {
//         this.name = name;
//         this._age = age;
//     }

//     #surname = 'Petrychenko';

//     say = () => {
//         console.log(`Имя пользователя: ${this.name} ${this.#surname}, возраст ${this._age}`);
//     }

//     get age() {
//         return this._age;
//     }

//     set age(age) {
//         if (typeof age === 'number' && age > 0 && age < 110) {
//             this._age = age;
//         } else {
//             console.log('Недопустимое значение!');
//         }
//     }
// }

// const ivan = new User('Ivan', 27);