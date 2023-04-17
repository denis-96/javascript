// Свойство prototype

"use strict";

const prop = {
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

// Функция конструктор
function Rect() {
  this.name = "прямоугльник";

  this.draw = () => console.log("Фигура: " + this.name);

  // this.__proto__ = prop;
}

// Rect.prototype = prop;

// prototype -> get __proto__, set __proto__

// Для конструктора - prototype
// Для экземпляра(объекта) - __proto__

Rect.prototype.__proto__ = prop;
Rect.prototype.getName = function () {
  return this.name;
};
Rect.prototype.setName = function (name) {
  this.name = name;
};

console.log(Rect.prototype);

const rect = new Rect();
console.log(rect);
// rect.draw();

// for (const prop in rect) {
//   console.log(prop + ": " + rect[prop]);
// }

const rect2 = new rect.constructor();
console.log(rect2);
