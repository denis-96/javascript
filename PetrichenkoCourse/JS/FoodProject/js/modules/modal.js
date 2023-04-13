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
export default modal; // ES6 import/export
export {closeModal, openModal}