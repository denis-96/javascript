"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const movieDB = {
    movies: [
      "Логан",
      "Лига справедливости",
      "Ла-ла лэнд",
      "Одержимость",
      "Скотт Пилигрим против...",
    ],
  };

  const promoContent = document.querySelector(".promo__content");
  const moviesList = promoContent.querySelector(".promo__interactive-list");

  // Удаление рекламы
  document.querySelectorAll(".promo__adv img").forEach((adv) => adv.remove());
  // Изменение жанра
  promoContent.querySelector(".promo__genre").textContent = "драма";
  // Замена картинки
  promoContent.querySelector(".promo__bg").style.backgroundImage =
    'url("img/bg.jpg")';

  // Показ списка фильмов
  renderMovies(movieDB.movies, moviesList);

  const newMovieForm = promoContent.querySelector("form.add");
  const movieNameInput = newMovieForm.querySelector(".adding__input");
  const favouriteCheckbox = newMovieForm.querySelector(
    'input[type="checkbox"]'
  );
  // Добавление фильма
  newMovieForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let movieName = movieNameInput.value;
    if (movieName.trim()) {
      if (favouriteCheckbox.checked) {
        alert("Добавляем любимый фильм");
      }

      movieName =
        movieName.charAt(0).toUpperCase() +
        movieName.substring(1, 22).toLowerCase();

      if (movieName.length > 21) {
        movieName += "...";
      }

      movieDB.movies.push(movieName);
      renderMovies(movieDB.movies, moviesList);
    }
    event.target.reset();
  });

  // Удаление фильма
  moviesList.addEventListener("click", (event) => {
    if (event.target.closest(".delete")) {
      const movieEl = event.target.parentElement;
      const index = +movieEl.textContent.split(". ")[0];
      movieDB.movies.splice(index - 1, 1);
      renderMovies(movieDB.movies, moviesList);
    }
  });

  function sortMovieArray(array) {
    array.sort();
  }

  // Рендеринг списка фильмов
  function renderMovies(movies, parent) {
    sortMovieArray(movies);

    parent.innerHTML = "";
    movies.forEach((movie, index) => {
      parent.innerHTML += `
              <li class="promo__interactive-item">
                  ${index + 1}. ${movie} <div class="delete"></div>
              </li>
          `;
    });
  }
});
