// divide and conquer
const input = [10, 8, 2, 1, 6, 3, 9, 4, 7, 5];

function quickSort(array) {
  if (array.length <= 1) {
    return array;
  }
  var pivot = array[array.length - 1];
  var left = [];
  var right = [];
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}

const output = quickSort(input);
console.log(output);
