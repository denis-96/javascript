const btns = document.querySelectorAll("button");
const firstBtn = btns[0];

// console.log(firstBtn.classList.length);
// console.log(firstBtn.classList.item(1));
// firstBtn.classList.add('red', 'another-class')
// firstBtn.classList.remove('blue')
// firstBtn.classList.toggle('blue')

// if (firstBtn.classList.contains('red')) {
//   console.log('red')
// }

firstBtn.addEventListener("click", () => {
  // if (!btns[1].classList.contains("red")) {
  //   btns[1].classList.add("red");
  // } else {
  //   btns[1].classList.remove("red");
  // }
  btns[1].classList.toggle('red')
});

// Устаревшее:
// console.log(firstBtn.className)


// Делегирование событий
const wrapper = document.querySelector('.btn-block')

wrapper.addEventListener('click', event => {
  // console.dir(event.target)

  // if (event.target.closest('button')) {
  //   console.log('button')
  // }

  // if (event.target?.tagName === 'BUTTON') {
  //   console.log('button')
  // }

  if (event.target?.matches('button')) {
    console.log('button')
  }
})

const btn = document.createElement('button')
btn.classList.add('red')
wrapper.append(btn)