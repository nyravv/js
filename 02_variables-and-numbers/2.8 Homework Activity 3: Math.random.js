// let n = 0;
// let m = 100;

// let n = 2;
// let m = 5;

// let n = 100;
// let m = -5;

let n = -3;
let m = -10;

// let n = 2;
// let m = 4;


// кол-во цифр, которые могут быть сгенерированы
let range = Math.abs(m - n);
// округлённоё число от 0 до range
let numberInRange = Math.round(Math.random() * range);
// левая граница возможного числа
let min = Math.min(n, m);
// правая граница возможного числа
let max = Math.max(n,m);
// выбор минимального значения между 1 и вычисленным по модулю остатка от деления на 2
let mathmin = Math.min(1,Math.abs((min+numberInRange+1)%2))

// console.log(numberInRange)

console.log(
    min+numberInRange-1*mathmin
    -2*mathmin*(Math.min(1,numberInRange)-1)
)