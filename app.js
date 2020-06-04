const Word = require("../class_Practice/util/Word");

let funkyText = new Word("racecar").rev;

funkyText = funkyText.rev;

console.log(funkyText.isPal);

console.log(funkyText);

const text = funkyText.getWord;

console.log(text);

console.log(funkyText.cap);
