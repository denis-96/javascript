// Базовые свойства Object, методы create, getPrototypeOf и setPrototypeOf

"use strict";

// let obj = {}
// let obj = new Object();
// console.log(obj.toString());

// любой объект JavaScript содержит свойство prototype,
// a это свойство содержит набор предопределенных свойств и методов

// console.log(Object.prototype);

// Поведение примитивных типов данных
// В JavaScript строки, числа и булевые переменные:
// String, Number, Boolean
// относятся к примитивным типам и, строго говоря, не являются объектами.

// Если виртуальная машина JavaScript «видит»,
// что к литералу идет обращение как к объекту,
// то она временно создает объект соответствующего типа,
// для этого объекта вызывает указанный метод и,
// затем, временный объект уничтожается.

// console.log("Hello world".toUpperCase()); // HELLO WORLD

String.prototype.len = function () {
  return this.length;
};

// console.log("String".len());

// Методы create, getPrototypeOf и setPrototypeOf

let prop = {
  sp: { x: 0, y: 0 },
  ep: { x: 100, y: 20 },
  get coords() {
    return [this.sp.x, this.sp.y, this.ep.x, this.ep.y];
  },
  set coords(coords) {
    this.sp.x = coords[0];
    this.sp.y = coords[1];
    this.ep.x = coords[2];
    this.ep.y = coords[3];
  },
};

// function Rect() {
//   this.name = "прямоугольник";

//   this.draw = function() {
//             console.log("Рисование фигуры: "+this.name);
//   }

//   this.__proto__ = prop;
// }

let rect = Object.create(prop, {
  name: { value: "прямоугольник", writable: true },
  draw: {
    value: function () {
      console.log("Рисование фигуры: " + this.name);
    },
  },
});

// console.log(rect.coords);
// rect.draw();

// console.log(Object.getPrototypeOf(rect));
// Object.setPrototypeOf(rect, {});
// console.log(Object.getPrototypeOf(rect));

const clone = Object.create(
  Object.getPrototypeOf(rect),
  Object.getOwnPropertyDescriptors(rect)
);

console.log(clone);
