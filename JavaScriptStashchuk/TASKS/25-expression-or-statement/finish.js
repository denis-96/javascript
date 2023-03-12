/** ЗАДАЧА 25 - Выражение или инструкция
 *
 * Определите тип каждой конструкции JavaScript:
 *  - выражение (expression)
 *  - инструкция (statement)
 *  - выражение-инструкция (expression statement)
 */

15 //1

const myObject = { //1
  x: 10,
  y: true,
}

myObject.z = 'abc' //1

delete myObject.x //1

let newVariable //2

newVariable = 30 + 5 //1

console.log(newVariable) //1

if (newVariable > 10) {
  console.log(`${newVariable} больше 10`)
} //2
