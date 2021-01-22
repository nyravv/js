const name = "anNa"
const surname = "Shmatova"

const newName = (name.substr(0, 1) > String.fromCodePoint(90) || name.substr(1) !== name.substr(1).toLowerCase()) ?
  "Имя было преобразовано: " + name.substr(0, 1).toUpperCase() + name.substr(1).toLowerCase()
  : "Имя осталось без изменений: " + name

  console.log(newName)
 
const newSurname = (surname.substr(0, 1) !== surname.substr(0, 1).toUpperCase() || surname.substr(1) !== surname.substr(1).toLowerCase()) ?
"Фамилия была преобразована: "  + surname.substr(0, 1).toUpperCase() + surname.substr(1).toLowerCase()
  : "Фамилия осталась без изменений: " + surname

  console.log(newSurname)