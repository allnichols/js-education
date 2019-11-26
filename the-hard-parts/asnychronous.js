//which runs first
function printHello() {
  console.log("Hello");
}
setTimeout(printHello, 0);
console.log("Me first!");
// Web browser apis/features -- setTimeout speaks to web browser APIs
// Call Statck must be empty before anything from the Callback Queue will run (Web Browser API)
// Event Loop simply checks if the call stack is empty to then use the Callback Queue

// doesn't work b/c no jquery
function display(data) {
  console.log(data.post);
}
$.get("http://twitter.com/willsen/tweet/1", display);
console.log("Me first!");
