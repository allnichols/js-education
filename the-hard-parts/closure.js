// when a funciton gets called, we create a live store of data for that functions execution context.
// when it's done excecuting, its local memory is deleted( except the return value )
// But what if we want oru functions to hold on to live data/state b/w executions?
// This would let our function definitions have an associated cache/persistent memory

//But it starts with returning us returning a function from another function.
function instructionGenerator() {
  function multiplyBy2(num) {
    return num * 2;
  }
  return multiplyBy2; // returning the actual function (value) storing in the generatedFunc variable in the global context
}
let generatedFunc = instructionGenerator();

// simply add parens on the end and add a parameter b/c
// generatedFunc is referencing the multiplyBy2 function
let result = generatedFunc(24);

console.log(result);
