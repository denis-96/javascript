"use strict";

// writable
// enumerable
// configurable

const user = {
  name: "Alex",
  surname: "Smith",
  // birthday: "20/04/1993",
  showMyPublicData: function () {
    console.log(`${this.name} ${this.surname}`);
  },
};

Object.defineProperty(user, 'birthday', {value: "20/04/1993", enumerable: true, configurable: true})
console.log(Object.getOwnPropertyDescriptor(user, "birthday"));

// Object.defineProperty(user, 'name', {writable: false})
// Object.defineProperty(user, 'gender', {value: 'male'})
// console.log(Object.getOwnPropertyDescriptor(user, "gender"));

Object.defineProperty(user, 'showMyPublicData', {enumerable: false})

for (const key in user) {
  console.log(key)
}

console.log(Object.getOwnPropertyDescriptor(Math, 'PI'))


Object.defineProperties(user, {
  name: {writable: false},
  surname: {writable: false}
})

console.log(Object.getOwnPropertyDescriptors(user))


// Object.is() - определяет, являются ли два объекта одинаковыми

// Object.keys()
// Object.values()
// Object.entries()