// const someRes = getData()
// const node = document.querySelector('.class')

// setInterval(function() {
//   if (node) {
//     node.innerHTML = someRes
//   }
// }, 1000)

function outer() {
  const potentiallyHogeArray = []
  return  function() {
    potentiallyHogeArray.push('some data')
    console.log('Hello');
  }
}

const sayHello = outer()
sayHello()

function createElement() {
  const div = document.createElement('div')
  div.id = 'test'
  document.body.append(div)
}

function deleteElement() {
  document.body.removeChild(document.getElementById('test'))
}

deleteElement()