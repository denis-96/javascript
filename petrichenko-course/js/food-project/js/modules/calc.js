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
export default calc; // ES6 import/export
