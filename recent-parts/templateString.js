// Template Strings or Interpoliterals (Interpolated Literals)
var amount = 12.3;
function format(strings, ...values) {
  var str = "";
  for (let i = 0; i < strings.length; i++) {
    if (i > 0) {
      if (typeof values[i - 1] == "number") {
        str += `$${values[i - 1].toFixed(2)}`;
      } else {
        str += values[i - 1];
      }
    }
    str += strings[i];
  }
  return str;
}

//format() is being declared inside the function.
var msg = format`You're total is ${amount}`;
console.log(msg);
