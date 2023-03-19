"use strict";

const user = {
  name: "Alex",
  surname: "Smith",
  birthday: "20/04/1993",
  showMyPublicData: function () {
    console.log(`${this.name} ${this.surname}`);
  },
};

for (const key in user) {
  console.log(user[key]);
}

const arr = ["a", "b", "c"];
// for (const key in arr) {
//   console.log(arr[key])
// }
for (const value of arr) {
  console.log(value);
}

console.dir(arr);

const str = "string";
// for (const key in str) {
//   console.log(str[key])
// }
for (const value of str) {
  console.log(value);
}

const salaries = {
  john: 500,
  ivan: 1000,
  ann: 5000,
  sayHello() {
    console.log("Hello");
  },
};

salaries[Symbol.iterator] = function () {
  return {
    current: this.john,
    last: this.ann,

    next() {
      if (this.current < this.last) {
        this.current += 500;
        return { done: false, value: this.current };
      } else {
        return { done: true };
      }
    },
  };
};

// for (const res of salaries) {
//   console.log('res :>> ', res);
// }

const iterator = salaries[Symbol.iterator]();
console.log(iterator.next());
