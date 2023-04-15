//
// Прототипное наследование, свойство __proto__

"use strict";

let geomFigure = {
  name: "фигура",
  sp: { x: 0, y: 0 }, // start point
  ep: { x: 100, y: 20 }, // end point
  get geomName() {
    return this.name;
  },
  set geomName(name) {
    this.name = name;
  },
  get coords() {
    return [this.sp.x, this.sp.y, this.ep.x, this.ep.y];
  },
  set coords(coords) {
    // this.sp.x = coords[0];
    // this.sp.y = coords[1];
    // this.ep.x = coords[2];
    // this.ep.y = coords[3];
  },
};

const rect = {
  draw() {
    console.log(
      `Прямоугольник: ${this.sp.x}, ${this.spt.y}, ${this.ep.x}, ${this.ep.y}.`
    );
  },
};

rect.__proto__ = geomFigure;

const info = {
  getInfo() {
    console.log(this.name);
  },
  __proto__: rect,
};

// info -[[Prototype]]-> rect -[[Prototype]]-> geomFigure'

// Свойства-аксессоры set и get
// set <имя метода>([параметры]) {…} – свойство для записи значений в объект;
// get <имя метода>([параметры]) {…} – свойство для чтения значений из объекта.

rect.geomName = "Прямоугольник";
// У объекта rect создвайтся новое свойство name
// и у объекта geomFigure оно не изменяется
// Из базового объекта можно только читать свойства (записывать нельзя)
console.log(geomFigure.geomName); // фигура
console.log(rect.geomName); // Прямоугольник

// for (const prop in rect)
//   if (rect.hasOwnProperty(prop)) console.log(prop + ": " + rect[prop]);

rect.coords = [1, 2, 3, 4];

console.log(geomFigure.coords); // [1, 2, 3, 4]
console.log(rect.coords); // [1, 2, 3, 4]
// Новые свойства создаются только тогда,
// когда мы меняем их целиком
