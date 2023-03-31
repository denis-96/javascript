"use strict";

// window.localStorage or localStorage

// localStorage.setItem("number", 5);  // добавить ключ - значение

// const item = localStorage.getItem('number') // получить значение по ключу
// console.log(item)

// localStorage.removeItem('number')  // удалить значение по ключу
// localStorage.clear()  // полность очистить хранилище

const form = document.querySelector("form"),
  checkbox = document.querySelector("#checkbox"),
  colorChange = document.querySelector("#color");

if (localStorage.getItem('isChecked') === 'true') {
  checkbox.checked = true
}
if (localStorage.getItem('bg') === 'changed') {
  form.style.backgroundColor = 'red'
} 

checkbox.addEventListener("change", () => {
  localStorage.setItem("isChecked", checkbox.checked)
});

colorChange.addEventListener("click", () => {
  if (localStorage.getItem('bg') === 'changed') {
    localStorage.removeItem('bg')
    form.style.backgroundColor = '#fff'
  } else {
    localStorage.setItem('bg', 'changed');
    form.style.backgroundColor = 'red'
  }
});

const persone = {
  name: 'Alex',
  age: 25
};

const serializedPersone = JSON.stringify(persone)
localStorage.setItem('alex', serializedPersone)

console.log(JSON.parse(localStorage.getItem('alex')))