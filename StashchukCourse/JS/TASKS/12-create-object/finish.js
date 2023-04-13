/** ЗАДАЧА 12 - Создание объекта
 *
 * 1. Создайте объект с тремя свойствами:
 *  - name
 *  - surname
 *  - favoriteNumber
 *
 * 2. Выведите в консоль строку
 * "My name is <name> <surname> and my favorite number is <favoriteNumber>"
 */

const myObj = {
    name: 'Denis',
    surname: 'Bargan',
    favoriteNumber: 7
}

myStr = `My name is ${myObj.name} ${myObj.surname} and my favorite number is ${myObj.favoriteNumber}`
console.log(myStr)