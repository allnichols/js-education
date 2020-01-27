// closure is when a function "remembers" the variables 
//around it even when that function is executed elsewhere
//closure is not necessarily a pure function call (output is different )

function makeCounter() {
    var counter = 0;
    return function increment() {
        return ++counter;
    }
}

var c = makeCounter();


function unary(fn) {
    return function one(arg) {
        return fn(arq);
    }
}