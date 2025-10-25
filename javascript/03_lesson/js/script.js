// Number Methods


//Numbers

// An integer is a whole number.
const myNumber = 42;

// A number with a decimal point is a float which references the "floating point"
const myFloat = 42.0731;

const myString = "42";

// 0 is always equal to "false" in JavaScript


// Number Methods

// The Number.isInteger() method determines whether the passed value is an integer.
console.log(Number.isInteger(myString));
// Expected output: false

// The Number.parseFloat() method parses an argument and returns a floating point number. If a number cannot be parsed form the argument, it returns NaN. 
console.log(Number.isInteger(myString));
// Expected output: false

//The toFixed() method formats a number according to how many decimal points you provide as the parameter.
console.log(Number.parseFloat(myFloat).toFixed(2));
// Expected output: 42.07

// The Number.parseInt() method parses a string argument and returns an integer
console.log(Number.parseInt(myFloat));
// Expected output: 42

// The toString() method returns a string representing the number.
console.log(myFloat.toString());
// Expected output: 42.0731

// Chaining = Using several methods chained together
console.log(Number.parseFloat("4.237abc").toFixed(2).toString());
// Expected output: 4.24

// NaN is an acronym for Not a Number
console.log(Number("James"));
// Expected output: NaN

// The Number.isNan() method determines whether the passed value is NaN AND its type is Number.
console.log(Number.isNaN("James"));
// Expected output: false

// The global isNan() function determines whether a value is NaN or not.
console.log(isNaN("James"));
// Expected output: true