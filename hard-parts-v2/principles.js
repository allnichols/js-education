// Goes through code line by line and runs / executes each line
//also known as the THREAD OF EXECUTION.

//Saves 'data' like strings and arrays so we can use that data
//later in its MEMORY - can also save functions

const num = 3; // defining a value 3 to the mememory
function multiplyBy2(inputNumber) { // defining a function multiplBy2 to the memory
    const result = inputNumber * 2;       // all the code inside is stored.
    return result;
}
const output = multiplyBy2(num);
// declare a constant output which is unitialized
// then it's called then a execution context is created
// parameter is saved to local memory first (inputNumber) inside the execution context
// result is save to local memory
// then result is returned - locate result then evaluate to the result
// thus removing the function call inside output;
console.log(output);
const newOutput = multiplyBy2(10);
//Same as above
