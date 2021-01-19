let a = 13.123456789;
let b = 2.123;
let n = 5;

// let a = 13.890123;
// let b = 2.891564;
// let n = 2;

// let a = 13.890123;
// let b = 2.891564;
// let n = 3;

let a1 = Math.trunc((a - Math.trunc(a)) * Math.pow (10, n));
console.log(a1);
let b1 = Math.trunc((b - Math.trunc(b)) * Math.pow (10, n));
console.log(b1);

console.log(a1 > b1);
console.log(a1 < b1);
console.log(a1 <= b1);
console.log(a1 >= b1);
console.log(a1 === b1);
console.log(a1 != b1);