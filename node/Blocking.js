// synchronous or blocking :
// line by line execution

// Asynchronous or non-blocking :line by line execution  not guranted

// call backs will fire

const fs = require("fs");
let text = fs.readFile("del.text", "utf-8", (error, data) => {
  console.log(error, data);
});
console.log("this is a message");
