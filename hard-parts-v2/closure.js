// Functions can be returned from other functions in javascript
//Important to understand closure
function createFunction() {
    function multiplyBy2(num) {
        return num * 2;
    }
    return multiplyBy2;
}
const generatedFunc = createFunction();
const result = generatedFunc(3); // 6

console.log(result);

// Nested Function scope
// Calling a function in the same function call as it was defined.
function outer() {
    let name = 'max'
    let counter = 1;
    function incrementCounter() {
        return [name, counter++];
    }
    return incrementCounter; // return a hidden property [[Scope]] which takes the counter variable.
}

const myNewFunction = outer();

console.log(myNewFunction());
console.log(myNewFunction());
console.log(myNewFunction());


