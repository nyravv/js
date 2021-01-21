let password = "123456789"
if (password.length>3 && (password.includes("-") || password.includes("_"))) {
  console.log("Пароль надёжный")
}
 else {
  console.log("Пароль недостаточно надёжный")
 };
//  1234-
//  4321_
//  qaz-xsw
//  _zxd

// _-a
// qaz
// _-3
// 123456789