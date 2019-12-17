//   Insertion sort!
//   Be sure to call your function insertionSort.
//   The idea here is that the beginning of your list is sorted and the everything else is assumed to be an unsorted mess.
//   The outer loop goes over the whole list, the index of which signifies where the "sorted" part of the list is. The inner
//   loop goes over the sorted part of the list and inserts it into the correct position in the array.

var insertionSort = nums => {
  let arr = [];
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] < nums[j]) {
        let spliced = nums.splice(i, 1);
        nums.splice(j, 0, spliced[0]);
        arr.push(nums);
      }
    }
  }
  return arr;
};

var nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];

console.log(insertionSort(nums));
