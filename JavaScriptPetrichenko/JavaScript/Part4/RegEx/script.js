"use strict"
/*
 * 1.
 * new RegExp(pattern, flags)
 * 2.
 * /pattern/flag  
*/

// const ans = prompt('Введите ваше имя');

// const regex = /n/ig;
// Flags:
// i - нечувствительность к регистру
// g - поиск всех вхождений
// m - многострочный режим

// console.log(ans.search(regex))
// console.log(ans.match(regex))

// const password = prompt('Password')
// console.log(password.replace(/./g, '*'))

console.log('12-34-32'.replace(/-/g, ':'))

console.log(/^[a-z]*$/i.test('Denis')) // true

// \d - цифры
// \w - буквы
// \s - пробелы
// \D - не цифры
// \W - не буквы
// \S - не пробелы

// const reg = /\d/g
// console.log(+prompt().match(reg).join(''))

const str = 'My name is R2D2'
console.log(str.match(/\D/ig))

const width = '100px'
console.log(width.replace(/\D/g, ''))

function deleteNotdigits(str) {
  return +str.replace(/\D/g, '')
}

console.log(deleteNotdigits('123egf523g')) // 123523