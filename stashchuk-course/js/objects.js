// OBJECTS

const myCity = {
  city: "New York",
  popular: true,
  country: "USA"
}
// city, popular, .. - свойства объекта

// добавление свойств
myCity.iscapital = false

// удаление свойств
delete myCity.popular

// изменение свойств
myCity.city = 'Los Angeles'

// Доступ к значениям свойства
myCity.city
//  или
myCity['city']


// Вложенные свойства
const newCity = {
  city: 'Chisinau',
  info: {
    isCapital: true,
    country: 'Moldova'
  }
}

// Сокращённый формат записи свойств
const name = 'Denis'
const age = 16

// const person = {
//   name: name,
//   age: age,
//   secondName: 'Bargan'
// }
const person = {
  age,
  name,
  secondName: 'Bargan'
}

console.log(person)


// Global objects
// Browser - window
// Node js - global
// General - globalThis

// Методы
const anotherCity = {
  city: "Moscow",             // свойство
  cityGreeting: function() {  // метод
    console.log('Greetings!!')
  },
  anotherGreeting() {         // другой способ записи метода
    console.log('Another greeting!!')
  }
}

anotherCity.cityGreeting()

// JSON - JavaScript Object Notation
/*{
  "userId": 1,
  "id": 1,
  "title": "test title",
  "status": {
    "comleted": false
  }
} */


// Конвертация JSON в объект
// JSON.parse()

const json = '{"userId": 1,"id": 1,"title": "test title","status": {"comleted": false}}'
const myObject = JSON.parse(json)

// Конвертация объекта в JSON
// JSON.stringify()
console.log(JSON.stringify(myObject))


// Мутация объектов
/*
Объект - ссылочный тип.
Это значит, что если есть две переменные которые ссылаются на один и тот же объект,
то при изменении объекта через одну из переменный, он изменится и во второй
Мутация объекта - изменение его свойств
*/

// Как избежать мутации через копии
const newPerson = {
  name: "Denis",
  age: 16
}

// 1
const person2 = Object.assign({}, person)

person2.age = 17

console.log(person2.age)
console.log(newPerson.age)
// Особенность: если у объекта есть вложенные объекты,
// то ссылки на них сохраняются


// 2
const person3 = {...person}  // ... - оператор разделения объекта на свойства

person3.name = 'Maxim'

console.log(person3.name)
console.log(newPerson.name)
// Имеет такую же особенность, как и первый способ


// 3
// Полное копирование, вместе с вложенными объектами

const person4 = JSON.parse(JSON.stringify(newPerson))

person3.age = 20

console.log(person3.age)
console.log(newPerson.age)
