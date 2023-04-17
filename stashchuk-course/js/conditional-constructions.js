// УСЛОВНЫЕ КОНСТРУКЦИИ

// If - Else If - Else
/*
if (Условие) {
  Блок кода, выполняемый однократно,
  если условие првдиво
} else if (Другое условие) {
  Другой блок кода
} else {
    Блок кода, который будет выполняться,
    если ни одно условие не истинно
}
*/

// Использование if в функциях
const sumPositiveNumbers = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('One of the arguments is not a number')
  }
  if (a <= 0 || b <= 0) {
    throw new Error('Numbers are not positive')
  }
  return a + b
}


// Иснтрукция switch
/*
switch (Выражение) {
  case A:
    Действия если выражение === А
    break
  case B:
    Действия если выражение === B
    break
  default:
    Действия по умолчанию
}
*/

const month = 2

switch (month) {
  case 12:
    console.log('Декабрь')
    break
  case 1:
    console.log('Январь')
    break
  case 2:
    console.log('Февраль')
    break
  default:
    console.log('Это не зимний месяц')
}


// Тернарный оператор

// Условие ? Выражение 1: Выражение 2
// Если условие правдиво, возвращается результат Выражния 1, иначе 2
 
const value = 11
value ? console.log('True') : console.log('False')

const value1 = 11, value2 = 25
value1 && value2
  ? console.log(value1, value2)
  : console.log()

let value3 = 11
console.log(value3 >= 0 ? value3 : -value3)
