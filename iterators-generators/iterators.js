var str = "Hello";
var it = str[Symbol.iterator]();

for (let v of it) {
    console.log(v);
}

for (let v of str) {
    console.log(v);
}

var letters = [...str];
console.log(letters);

//data structures without iterators
// objects
var obj = {
    a: 1,
    b: 2,
    c: 3
}
// for (let v of obj) {
//     // console.log(v); -- will shoot a TypeError: obj is not iterable
// }