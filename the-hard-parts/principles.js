// Global Execution Context
const num = 3;
function multiplyBy2(inputNumber) {
  const result = inputNumber * 2;
  return result;
}
const output = multiplyBy2(2);
const newOutput = multiplyBy2(10); // calling a funciton creates a new 'execution context'( the local context )
console.log(output);

// JS keeps track of the thread of execution with the call stack.
// Starts in Global 1st then to Local ( whatever is top ). It's called stack for a reason, it stacks.
