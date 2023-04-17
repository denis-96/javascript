/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';

// Код возьмите из предыдущего домашнего задания

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,

  start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?')
    while (!numberOfFilms) {  // can use isNaN()
      numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?')
    }
    this.count = numberOfFilms
  },

  rememberMyFilms() {
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
      this.movies[movieName] = movieRate
    }
  },

  writeYourGenres() {
    for (let i=1; i<=3; i++) {
      let genre = prompt(`Ваш любимый жанр под номером ${i}`)
      while (!genre) {
        genre = prompt(`Ваш любимый жанр под номером ${i}`)
      }
      this.genres.push(genre)
    }
    this.genres.forEach((genre, i) => console.log(`Любимый жанр #${i+1} - это ${genre}`))
  },

  detectPersonalLevel() {
    if (this.count < 10) {
      alert("Просмотрено довольно мало фильмов")
    } else if (this.count < 30) {
      alert("Вы классический зритель")
    } else if (this.count >= 30) {
      alert("Вы киноман")
    } else {
      alert("Произошла ошибка")
    }
  },

  toggleVisibleMyDB() {
    this.privat = this.privat ? false : true
  },

  showMyDB() {
    if (!personalMovieDB.privat) {
      console.log(personalMovieDB)
    }
  }
}
