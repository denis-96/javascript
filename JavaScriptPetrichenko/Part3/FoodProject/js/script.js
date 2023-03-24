"use strict";

window.addEventListener("DOMContentLoaded", (e) => {
  const tabs = document.querySelectorAll(".tabheader__item"),
    tabsContent = document.querySelectorAll(".tabcontent"),
    tabsParent = document.querySelector(".tabheader__items");

  function hideTabContent() {
    tabsContent.forEach((item) => {
      item.classList.remove('show', 'fade')
      item.classList.add('hide')
    });

    tabs.forEach((tab) => {
      tab.classList.remove("tabheader__item_active");
    });
  }

  function showTabContent(index = 0) {
    tabsContent[index].classList.remove('hide')
    tabsContent[index].classList.add('show', 'fade')
    tabs[index].classList.add("tabheader__item_active");
  }

  hideTabContent();
  showTabContent();

  tabsParent.addEventListener('click', (event) => {
    const target = event.target
    if (target.matches('.tabheader__item')) {
      tabs.forEach((tab, index) => {
        if (target === tab) {
          hideTabContent()
          showTabContent(index)
        }
      })       
    }
  })
});
