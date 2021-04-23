const textful = require("textful");

console.time("timer"); //start time with name = timer

const textFormatter = new textful.Formatter();
console.log(textFormatter.reverse("hi there"));

console.timeEnd("timer"); //end timer and log time difference
