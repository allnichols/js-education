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
function tuple(x, y) {
    return [X + 1, y - 1];
}

var [a, b] = tuple(...[5, 10])

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