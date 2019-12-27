function data() {
  return [1, 2, 3, 4, 5];
}

var [
  first,
  second,
  third,
  ...fourth
] = data() || [];

console.log(fourth);

function datums([
  first,
  second,
  third
] = []) {
  //..
}
