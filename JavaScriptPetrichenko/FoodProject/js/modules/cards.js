import { getData } from "../services";

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

  getData("http://localhost:3000/menu")
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
export default cards; // ES6 import/export
