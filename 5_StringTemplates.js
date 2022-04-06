//Template Literals use back-ticks (``) rather than the quotes ("") to define a string
let text1 = `Hello World!`;
console.log(text1);

//With template literals, you can use both single and double quotes inside a string
let text2 = `He's often called "Johnny"`;
console.log(text2);


//Template literals allows multiline strings
let text3 =
`The quick
brown fox
jumps over
the lazy dog`;
console.log(text3);

//Template literals allow variables in strings
let firstName = "John";
let lastName = "Doe";
let text4 = `Welcome ${firstName}, ${lastName}!`;
console.log(text4);

