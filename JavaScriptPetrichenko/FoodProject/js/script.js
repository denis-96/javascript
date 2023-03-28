"use strict";

window.addEventListener("DOMContentLoaded", (e) => {
  // Tabs
  const tabs = document.querySelectorAll(".tabheader__item"),
    tabsContent = document.querySelectorAll(".tabcontent"),
    tabsParent = document.querySelector(".tabheader__items");

  function hideTabContent() {
    tabsContent.forEach((item) => {
      item.classList.remove("show", "fade");
      item.classList.add("hide");
    });

    tabs.forEach((tab) => {
      tab.classList.remove("tabheader__item_active");
    });
  }

  function showTabContent(index = 0) {
    tabsContent[index].classList.remove("hide");
    tabsContent[index].classList.add("show", "fade");
    tabs[index].classList.add("tabheader__item_active");
  }

  hideTabContent();
  showTabContent();

  tabsParent.addEventListener("click", (event) => {
    const target = event.target;
    if (target.matches(".tabheader__item")) {
      tabs.forEach((tab, index) => {
        if (target === tab) {
          hideTabContent();
          showTabContent(index);
        }
      });
    }
  });

  // Timer
  const deadLine = "2023-03-27T12:00:00";

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
  setClock(".timer", deadLine);

  // Modal Box
  const modal = document.querySelector(".modal");
  const modalOpenBtns = document.querySelectorAll("[data-modal]");

  modalOpenBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      openModal(modal);
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

  const modalTimerId = setTimeout(() => openModal(modal), 50000);

  window.addEventListener("scroll", showModalByScroll);

  function showModalByScroll() {
    if (
      window.pageYOffset + document.documentElement.clientHeight >=
      document.documentElement.scrollHeight - 1
    ) {
      openModal(modal);
      window.removeEventListener("scroll", showModalByScroll);
    }
  }

  function closeModal(modal) {
    // modal.classList.toggle("show");
    modal.classList.remove("show");
    modal.classList.add("hide");
    document.body.style.overflow = "";
  }

  function openModal(modal) {
    // modal.classList.toggle("show");
    modal.classList.remove("hide");
    modal.classList.add("show");
    document.body.style.overflow = "hidden";
    clearInterval(modalTimerId);
  }

  // Menu Cards
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
  const menuCards = [
    {
      title: 'Меню "Фитнес"',
      description:
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
      price: 9,
      imageSrc: "img/tabs/vegy.jpg",
      imageAlt: "vegy",
    },
    {
      title: "Меню “Премиум”",
      description:
        "В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!",
      price: 14,
      imageSrc: "img/tabs/elite.jpg",
      imageAlt: "elite",
    },
    {
      title: 'Меню "Постное"',
      description:
        "Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков. ",
      price: 21,
      imageSrc: "img/tabs/post.jpg",
      imageAlt: "post",
    },
  ];
  menuCards.forEach(({ title, description, price, imageSrc, imageAlt }) => {
    new MenuCard(
      title,
      description,
      price,
      imageSrc,
      imageAlt,
      ".menu__field .container"
    ).render();
  });

  // Forms
  const forms = document.querySelectorAll("form");

  const message = {
    loading: "icons/spinner.svg",
    success: "Спасибо! Мы скоро с вами свяжемся",
    failure: "Что-то пошло не так...",
  };

  forms.forEach((form) => postData(form));

  function postData(form) {
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
      const formDataJson = {};
      formData.forEach(function (value, key) {
        formDataJson[key] = value;
      });

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
      fetch("server", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(formDataJson),
      })
        // Общая часть
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          showThanksModal(message.success);
          statusMessage.remove();
        })
        .catch((error) => {
          console.error(error)
          showThanksModal(message.failure);
        })
        .finally(() => form.reset());
    });
  }

  function showThanksModal(message) {
    const modal = document.querySelector(".modal");
    const prevModalDialog = modal.firstElementChild;

    prevModalDialog.classList.add("hide");
    openModal(modal);

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
      closeModal(modal);
    }, 3000);
  }
});
