function basicRecursion(max, current) {
  if (current > max) return; //base case, when to stop.
  console.log(current);
  basicRecursion(max, current + 1);
}

// basicRecursion(3, 1);

function fibonacci(n) {
  if (n <= 2) {
    // if(n === 0 || n === 1) - be agressive with base cases
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

console.log(fibonacci(20));
