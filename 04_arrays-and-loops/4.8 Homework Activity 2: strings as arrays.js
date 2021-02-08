let str = 'Привет, мир!'
// let str = prompt("Введите слово", '')

// 1 способ
// let array = str.split('') // Получаем массив из строки

// let reversed = array.reverse() // Обращаем порядок следования элементов массива

// console.log(reversed.join('')) // Объединяем все элементы массива в строку

// 2 способ
var newStr = "";

for (var i = str.length - 1; i >= 0; i--) {
  newStr += str[i]
}

console.log(newStr)