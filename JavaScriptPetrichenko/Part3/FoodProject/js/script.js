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
  const deadLine = "2023-03-26T12:00:00";

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
        document.documentElement.scrollHeight -1
      ) {
        openModal(modal)
        window.removeEventListener('scroll', showModalByScroll)
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
  }

  setClock(".timer", deadLine);
});
