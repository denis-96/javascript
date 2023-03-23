"use strict";

// Number.MAX_SAFE_INTEGER - 9007199254740991
const bigint = 1232435095820394n;

const sameBigInt = BigInt(1244332593408571234233598431223n)

console.log(bigint);
console.log(sameBigInt);

console.log(5n == '5')

let number = 2;

console.log(bigint + BigInt(number))
console.log(Number(bigint) + number)