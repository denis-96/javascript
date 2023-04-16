// Блоки try/catch/finally, оператор throw, проброс исключений

"use strict";

// let res = 0;
/*
try {
  res = 5 / d;
  console.log(res);
} catch (error) {
  console.dir(error);
}
*/
/*
try {
  setTimeout(function () {
    res = 5 / d;
    console.log(res);
  }, 0);
} catch (error) {
  console.log(error);
}
*/
/*
setTimeout(function () {
  try {
    res = 5 / d;
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}, 0);
*/

// error.name, error.message, error.stack

let flSend = false;
try {
  if (!flSend) {
    flSend = true;
    // отправка запроса к серверу
  }
} catch (error) {
  console.log(error);
} finally {
  flSend = false;
}

// Генерация собственных исключений – throw
/*
throw <объект ошибки>

В качестве объекта ошибки может быть и число и строка или еще какой-либо примитив и объект, 
но лучше использовать стандартные классы ошибок, например:
Error – для общих ошибок;
SyntaxError – для синтаксических ошибок;
TypeError – для ошибок типов данных;
ReferenceError – ссылка на несуществующую переменную
*/

function divide(a, b) {
  if (b == 0) {
    throw new Error("Деление на ноль");
  }

  return a / b;
}
// let result = 0;
try {
  result = divide(1, 2);
  console.log(result);
} catch (error) {
  if (error.name === "Error") {
    console.log(error.name);
    console.log(error.message);
  } else {
    throw error;
  }
}
