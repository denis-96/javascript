// Наследование классов, переопределение методов, функция super

"use strict";

/*
class Prop {
  constructor(width, color) {
    this.width = width;
    this.color = color;
  }
  getColor() {
    return this.color;
  }
}

// JavaScript формирует указатель this
// только после выполнения конструктора базового класса.
// Функция super в конструкторе должна вызываться
// до использования объекта this


class Line extends Prop {
  constructor(sp, ep, width, color) {
    super(width, color);
    this.sp = sp;
    this.ep = ep;
    // this.width = width;
    // this.color = color;
  }
  getColor() {
    const color = super.getColor(); // super - class Prop
    return `[${color}]`;
  }
  showColor() {
    // Uncaught SyntaxError: 'super' keyword unexpected here
    // setTimeout(function () {
    //   console.log(super.getColor());
    // }, 0);
    setTimeout(() => console.log(super.getColor()), 0);
  }

  draw() {
    console.log(
      `Линия: ${this.sp.x}, ${this.sp.y}, ${this.ep.x}, ${this.ep.y}.`
    );
  }
}

const line = new Line({ x: 0, y: 0 }, { x: 10, y: 20 }, 1, "red");
console.log(line);
line.showColor();

// line -> Line.prototype -> Prop.prototype
*/

class Prop {
  constructor(sp, ep, width, color) {
    this.width = width;
    this.color = color;
  }
  getColor() {
    return this.color;
  }
}

function getExtends(type) {
  return class {
    constructor(width, color) {
      this.type = type;
      this.width = width;
      this.color = color;
    }
  };
}

class Line extends getExtends("2D") {
  draw() {
    console.log(
      `Линия: ${this.sp.x}, ${this.sp.y}, ${this.ep.x}, ${this.ep.y}.`
    );
  }
}

const line = new Line(1, "red");

console.log(line);

/*
constructor(...args) {
  super(...args);
}
*/
