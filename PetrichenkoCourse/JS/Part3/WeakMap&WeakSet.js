"use strict"

// WeakMap
// add, get, has, delete

// let user = {name: 'Denis'}

// let map = new WeakMap()
// map.set(user, 'data')

// user = null

// console.log(user);
// console.log(map)


let cache = new WeakMap()

function cacheUser(user) {
  if (!cache.has(user)) {
    cache.set(user, Date.now())
  }

  return cache.get(user)
}

let lena = {name: "Elena"}
let alex = {name: "Alex"}

cacheUser(lena)
cacheUser(alex)

console.log(cache.has(lena))
console.log(cache.has(alex))

lena = null

console.log(cache.has(lena))
console.log(cache.has(alex))

// WeakSet
// add, has, delete

let messages = [
  {text: 'Hello', from: 'John'},
  {text: 'World', from: 'Alex'},
  {text: '.....', from: 'Max'}
]

let readMessages = new WeakSet()
readMessages.add(messages[0])
readMessages.add(messages[1])

readMessages.add(messages[0])

messages[0] = null
console.log(readMessages.has(messages[0]))
console.log(readMessages.has(messages[2]))




