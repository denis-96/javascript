/**
 * Prints my name
 */
const myName = () => {
    console.log('Denis')
}
/**
 * Prints my age
 */
const myAge = () => {
    console.log('16')
}

// export default myName  - экспорт одной переменной
// В модуле, который будет импортировать названия переменных могут не совпадать


// Экспорт нескольких переменных
// В модуле, который будет импортировать названия переменных должны совпадать
export {myName, myAge}
