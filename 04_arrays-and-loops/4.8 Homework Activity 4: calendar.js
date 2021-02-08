let date = []
let numberDays = 31 // количество дней в месяце
let dayWeek = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота',]
let start = 5 // день недели по счёту 5-пятница например

for (let i = 1 ; i <= numberDays; i++) {
  date.push(i)

  let j = start % dayWeek.length
  start++

  console.log(i + ' января,' + dayWeek [j])
}