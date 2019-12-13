var nums = [10, -1, 2, 5, 0, 6, 4, -5];
// merge sort is a recursive function that breaks donw an array to its smallest parts
// then stiches them together in order.
function mergeSort(array) {
  if (array.length <= 1) {
    // base case - if array is one or less than one, then no need to continue
    return array;
  }
  //finding the middle of the array to start dividing
  var middle = Math.floor(array.length / 2);

  //dividing the array;
  var left = array.slice(0, middle);
  var right = array.slice(middle);
  //   console.log(left, right);

  //calling the merge function
  return merge(mergeSort(left), mergeSort(right));
}
//===========================//
function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // concatenate values into the result array
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

var output = mergeSort(nums);

console.log(output);
