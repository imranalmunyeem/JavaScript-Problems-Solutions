//JavaScript String Length
let txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = txt.length;
console.log(length);


//JavaScript String slice()
let str = "Apple, Banana, Kiwi";
let part = str.slice(7, 13);
console.log(part);


//If a parameter is negative, the position is counted from the end of the string.This example slices out a portion of a string from position -12 to position -6:
let str2 = "Apple, Banana, Kiwi";
let part2 = str2.slice(-12, -6);
console.log(part2);


//Replacing String Content
let text = "Please visit Microsoft!";
let newText = text.replace("Microsoft", "W3Schools");
console.log(newText);


//JavaScript String toUpperCase()
let text1 = "Hello World!";
let text2 = text1.toUpperCase();
console.log(text2);


//JavaScript String toLowerCase()
let text3 = "Hello World!";       // String
let text4 = text3.toLowerCase();  // text2 is text1 converted to lower
console.log(text4);


//JavaScript String concat()
let text5 = "Hello";
let text6 = "World";
let text7 = text5.concat(" ", text6);
text = "Hello" + " " + "World!";
text = "Hello".concat(" ", "World!");

//JavaScript String trim()
let text8 = "      Hello World!      ";
let text9 = text1.trim();
console.log(text9);