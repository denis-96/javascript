"use strict";

const inputRub = document.querySelector("#rub"),
  inputUsd = document.querySelector("#usd");

inputRub.addEventListener("input", () => {
  const request = new XMLHttpRequest();
  // request.open(method, url, async, login, password);
  request.open("GET", "js/current.json");
  request.setRequestHeader("Content-type", "application/js; charset=utf-8");
  request.send();
  // Свойства:
  // status
  // statusText
  // response
  // readyState

  // События
  // readystatechange
  // load
  request.addEventListener("load", () => {
    // Следит за свойством readyState
    if (request.status === 200) {
      const data = JSON.parse(request.response);
      inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
    } else {
      inputUsd.value = 'Something went wrong'
    }
  });
});
