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
  const modalCloseBtns = document.querySelectorAll("[data-close]");

  modalOpenBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      openModal(modal);
    });
  });
  modalCloseBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      closeModal(modal);
    });
  });

  modal.addEventListener("click", (event) => {
    const target = event.target;
    if (target.matches(".modal")) {
      closeModal(target);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.code === "Escape" && modal.classList.contains("show")) {
      closeModal(modal);
    }
  });

  const modalTimerId = setTimeout(() => openModal(modal), 5000);

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
    loading: "Загрузка",
    success: "Спасибо! Мы скоро с вами свяжемся",
    failure: "Что-то пошло не так...",
  };

  forms.forEach((form) => postData(form));

  function postData(form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const statusMessage = document.createElement("div");
      statusMessage.classList.add("status");
      statusMessage.textContent = message.loading;
      form.append(statusMessage);

      const request = new XMLHttpRequest();
      request.open("POST", "server");

      const formData = new FormData(form);

      // Отправка в формате FormData
      // request.send(formData);

      // Отправка в формате json
      request.setRequestHeader("Content-type", "application/json");
      const bodyObject = {};
      formData.forEach(function (value, key) {
        bodyObject[key] = value;
      });
      request.send(JSON.stringify(bodyObject))


      request.addEventListener("load", () => {
        if (request.status === 200) {
          console.log(request.response)
          statusMessage.textContent = message.success;
          form.reset();
          setTimeout(() => {
            statusMessage.remove();
          }, 3000);
        } else {
          statusMessage.textContent = message.failure;
        }
      });
    });
  }
});
