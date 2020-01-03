var msg = "Hello World";

//assertions, look ahead
console.log(msg.match(/(l.)/g));
console.log(msg.match(/(l.)$/g));
console.log(msg.match(/(l.)(?=o)/g));
console.log(msg.match(/(l.)(?!o)/g));

// Look behind
console.log(msg.match(/(?<=e)(l.)/g));
console.log(msg.match(/(?<!e)(l.)/g));