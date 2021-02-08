let roadMines = [true, false, false, true, false, false, false, false, false, true]
 
// 1 способ только для одного повреждения
// let damaged = false
// for (let i=0; i <= roadMines.length-1; i++) {
//  if (roadMines[i]) {
//    if (damaged) {
//     console.log('танк переместился на ' + (i+1) + ', танк уничножен')
//     break
//    }
//    else {
//     console.log('танк переместился на ' + (i+1) + ', танк повреждён')
//     damaged = true
//    }
//  } 
//  else {
//   console.log('танк переместился на ' + (i+1))
//  }
// }


// 2 способ
let count = 2 // на каком шаге должен быть уничтожен танк
let damaged = 0 // количество повреждений изначально
for (let i=0; i <= roadMines.length-1; i++) {
  if (roadMines[i]) {
    if (damaged == count-1) {
     console.log('танк переместился на ' + (i+1) + ', танк уничножен')
     break
    }
    else {
      console.log('танк переместился на ' + (i+1) + ', танк повреждён')
      damaged++
     }
  } 
  else {
   console.log('танк переместился на ' + (i+1))
  }
 }