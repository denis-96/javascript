/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const advertisement = document.querySelectorAll('.promo__adv img')
const promoContent = document.querySelector('.promo__content')


advertisement.forEach(adv => adv.remove())

promoContent.querySelector('.promo__genre').textContent = 'драма'

promoContent.querySelector('.promo__bg').style.backgroundImage = 'url("img/bg.jpg")'


const moviesList = promoContent.querySelector('.promo__interactive-list')
moviesList.innerHTML = ''

movieDB.movies.sort()

movieDB.movies.forEach((movie, index) => {
    // const movieEl = document.createElement('li')
    // movieEl.classList.add('promo__interactive-item')
    // movieEl.innerHTML = `${index}. ${movie} <div class="delete"></div>`
    // moviesList.append(movieEl)
    const movieHTML = `
        <li class="promo__interactive-item">
            ${index+1}. ${movie} <div class="delete"></div>
        </li>
    `
    moviesList.innerHTML += movieHTML

})