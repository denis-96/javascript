// МАССИВЫ

const myArray = [1, 2, 3]
const myArray2 = new Array(1, 2, 3)

myArray.length // длина
myArray2.length

// Доступ к эелементам массива осуществляется с помощью индексов
console.log(myArray[0])
console.log(myArray[1])

myArray.push('abc') // добавление елемента в конец
myArray.unshift('efg') // добавление елемента в начала
myArray[5] = 'something' // добавление элемента по указанному индексу

myArray.pop() // удаление последнего элемента
myArray.shift() // удаление первого элемента

// Выполнения каких-либо действий для каждого элемента массива
myArray.forEach(el => console.log(el + 10))

// Прогон всех елементов массива через функцию и получение нового массива
const newArray = myArray.map(el => el + 10)
console.log(newArray)
