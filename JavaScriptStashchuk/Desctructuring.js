// ДЕСТРУКТУРИЗАЦИЯ


// Деструктуризация объектов

const userProfile = {
    name: 'Denis',
    commentsQty: 23,
    hasSignedAgreement: false
}

// Cоздание переменным которые будут называться как свойства объекта
// и содержать соотвествующие 

// Объявление новых переменных и присваивание значений на основе значений свойств объекта
const { name, commentsQty } = userProfile
const { hasSignedAgreement } = userProfile


// Деструктуризация массивов

const fruits = ['Apple', 'Banana']

// Объявление новых переменных и присваивание значений на основе элементов массива
// Переменный получают значения элементов в том же порядке в каком они идут в массиве
const [fruitOne, fruitTwo] = fruits

console.log(fruitOne) // Apple
console.log(fruitTwo) // Banana


// Деструктуризация в функциях

const userInfo = ({name, commentsQty}) => {
  if (!commentsQty) {
    return `User ${name} has no comments`
  }
  return `User ${name} has ${commentsQty} comments`
}

console.log(userInfo(userProfile))