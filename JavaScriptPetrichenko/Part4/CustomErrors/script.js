"use strict";

const data = [
  {
    id: "box",
    tag: "div",
  },
  {
    id: "",
    tag: "nav",
  },
  {
    id: "circle",
    tag: "span",
  },
];

try {
  data.forEach((blockObj, i) => {
    const block = document.createElement(blockObj.tag);
    if (!blockObj.id)
      throw new SyntaxError(`В данных под номером ${i + 1} нет id`);

    block.setAttribute("id", blockObj.id);
    document.body.append(block);
  });
} catch (error) {
  // if (error.name === 'SyntaxError') {
  //     console.log(error.message)
  // }
  if (error instanceof SyntaxError) {
    console.log(error.message);
  } else throw error
}

// const error = new Error('my error')
// const error = new SyntaxError('syntax error')
// const error = new TypeError('type error')

// console.log(error.name, error.message, error.stack)
