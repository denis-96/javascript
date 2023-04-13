const log = function (a, b, ...args) {
  console.log(a, b, args);
};

log("basic", "rest", "operator", "usage");

function calcorDouble(number, basis = 2) {
  console.log(number * basis);
}

calcorDouble(3);
