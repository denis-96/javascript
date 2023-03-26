"use strict";

const person = {
  name: "Alex",
  tel: "+37378511035",
  parents: {
    mom: "Natalia",
    dad: "Alexandr",
  },
};

const clone = JSON.parse(JSON.stringify(person));
clone.parents.mom = "Ann";
console.log(person);
console.log(clone);
