"use strict"

let number = 5;
const leftBorderWidth = 1;

number = 10;
console.log(number);

// DATA TYPES
// number, Infinity, NaN
// string
// boolean, null, undefined


// alert('Hello');
// const result = confirm("Are you here?");
// alert(result)
// const answer = +prompt("Question", "18");
// console.log(answer)

// const answers = []
// answers[0] = prompt('Как выше имя?', '')
// answers[1] = prompt('Фамилия?', '')
// answers[2] = prompt('Возраст?', '')

// document.write(answers)

// const category = 'toys'
// console.log(`https://someurl.com/${category}/5`)

// const user = 'Ivan'
// alert(`Hello ${user}`)

console.log('arr' + ' - object');
console.log(4 + +'10'); // Унарный плюс

let incr = 10,
    decr = 10;

// ++incr; Префиксная форма
// decr--; Постфиксная форма
// Постификсная форма сначала возвращает старое значение
// а префиксная сразу новое
console.log(++incr)
console.log(--decr)

// ==  -  сравнение по значению
// === -  сравнение по значению и типу


// Метки
first: for (let i=0; i<3; i++) {
  console.log(`First level: ${i}`)
  for (let j=0; j<3; j++) {
    console.log(`Second level: ${j}`)
    for (let k=0; k<3; k++) {
      if (k=== 2) break first;
      console.log(`Third level: ${k}`)
    }
  }
}

// Свойства строк и чисел
// Строки
// Properties: length - длина
// Methods: toLowerCase(), toUpperCase(), trim() - убирает пробелы по концам строки
const fruit = 'Some fruit'
console.log(fruit.indexOf('fruit'))
console.log(fruit.slice(-5))

// Числа
const num = 12.2;
console.log(Math.round(num))

const num2 = '12.2px'
console.log(parseInt(num2))
console.log(parseFloat(num2))


const arr = [2, 13, 26, 8, 10];
arr.sort(compareNum)
console.log(arr)

function compareNum(a, b) {
  return a - b
}


function copy(obj) {
  let objCopy = {};
  let key;
  for (key in mainObj) {
    objCopy[key] = obj[key]
  }
  return objCopy
}

const oldArray = ['a', 'b', 'c']
const newArray = oldArray.slice()

newArray[1] = 'dsdefersdsad'
console.log(newArray)
console.log(oldArray)


const video = ['youtube', 'rutube'],
      blogs = ['wordpress', 'livejournal'],
      internet = [...video, ...blogs];  // ... - spread operator 

console.log(internet)


function log(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
}

const numbers = [2, 5, 7]
log(...numbers)

const newObj = {
  one:1,
  two:2
}
const newObjCopy = {...newObj}


const soldier = {
  health: 400,
  armor: 100,
  sayHello() {
    console.log('Hello')
  }
} 

// const john = {
//   health:100
// }

// // john.__proto__ = soldier

// Object.setPrototypeOf(john, soldier)

// console.dir(john);
// john.sayHello() 

const john = Object.create(soldier)
john.sayHello()