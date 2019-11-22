// Pure functions ( no side effects )
//'Higher order functions' highly valuable tool.
// Paramatizing functions

// function copyArrayAndMultiplyBy2(array) {
//   let output = [];
//   for (let i = 0; i < array.length; i++) {
//     output.push(array[i] * 2);
//   }
//   return output;
// }
// const myArray = [1, 2, 3];
// let result = copyArrayAndMultiplyBy2(myArray);

// to avoid DRY code create another function for the operation ( + , - , * , / )

function copyArrayAndManipulate(array, instructions) {
  let output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(instructions(array[i]));
  }
  return output;
}
const myArray = [1, 2, 3];

function mutliplyBy2(input) {
  return input * 2;
}

let results = copyArrayAndManipulate(myArray, mutliplyBy2);
console.log(results);
