// ЦИКЛЫ


// Цикл for
/*
for (начальна инструкция; условие; итерационное действие) {
  Блок кода, выполняемый на каждой итеации
}
*/
for (let i=0; i<5; i++) {
  console.log(i)
}

// Цикл for для массивов (не рекомендуется использовать)
const myArray = ['first', 'second', 'third']
for (let i=0; i<myArray.length; i++) {
  console.log(myArray[i])
}
// Лучше использовать forEach
myArray.forEach((element, index) => {
  console.log(element, index)
})


// Цикл while
/*
while (Условие) {
  Блок кода, выполняемый на каждой итерации
}
 */

let i = 0
while (i < 5) {
  console.log(i)
  i++
}

// Цикл do while
/*
do {
  Блок кода, выполняемый на каждой итерации
} while (Условие)
Сначала выполняет блок, а потом проверяет условие
*/

let n = 0
do {
  console.log(n)
  n++
} while (n < 5)


// Цикл for in
/*
for (key in Object) {
  Действия с каждым свойством объекта
  Значение свойства - Object[key]
}
*/

const myObject = {
  x: 10,
  y: true,
  z: 'abc'
}

for (const key in myObject) {
  console.log(key, myObject[key])
}

// forEach для объектов
Object.keys(myObject).forEach(key => {
  console.log(key, myObject[key])
})
Object.values(myObject).forEach(value => {
  console.log(value)
})
console.log(Object.entries(myObject))


// for in для массивов
const newArray = [true, 10, 'abc', null]
for (const key in newArray) {
  console.log(key, newArray[key])
}


// Цикл for of
/*
for (Element of Iterable) {
  Действия с определённым элементом
}
*/

// for of для строк
const myString = 'Hey'
for (const letter of myString) {
  console.log(letter)
}

// for of для массивов
for (const element of newArray) {
  console.log(element)
}

// ЦИКЛ FOR OF НЕ ДЛЯ ОБЪЕКТОВ