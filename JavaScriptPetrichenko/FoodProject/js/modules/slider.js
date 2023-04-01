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
export default slider; // ES6 import/export
