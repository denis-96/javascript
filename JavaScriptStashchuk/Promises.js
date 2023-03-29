// ПРОМИСЫ (обещания)

// Промисы позволяют обрабатывать отложенные во времени события

// Промис - это обещание продоставить результат позже
// Промис может вернуть ошибку если результат предоставить невозможно

// Состояния промиса:
// 1. Ожидание (pending)
// 2. Исполнен (resolved)
// 3. Отклонён (rejected)

// Создание промиса
const myPromise = new Promise((resolve, reject) => {
  /*
   * Выполнение асинхронных действий
   *
   * Внутри этой функции нужно в результате вызвать
   * одну из функции resolve или reject
   */
});

// Получение результата промиса
myPromise
  .then((value) => {
    /*
     * Действия в случае успешного испольнения Промиса
     *
     * Значение value - это значение, переданное в вызове функции resolve
     * внутри Промиса
     */
  })
  .catch((error) => {
    /*
     * Действия в случае отклонения Промиса
     *
     * Значение error - это значение, переданное в вызове функции reject
     * внутри Промиса
     */
  });

// Использование промисов в fetch
// Получение данных с помощью fetch API
fetch("https://jsonplaceholder.typicode.com/todos") // fetch возвращает promise
  .then((response) => response.json()) // response - это большой объект ответа от сервера, метод json также возвращает promise
  .then((json) => console.log(json)) // вызываем метод then для промиса полученого от вызова метода json()
  .catch((error) => console.error(error));

const getData = (url) =>
  new Promise((resolve, reject) =>
    fetch(url)
      .then((response) => response.json())
      .then((json) => resolve(json))
      .catch((error) => reject(error))
  );

getData("https://jsonplaceholder.typicode.com/todos")
  .then((data) => console.log(data))
  .catch((error) => console.log(error.message));
