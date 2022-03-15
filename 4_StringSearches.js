//String indexOf() method returns the index of (the position of) the first occurrence of a specified text in a string:
let str1 = "Please locate where 'locate' occurs!";
locateIt = str.indexOf("locate");
console.log(locateIt);

//The lastIndexOf() method returns the index of the last occurrence of a specified text in a string:
let str2 = "Please locate where 'locate' occurs!";
lastLocate = str2.lastIndexOf("locate");
console.log(lastLocate);

//Note:Both indexOf(), and lastIndexOf() return -1 if the text is not found

//The search() method searches a string for a specified value and returns the position of the match
let str3 = "Please locate where 'locate' occurs!";
search = str3.search("locate");
console.log(search);


//The match() method searches a string for a match against a regular expression, and returns the matches, as an Array object
let text1 = "The rain in SPAIN stays mainly in the plain";
match = text1.match(/ain/g);
console.log(match);


//The includes() method returns true if a string contains a specified value
let text2 = "Hello world, welcome to the universe.";
include = text2.includes("world");
console.log(include);


//The startsWith() method returns true if a string begins with a specified value, otherwise false
let text3 = "Hello world, welcome to the universe.";
startWith = text3.startsWith("Hello");
console.log(startWith);


//The endsWith() method returns true if a string ends with a specified value, otherwise false
let text4 = "John Doe";
endWith = text4.endsWith("Doe");
console.log(endWith);