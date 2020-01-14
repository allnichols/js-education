// What is a function? FP is all about functions
// must have a 'return' to be considered a function
// functions can only call other functions

//These are procedures not functions
function addNumbers(x = 0, y = 0, z = 0, w = 0) {
    var total = x + y + z + w;
    // console.log(total)
}

function extraNumbers(x = 2, ...args) {
    return addNumbers(x, 40, ...args);
}

extraNumbers();
extraNumbers(3, 8, 11)

// This would be a function
// function tuple(x, y) {
//     return [X + 1, y - 1];
// }

// var [a, b] = tuple(...[5, 10])

//Function: the semantic realtionship b/w input and computed output
function shippingRate(size, weight, speed) {
    return ((size + 1) * weight) + speed;
}

var rate;

rate = shippingRate(12, 4, 5);
rate = shippingRate(8, 4, 6);

//Pure Function
function addTwo(x, y) {
    return x + y;
}
//Impure Function
// function addAnother(x, y) {
//     return addTwo(x, y) + z;
// }

//Reducing Surface Area - this is much easier to read and mentally follow
function addAnother(z) {
    return function addTwo(x, y) {
        // console.log(x + y + z);
    }
}

// addAnother(1)(20, 21);

//Function Purity: is a level of confidence====//

//The shape of the functions is based upon the number of things passed in and then 
//outputted.

//input signature
//unary 
function increment(x) {
    return sum(x, 1)
}

//binary
function sum(x, y) {
    return x + y;
}

// flip & reverse adapter
function flip(fn) {
    return function flipped(arg1, arg2, ...args) {
        return fn(arg2, arg1, ...args);
    }
}

function f(...args) {
    return args;
}

var g = flip(f)
console.log(g(1, 2, 3, 4), "flip & reverse adapter ex.");

// spread adapter 
function spreadArgs(fn) {
    return function spread(args) {
        return fn(...args);
    }
}

function h(x, y, z, w) {
    return x + y + z + w;
}

var a = spreadArgs(h);
console.log(a([1, 2, 3, 4]), "Spread adapter");

// Point-Free ===============//
//Equational Reasoning
function not(fn) { // can be used for binary operations (true or false)
    return function negated(...args) {
        return !fn(...args);
    }
}

function isOdd(v) {
    return v % 2 == 1;
}

var isEven = not(isOdd);

console.log(isEven(5), "point free");



function isOdd(v) {
    return v % 2 == 1;
}







