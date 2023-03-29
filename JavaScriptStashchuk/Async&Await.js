// Асинхронная функция

/*
async function asyncFn() {
  // Всегда возвращает Промис
}
const asyncFn = async () => {
  // Всегда возвращает Промис
}
*/
// Пример 1
const asyncFn = async () => {
  return "Success";
  // Вёрнет Промис, а потом выполнит resolve и результатом будет 'Success'
  // Такой промис будет всегда исполнен
};
asyncFn().then((value) => console.log(value)); // Success

const errorFn = async () => {
  throw new Error("There was an error!");
  // Функция вернёт промис и он будет отклонён
  // (неявно будет вызван reject)
};
errorFn()
  .then((value) => console.log(value))
  .catch((error) => console.log(error.message));

// Await
// Позволяет ожидать результата другого Промиса
// await можно использовать только в асинхронных функциях
/*
const asyncFn = async () => {
  await <Promise>
}
asyncFn()
*/
const timerPromise = () =>
  new Promise((resolve, reject) => setTimeout(() => resolve(), 2000));

const asyncFunc = async () => {
  console.log("Timer starts");
  const startTime = performance.now();
  await timerPromise();
  // Функция дальше не выполняется пока не получен
  // результат Промиса (исполнен / отклонён)
  const endTime = performance.now();
  console.log("Timer ended", (endTime - startTime).toFixed(2));
};
asyncFunc();

// Переход с Промисов на async / await

// Promise:
/*
const getData = (url) =>
  new Promise((resolve, reject) =>
    fetch(url)
      .then((response) => response.json())
      .then((json) => resolve(json))
      .catch((error) => reject(error))
  );
*/
// Async / Await
const getData = async (url) => {
  const response = await fetch(url)  // ожидаем Промис от fetch
  const json = await response.json()  // ожидаем Промис от метода json()
  return json  // возвращаем результат
}
const url = "https://jsonplaceholder.typicode.com/todos"
// getData(url)
//   .then(data => console.log(data))
//   .catch(error => console.log(error.message))

// В бконсоли браузера await можно использовать вне async функции
try {
  const data = await getData(url)
  console.log(data)
} catch (error) {
  console.log(error.message)
}

/*
 * Ключевые принципы в async / await
 * 1. async / await - это синтаксическая надстройка над Промисами
 * 2. await синтаксис возможен только внутри async функций
 * 3. async функция всегда возвращает Promise
 * 4. async функция ожидает результата инструкции await
 *    и не выполняет последующие инструкции
 */
