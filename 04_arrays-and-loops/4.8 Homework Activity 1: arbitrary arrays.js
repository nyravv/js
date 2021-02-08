let n = 0 
let m = 100 
let count = 100

// let n = 2 
// let m = 5 
// let count = 50

// let n = 100 
// let m = -5 
// let count = 70

// let n = -7 
// let m = -10 
// let count = 42

let arr =[]

// левая граница возможного числа
let min = Math.min(n, m);
// правая граница возможного числа
let max = Math.max(n,m);

// 1 способ
// do {
//   arr.push(Math.floor(Math.random() * (max - min + 1)) + min)
// } while (arr.length < count)

// 2 способ
// while (arr.length < count) {
//   arr.push(Math.floor(Math.random() * (max - min + 1)) + min)
// }

// 3 способ
// while (true) {
//   arr.push(Math.floor(Math.random() * (max - min + 1)) + min)
//   if (arr.length >= count) break; 
// }

// 4 способ
for (let i = 0; i < count; i++) {
  arr.push(Math.floor(Math.random() * (max - min + 1)) + min)
}

console.log(arr)