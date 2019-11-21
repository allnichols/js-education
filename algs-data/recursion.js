// Recursion is when a function calls itself
var tracker = 0;
var callMe = function() {
  tracker++;
  if (tracker === 3) {
    return "no more loops!";
  }

  return callMe("anytime");
};

console.log(callMe());

// Recipe for recursion
// 1. ID base case(s)
// 2. ID recursive case(s)
// 3. Return when appropriate
// 4. Write procedures for each case that
//    brings tou closer to the base

var callMyself = function() {
  if ("") {
    //base case -
    return;
  } else {
    callMyself();
  }
  return;
};
