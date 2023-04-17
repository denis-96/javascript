"use strict";

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  calcArea() {
    return this.height * this.width;
  }
}
// const square = new Rectangle(20, 20);
// const long = new Rectangle(10, 100);

// console.log(square.calcArea());
// console.log(long.calcArea());

class ColoredRectangleWithText extends Rectangle {
  constructor(height, width, text, bgColor) {
    super(height, width); // сначала всегда super 
    // super вызывает конструктор родителя
    this.text = text;
    this.bgColor = bgColor;
  }
  showMyProps() {
    console.log(`Text: ${this.text}, color: ${this.bgColor}`)
  }
}

const div = new ColoredRectangleWithText(25, 10, 'Hello World', 'red')
div.showMyProps()
console.log(div.calcArea())


