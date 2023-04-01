/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/calc.js":
/*!****************************!*\
  !*** ./js/modules/calc.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function calc() {
  // Calculator

  const result = document.querySelector(".calculating__result span");

  let sex =
      localStorage.getItem("sex") ||
      localStorage.setItem("sex", "female") ||
      "female",
    ratio =
      localStorage.getItem("ratio") ||
      localStorage.setItem("ratio", 1.55) ||
      1.55,
    height,
    weigth,
    age;

  function initLocalSettings(selector, acriveClass) {
    const elements = document.querySelectorAll(selector);
    elements.forEach((elem) => {
      elem.classList.remove(acriveClass);
      if (elem.getAttribute("id") === localStorage.getItem("sex")) {
        elem.classList.add(acriveClass);
      } else if (
        elem.getAttribute("data-ratio") === localStorage.getItem("ratio")
      ) {
        elem.classList.add(acriveClass);
      }
    });
  }

  initLocalSettings("#gender div", "calculating__choose-item_active");
  initLocalSettings(
    ".calculating__choose_big div",
    "calculating__choose-item_active"
  );

  function calcTotal() {
    if (!sex || !height || !weigth || !age || !ratio) {
      result.textContent = "____";
      return;
    }
    if (sex === "female") {
      result.textContent = Math.round(
        (447.6 + 9.2 * weigth + 3.1 * height - 4.3 * age) * ratio
      );
    } else {
      result.textContent = Math.round(
        (88.36 + 13.4 * weigth + 4.8 * height - 5.7 * age) * ratio
      );
    }
  }
  calcTotal();

  function getStaticInformation(parentSelector, activeClass) {
    const parent = document.querySelector(parentSelector);
    const elements = parent.querySelectorAll("div");

    parent.addEventListener("click", (event) => {
      if (event.target.matches(".calculating__choose-item")) {
        if (event.target.getAttribute("data-ratio")) {
          ratio = +event.target.getAttribute("data-ratio");
          localStorage.setItem("ratio", ratio);
        } else {
          sex = event.target.getAttribute("id");
          localStorage.setItem("sex", sex);
        }
        elements.forEach((elem) => {
          elem.classList.remove(activeClass);
        });
        event.target.classList.add(activeClass);
        calcTotal();
      }
    });
  }

  getStaticInformation("#gender", "calculating__choose-item_active");
  getStaticInformation(
    ".calculating__choose_big",
    "calculating__choose-item_active"
  );

  function getDynamicInformation(selector) {
    const input = document.querySelector(selector);
    input.addEventListener("input", () => {
      if (input.value.match(/\D/g)) {
        input.style.border = "1px solid red";
      } else {
        input.style.border = "none";
      }

      switch (input.getAttribute("id")) {
        case "height":
          height = +input.value;
          break;
        case "weight":
          weigth = +input.value;
          break;
        case "age":
          age = +input.value;
          break;
      }
      calcTotal();
    });
  }

  getDynamicInformation("#height");
  getDynamicInformation("#weight");
  getDynamicInformation("#age");
}

// module.exports = calc; // CommonJS
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc); // ES6 import/export


/***/ }),

/***/ "./js/modules/cards.js":
/*!*****************************!*\
  !*** ./js/modules/cards.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services */ "./js/services.js");


function cards() {
  // Menu Cards

  // Реализация через класс
  class MenuCard {
    constructor(
      title,
      description,
      price,
      imageSrc,
      imageAlt,
      parentSelector,
      ...classes
    ) {
      this.title = title;
      this.description = description;
      this.price = +price;
      this.imageSrc = imageSrc;
      this.imageAlt = imageAlt;
      this.classes = classes.length ? classes : ["menu__item"];
      this.parent = document.querySelector(parentSelector);
      this.transfer = 18;
      this.changeToMDL();
    }
    changeToMDL() {
      this.price = this.price * this.transfer;
    }
    render() {
      const cardElement = document.createElement("div");
      cardElement.classList.add(...this.classes);
      cardElement.innerHTML = `
        <img src="${this.imageSrc}" alt="${this.imageAlt}">
        <h3 class="menu__item-subtitle">${this.title}</h3>
        <div class="menu__item-descr">${this.description}</div>
        <div class="menu__item-divider"></div>
        <div class="menu__item-price">
          <div class="menu__item-cost">Цена:</div>
          <div class="menu__item-total"><span>${this.price}</span> леев/день</div>
        </div>
      `;
      this.parent.append(cardElement);
    }
  }
  // Реализация через функцию
  /*
  function createCards(cards, parentSelector) {
    const parentElement = document.querySelector(parentSelector)
    cards.forEach(card => {
      const cardHTML = `
        <div class="menu__item">
          <img src="${card.img}" alt="${card.altimg}">
          <h3 class="menu__item-subtitle">${card.title}</h3>
          <div class="menu__item-descr">${card.description}</div>
          <div class="menu__item-divider"></div>
          <div class="menu__item-price">
            <div class="menu__item-cost">Цена:</div>
            <div class="menu__item-total"><span>${+card.price * 18}</span> леев/день</div>
          </div>
        </div>
      `
      parentElement.insertAdjacentHTML('beforeend', cardHTML)
    })
  }
  */

  (0,_services__WEBPACK_IMPORTED_MODULE_0__.getData)("http://localhost:3000/menu")
    .then((menuCards) => {
      // Класс
      menuCards.forEach((card) => {
        new MenuCard(
          card.title,
          card.description,
          card.price,
          card.img,
          card.altimg,
          ".menu__field .container"
        ).render();
      });
      // Функция
      // createCards(menuCards, ".menu__field .container")
    })
    .catch((error) => console.error(error));
}

// module.exports = cards; // CommonJS
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cards); // ES6 import/export


/***/ }),

/***/ "./js/modules/forms.js":
/*!*****************************!*\
  !*** ./js/modules/forms.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./js/modules/modal.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services */ "./js/services.js");



function forms(formSelector) {
  // Forms
  const forms = document.querySelectorAll(formSelector);

  const message = {
    loading: "icons/spinner.svg",
    success: "Спасибо! Мы скоро с вами свяжемся",
    failure: "Что-то пошло не так...",
  };

  forms.forEach((form) => bindPostData(form));


  function bindPostData(form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      // Способ 1 (не всегда корректно работает при медленном интернете)
      const statusMessage = document.createElement("img");
      statusMessage.src = message.loading;
      statusMessage.style.cssText = "display: block; margin: auto;";
      form.insertAdjacentElement("afterend", statusMessage);

      // Способ 2 (изображение уже есть в вёрстке)
      // form.lastElementChild.style.display = 'block'

      // ===== Отправка данных =====

      const formData = new FormData(form);
      // Optional: FormData to json
      // 1.
      // const formDataJson = {};
      // formData.forEach(function (value, key) {
      //   formDataJson[key] = value;
      // });
      // 2.
      const formDataJson = JSON.stringify(
        Object.fromEntries(formData.entries())
      );

      // 1. Устаревший способ - XMLHttpRequest

      // const request = new XMLHttpRequest();
      // request.open("POST", "server");

      // // Отправка в формате FormData
      // // request.send(formData);

      // // Отправка в формате json
      // request.setRequestHeader("Content-type", "application/json");
      // request.send(JSON.stringify(formDataJson));

      // request.addEventListener("load", () => {
      //   if (request.status === 200) {
      //     console.log(request.response);
      //     form.reset();
      //     showThanksModal(message.success);
      //     // Для способа 1
      //     statusMessage.remove();
      //     // Для способа 2
      //     // form.lastElementChild.style.display = 'none'
      //   } else {
      //     showThanksModal(message.failure);
      //   }
      // });

      // 2. Современный способ - fetch API

      // Отправка в формате FormData
      // fetch('server', {
      //   method: 'POST',
      //   body: formData
      // })
      // Отправка в формате json
      // fetch("server", {
      //   method: "POST",
      //   headers: {
      //     "Content-type": "application/json",
      //   },
      //   body: JSON.stringify(formDataJson),
      // })
      (0,_services__WEBPACK_IMPORTED_MODULE_1__.postData)("http://localhost:3000/requests", formDataJson)
        .then((data) => {
          console.log(data);
          showThanksModal(message.success);
          statusMessage.remove();
        })
        .catch((error) => {
          console.error(error);
          showThanksModal(message.failure);
        })
        .finally(() => form.reset());
    });
  }

  function showThanksModal(message) {
    const modal = document.querySelector(".modal");
    const prevModalDialog = modal.firstElementChild;

    prevModalDialog.classList.add("hide");
    (0,_modal__WEBPACK_IMPORTED_MODULE_0__.openModal)(modal);

    const thanksModal = document.createElement("div");
    thanksModal.classList.add("modal__dialog");
    thanksModal.innerHTML = `
        <div class="modal__content">
          <div data-close class="modal__close">&times;</div>
          <div class="modal__title">${message}</div>
        </div>
      `;
    modal.append(thanksModal);

    setTimeout(() => {
      thanksModal.remove();
      prevModalDialog.classList.remove("hide");
      (0,_modal__WEBPACK_IMPORTED_MODULE_0__.closeModal)(modal);
    }, 3000);
  }
}

// module.exports = forms; // CommonJS
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (forms); // ES6 import/export


/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "closeModal": () => (/* binding */ closeModal),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "openModal": () => (/* binding */ openModal)
/* harmony export */ });
function closeModal(modal) {
  // modal.classList.toggle("show");
  modal.classList.remove("show");
  modal.classList.add("hide");
  document.body.style.overflow = "";
}

function openModal(modal, timerId) {
  // modal.classList.toggle("show");
  modal.classList.remove("hide");
  modal.classList.add("show");
  document.body.style.overflow = "hidden";
  timerId && clearInterval(timerId);
}

function modal(triggerSelector, modalSelector) {
  // Modal Box
  const modal = document.querySelector(modalSelector);
  const modalOpenBtns = document.querySelectorAll(triggerSelector);

  modalOpenBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      openModal(modal, modalTimerId);
    });
  });

  modal.addEventListener("click", (event) => {
    const target = event.target;
    if (target.matches(".modal") || target.getAttribute("data-close") === "") {
      closeModal(modal);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.code === "Escape" && modal.classList.contains("show")) {
      closeModal(modal);
    }
  });

  const modalTimerId = setTimeout(() => openModal(modal, modalTimerId), 50000);

  window.addEventListener("scroll", showModalByScroll);

  function showModalByScroll() {
    if (
      window.pageYOffset + document.documentElement.clientHeight >=
      document.documentElement.scrollHeight - 1
    ) {
      openModal(modal, modalTimerId);
      window.removeEventListener("scroll", showModalByScroll);
    }
  }
}

// module.exports = modal; // CommonJS
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal); // ES6 import/export


/***/ }),

/***/ "./js/modules/slider.js":
/*!******************************!*\
  !*** ./js/modules/slider.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function slider({container, slide, nextArrow, prevArrow, totalCounter, currentCounter, wrapper}) {
  // Slider
  const slider = document.querySelector(container),
    slidesWrapper = document.querySelector(wrapper),
    slidesField = slidesWrapper.firstElementChild,
    slides = slidesField.querySelectorAll(slide),
    prev = document.querySelector(prevArrow),
    next = document.querySelector(nextArrow),
    total = document.querySelector(totalCounter),
    current = document.querySelector(currentCounter),
    width = window.getComputedStyle(slidesWrapper).width;

  let slideIndex = 1;
  let offset = 0;

  total.textContent = slides.length < 10 ? `0${slides.length}` : slides.length;
  current.textContent = slideIndex < 10 ? `0${slideIndex}` : slideIndex;

  slidesField.style.cssText = `
    width: ${100 * slides.length}%;
    display: flex;
    transition: 0.5s all;
  `;
  slidesWrapper.style.overflow = "hidden";
  slides.forEach((slide) => {
    slide.style.width = width;
  });

  slider.style.position = "relative";

  const dots = document.createElement("ol"),
    dotsArray = [];
  dots.classList.add("carousel-indicators");
  slider.append(dots);

  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement("li");
    dot.setAttribute("data-slide-to", i + 1);
    dot.classList.add("dot");
    if (!i) dot.style.opacity = 1;
    dots.append(dot);
    dotsArray.push(dot);
  }

  const updateSlider = () => {
    slidesField.style.transform = `translateX(-${offset}px)`;
    current.textContent = slideIndex < 10 ? `0${slideIndex}` : slideIndex;
    dotsArray.forEach(
      (dot, index) =>
        (dot.style.opacity = slideIndex - 1 === index ? "1" : ".5")
    );
  };

  dots.addEventListener("click", (event) => {
    if (event.target.matches("li")) {
      slideIndex = +event.target.dataset.slideTo;
      offset = parseInt(width) * (slideIndex - 1);
      updateSlider();
    }
  });

  next.addEventListener("click", () => {
    if (offset === parseInt(width) * (slides.length - 1)) {
      offset = 0;
    } else {
      offset += parseInt(width);
    }
    slideIndex = slideIndex === slides.length ? 1 : slideIndex + 1;
    updateSlider();
  });

  prev.addEventListener("click", () => {
    if (!offset) {
      offset = parseInt(width) * (slides.length - 1);
    } else {
      offset -= parseInt(width);
    }
    slideIndex = slideIndex === 1 ? slides.length : slideIndex - 1;
    updateSlider();
  });

  // Вариант 2
  /*
  showSlide(slideIndex);

  function showSlide(index) {
    if (index > slides.length) {
      slideIndex = 1;
    } else if (index < 1) {
      slideIndex = slides.length;
    }
    slides.forEach((slide) => {
      slide.classList.remove("show", "fade");
      slide.classList.add("hide");
    });

    slides[slideIndex - 1].classList.remove("hide");
    slides[slideIndex - 1].classList.add("show", "fade");

    current.textContent = slideIndex < 10 ? `0${slideIndex}` : slideIndex;
  }
  function changeSlide(n) {
    showSlide((slideIndex += n));
  }
  prev.addEventListener("click", () => changeSlide(-1));
  next.addEventListener("click", () => changeSlide(1));
  */
}

// module.exports = slider; // CommonJS
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider); // ES6 import/export


/***/ }),

/***/ "./js/modules/tabs.js":
/*!****************************!*\
  !*** ./js/modules/tabs.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {
  // Tabs
  const tabs = document.querySelectorAll(tabsSelector),
    tabsContent = document.querySelectorAll(tabsContentSelector),
    tabsParent = document.querySelector(tabsParentSelector);

  function hideTabContent() {
    tabsContent.forEach((item) => {
      item.classList.remove("show", "fade");
      item.classList.add("hide");
    });

    tabs.forEach((tab) => {
      tab.classList.remove(activeClass);
    });
  }

  function showTabContent(index = 0) {
    tabsContent[index].classList.remove("hide");
    tabsContent[index].classList.add("show", "fade");
    tabs[index].classList.add(activeClass);
  }

  hideTabContent();
  showTabContent();

  tabsParent.addEventListener("click", (event) => {
    const target = event.target;
    if (target.matches(tabsSelector)) {
      tabs.forEach((tab, index) => {
        if (target === tab) {
          hideTabContent();
          showTabContent(index);
        }
      });
    }
  });
}

// module.exports = tabs; // CommonJS
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs); // ES6 import/export


/***/ }),

/***/ "./js/modules/timer.js":
/*!*****************************!*\
  !*** ./js/modules/timer.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function timer(timerSelector, deadLine) {
  // Timer
  function getTimeRemaining(endTime) {
    const t = Date.parse(endTime) - new Date(),
      days = Math.floor(t / (1000 * 60 * 60 * 24)),
      hours = Math.floor((t / (1000 * 60 * 60)) % 24),
      minutes = Math.floor((t / (1000 * 60)) % 60),
      seconds = Math.floor((t / 1000) % 60);

    return { days, hours, minutes, seconds, total: t };
  }

  function setClock(selector, endTime) {
    const timer = document.querySelector(selector),
      days = timer.querySelector("#days"),
      hours = timer.querySelector("#hours"),
      minutes = timer.querySelector("#minutes"),
      seconds = timer.querySelector("#seconds"),
      timeInterval = setInterval(updateClock, 1000);

    updateClock();

    function getZero(num) {
      if (num >= 0 && num < 10) {
        return `0${num}`;
      }
      return num;
    }

    function updateClock() {
      const t = getTimeRemaining(endTime);

      if (t.total <= 0) {
        clearInterval(timeInterval);
        return;
      }

      days.innerHTML = getZero(t.days);
      hours.innerHTML = getZero(t.hours);
      minutes.innerHTML = getZero(t.minutes);
      seconds.innerHTML = getZero(t.seconds);
    }
  }
  setClock(timerSelector, deadLine);
}

// module.exports = timer; // CommonJS
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer); // ES6 import/export


/***/ }),

/***/ "./js/services.js":
/*!************************!*\
  !*** ./js/services.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getData": () => (/* binding */ getData),
/* harmony export */   "postData": () => (/* binding */ postData)
/* harmony export */ });
const postData = async (url, body) => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: body,
  });
  return await response.json();
};

const getData = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`${response.status}: ${response.statusText}`);
  }
  return await response.json();
};




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/tabs */ "./js/modules/tabs.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modal */ "./js/modules/modal.js");
/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/timer */ "./js/modules/timer.js");
/* harmony import */ var _modules_cards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/cards */ "./js/modules/cards.js");
/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/calc */ "./js/modules/calc.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/forms */ "./js/modules/forms.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/slider */ "./js/modules/slider.js");

// ES6 import/export








window.addEventListener("DOMContentLoaded", (e) => {
  /* CommonJS
  const tabs = require("./modules/tabs"),
    modal = require("./modules/modal"),
    timer = require("./modules/timer"),
    cards = require("./modules/cards"),
    calc = require("./modules/calc"),
    forms = require("./modules/forms"),
    slider = require("./modules/slider");
  */

  (0,_modules_tabs__WEBPACK_IMPORTED_MODULE_0__["default"])(".tabheader__item", ".tabcontent", ".tabheader__items", "tabheader__item_active");
  (0,_modules_modal__WEBPACK_IMPORTED_MODULE_1__["default"])("[data-modal]", ".modal");
  (0,_modules_timer__WEBPACK_IMPORTED_MODULE_2__["default"])(".timer", "2023-04-20T12:00:00");
  (0,_modules_cards__WEBPACK_IMPORTED_MODULE_3__["default"])();
  (0,_modules_calc__WEBPACK_IMPORTED_MODULE_4__["default"])();
  (0,_modules_forms__WEBPACK_IMPORTED_MODULE_5__["default"])("form");
  (0,_modules_slider__WEBPACK_IMPORTED_MODULE_6__["default"])({
    container: ".offer__slider",
    wrapper: ".offer__slider-wrapper",
    slide: ".offer__slide",
    prevArrow: ".offer__slider-prev",
    nextArrow: ".offer__slider-next",
    totalCounter: "#total",
    currentCounter: "#current"
  });
});

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map