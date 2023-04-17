// Классы - class, методы и свойства, Class Expression

/*
class <название> {
  constructor() { … }
  method1() { … }
  …
  methodN() { … }
}
*/
/*
class Book {
  constructor(title, author, price) {
    console.log("создание объекта book");
    this.title = title;
    this.author = author;
    this.price = price;
  }
  getTitle() {
    return this.title;
  }
  setPrice(price) {
    this.price = price;
  }
}
Эквивалент
function Book(title, author, price) {
  console.log("создание объекта book");
  this.title = title;
  this.author = author;
  this.price = price;
}
Book.prototype.getTitle = function() {
  return this.title;
};
Book.prototype.setPrice = function(price) {
  this.price = price;
};
*/

// Class expresion
const Book = class {
  // можно и так const Book = class BookClass {...}
  constructor(title, author, price) {
    this.title = title;
    this.author = author;
    this.price = price;
  }
  getTitle() {
    return this.title;
  }
  setPrice(price) {
    this.price = price;
  }
};

// const book = new Book("Муму", "Тургенев", 112);
// console.log(book);

// for (const prop in book) {
//   console.log(prop + ": " + book[prop]);
// }

function createFruit(name, weight) {
  return class {
    constructor() {
      this.name = name;
      this.weight = weight;
    }
    showInfo() {
      console.log(this.name + " " + this.weight);
    }
  };
}

const fruit1 = createFruit("apple", 100); // class 1
const apple = new fruit1();
console.log(apple);

const fruit2 = createFruit("orange", 100); // class 2
console.log(new fruit2());

// Геттеры и сеттеры классов
class Person {
  age = 20;

  constructor(name) {
    this.name = name;
  }
  get personName() {
    return this.name;
  }
  set personName(name) {
    this.name = name;
  }
}

const person = new Person("Denis");
console.log(person.personName);
person.personName = "Alex";
console.log(person.personName);

console.log(person);
