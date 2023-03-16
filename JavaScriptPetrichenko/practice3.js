/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

// Код возьмите из предыдущего домашнего задания
let numberOfFilms

function start() {
  numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?')
  while (!numberOfFilms) {  // can use isNaN()
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?')
  }
}

start()

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
}

function rememberMyFilms() {
  const querstion1 = 'Один из последних просмотренных фильмов?'
  const querstion2 = 'На сколько оцените его?'
  for (let i=0; i<2; i++) {
    let movieName = prompt(querstion1)
    while (!movieName || movieName.length > 50) {
      movieName = prompt(querstion1)
    }
    let movieRate = prompt(querstion2)
    while (!movieRate) {
      movieRate = prompt(querstion2)
    }
    personalMovieDB.movies[movieName] = movieRate
  }
}

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    alert("Просмотрено довольно мало фильмов")
  } else if (personalMovieDB.count < 30) {
    alert("Вы классический зритель")
  } else if (personalMovieDB.count >= 30) {
    alert("Вы киноман")
  } else {
    alert("Произошла ошибка")
  }
}

function showMyDB() {
  if (!personalMovieDB.privat) {
    console.log(personalMovieDB)
  }
}

function writeYourGenres() {
  for (let i=1; i<4; i++) {
    const genre = prompt(`Ваш любимый жанр под номером ${i}`)
    personalMovieDB.genres.push(genre)
  }
}

writeYourGenres()
showMyDB()