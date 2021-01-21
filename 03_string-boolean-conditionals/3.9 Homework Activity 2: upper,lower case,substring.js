const name = "anNa"
const surname = "Shmatova"

// вот тут для разнообразия попробовала String.fromCodePoint
if (name.substr(0, 1) > String.fromCodePoint(90) || name.substr(1) !== name.substr(1).toLowerCase()) { 
  const newName = name.substr(0, 1).toUpperCase() + name.substr(1).toLowerCase()
  console.log("Имя было преобразовано: " + newName)
}
 else {
  console.log("Имя осталось без изменений: " + name)
 }


if (surname.substr(0, 1) !== surname.substr(0, 1).toUpperCase() || surname.substr(1) !== surname.substr(1).toLowerCase()) {
  const newSurname = surname.substr(0, 1).toUpperCase() + surname.substr(1).toLowerCase()
  console.log("Фамилия была преобразована: " + newSurname)
}
else {
  console.log("Фамилия осталась без изменений: " + surname)
}

