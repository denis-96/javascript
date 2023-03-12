/** ЗАДАЧА 34 - Массив объектов
 *
 * 1. Создайте массив с 3 объектами "cars"
 *
 * 2. Каждый объект должен иметь три свойства
 *  - carBrand (строка)
 *  - price (число)
 *  - isAvailableForSale (логическое значение)
 *
 * 3. Добавьте еще один объект в массив
 *
 * 4. Выведите результирующий массив в консоль
 */

const myArray = [
  {
    carBrand: 'porche',
    price: 253113,
    isAvailableForSale: true
  },
  {
    carBrand: 'ferari',
    price: 25312313,
    isAvailableForSale: false
  },
  {
    carBrand: 'lada',
    price: 2533,
    isAvailableForSale: true
  }
]

myArray.push({
    carBrand: 'lada',
    price: 2533,
    isAvailableForSale: true
})
console.log(myArray)
