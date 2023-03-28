"use strict"

// filter

const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart']
const shortNames = names.filter((name) => name.length < 5)
console.log(shortNames)

// map

const answers = ['IvAn', 'AnnA', 'Hello']
const normalAnswers = answers.map(answer => answer.toLowerCase())
console.log(normalAnswers)