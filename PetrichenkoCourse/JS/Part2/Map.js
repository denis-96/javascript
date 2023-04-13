"use strict";

const user = {
  name: "Alex",
  surname: "Smith",
  birthday: "20/04/1993",
  showMyPublicData: function () {
    console.log(`${this.name} ${this.surname}`);
  },
};

const userMap = new Map(Object.entries(user))
console.log('userMap :>> ', userMap);

const newUserObj = Object.fromEntries(userMap)
console.log('newUserObj :>> ', newUserObj);

// console.log(typeof Object.keys(user)[0]);

const shops = [{ rice: 500 }, { oil: 200 }, { bread: 50 }];

const budget = [5000, 15000, 25000];

const map = new Map([
  [{ paper: 400 }, 8000],
  [{ apples: 200 }, 2453],
]);

shops.forEach((shop, i) => {
  map.set(shop, budget[i]);
});

// map.set(shops[0], 5000)
//    .set(shops[1], 4000)
//    .set(shops[2], 3500);

// console.log('map :>> ', map);
// console.log(map.get(shops[0]));

// console.log(map.has(shops[0]));

// map.delete(key);
// map.clear();
// map.size;

// map.keys()

// const goods = [];
// for (const shop of map.keys()) {
//   goods.push(Object.keys(shop)[0]);
// }
// console.log(goods);

// map.values()

// for (const price of map.values()) {
//   console.log("price :>> ", price);
// }

// map.entries()

// for (const [shop, quantity] of map.entries()) {
//   console.log(shop, quantity);
// }

// map.forEach()

// map.forEach((value, key, map) => {
//   console.log(key, value)
// })

