// КЛАССЫ И ПРОТОТИПЫ

// Классы  позволяю создавать прототипы для объектов
// На основании прототипов создаются экземпляры
// Экземпляры могут иметь собственные свойства и методы
// Экземпляры наследуют свойства и методы прототипов

class Comment {
    constructor(text) {
        this.text = text  // Переменная this указывает на экземпляр класса
        this.votesQty = 0
    }
    upvote() {
        this.votesQty += 1
    }
}

// Создание экземпляра  (оператор new вызывает constructor)
const firstComment = new Comment('First comment')
// firstComment наследует все свойства класса Comment, а класс Comment все методы класса Object
// Цепочка прототипов
// firstComment --> Comment --> Object


// Проверка принадлежности классу
firstComment instanceof Comment // true
firstComment instanceof Object //true
firstComment instanceof Array // flase

// Вызов метода
firstComment.upvote()
console.log(firstComment.votesQty) // 1


// Проверка принадлежности свойств экземпляру объекта

firstComment.hasOwnProperty('text') // true
firstComment.hasOwnProperty('votesQty') // true
firstComment.hasOwnProperty('upvote') // false
firstComment.hasOwnProperty('hasOwnProperty') //false

// Создание нескольких экземпляров
const secondComment = new Comment('csdsdwdwd')
const thirdComment = new Comment('csdsdwdwd')


// Cтатичекие методы

// Такие методы доступны как свойство класса
// и не наследуются экземплярами класса
class AnotherComment {
    constructor(text) {
        this.text = text
        this.votesQty = 0
    }

    static mergeComments(first, second) {
        return `${first} ${second}`
    }
}
AnotherComment.mergeComments('First comment', 'Seccond comment')


// Расширение других классов

class NumbersArray extends Array {  // Родительский конструктор вызовется автоматически
    sum() {
        return this.reduce((el, acc) => acc += el, 0)
    }
}
const myArray = new NumbersArray(2, 5, 7)
console.log(myArray)
console.log(myArray.sum())

// Цепочка прототипов
// myArray --> NumbersArray --> Array --> Object
