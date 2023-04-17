import { closeModal, openModal } from "./modal";
import { postData } from "../services";

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
      postData("http://localhost:3000/requests", formDataJson)
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
}

// module.exports = forms; // CommonJS
export default forms; // ES6 import/export
