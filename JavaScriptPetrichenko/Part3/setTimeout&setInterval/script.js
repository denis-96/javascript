const btn = document.querySelector(".btn");

function myAnimation() {
  const element = document.querySelector(".box");
  let pos = 0;

  const id = setInterval(frame, 10);

  function frame() {
    if (pos === 300) {
      clearInterval(id);
    } else {
      pos++;
      element.style.top = pos + "px";
      element.style.left = pos + "px";
    }
  }
}

btn.addEventListener("click", myAnimation);

// let intervalId;
// let i = 0;
// btn.addEventListener("click", () => {
//   intervalId = setInterval(logger, 1000);
// });

// function logger() {
//   if (i === 3) {
//     clearInterval(intervalId)
//     return;
//   }

//   console.log("logging");
//   i++;
// }

// let id = setTimeout(function log() {
//   console.log('Hello');
//   id = setTimeout(log, 500)
// }, 500)

// const timerId = setTimeout((text) => {
//   console.log(text)
// }, 2000, 'Some text');

// const timerId = setTimeout(logger, 2000)
// clearTimeout(timerId)
