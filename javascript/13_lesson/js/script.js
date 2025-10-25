// var, let, and const in JavaScript Scope

// Use "const" whenever you can
// Use "let" when you know you're going to re-assign a value
// "var" is the least used. Used mainly for legacy code.

// Global Scope = Define a variable, give it a value and it is avaliable everywhere.
var x = 1;
let y = 2;
const z = 3;

// Local Scope
{
  let y = 4;
}

// Function Scope
function myFunc() {
  const z = 5;
}
myFunc();

// If statements, for loops, and switch statements have block scopes.

// A 2nd example of global, function, and block scopes.
console.log(`global: ${x}`);
console.log(`global: ${y}`);
console.log(`global: ${z}`);

function myFunc2() {
  var x = 10;
  const z = 5;
  console.log(`function: ${x}`);
  console.log(`function: ${y}`);
  console.log(`function: ${z}`);

  {
    var x = 11; // var will be applied to function outside the scope (curly brackets). "Function Scoped"
    const z = 6; // const is only applied inside the scope (curly brackets). "Block Scoped"
    console.log(`block: ${x}`);
    console.log(`block: ${y}`);
    console.log(`block: ${z}`);
  }
}

myFunc2();

// Global = Not in a function or block. Not desirable.
// Local = In a function or block. Not global.
// var instantiates function() scoped variables.
// let and const instantiate {block} scoped variables.

// Helpful Tips
// ✅ Avoid using var. Stick with const and let.
// ✅ Use const unless you need to reassign a value.
// ✅ Use let if you know you will reassign a value.

// ============================================
// WHAT HOISTING ACTUALLY IS
// ============================================

/**
 * Hoisting is JavaScript's automatic behavior of moving
 * declarations to the top during compilation.
 *
 * YOU don't hoist - JAVASCRIPT hoists automatically!
 */

console.log(name); // undefined
var name = "John";
greet(); // "Hello!"

function greet() {
  console.log("Hello!");
}

/* JAVASCRIPT INTERPRETS IT AS THIS (Hoisting happens):

// Declarations are "hoisted" (moved to top)
var name;              // Variable declaration moved up
function greet() {     // Function declaration moved up
  console.log("Hello!");
}

// Actual code executes in order
console.log(name);     // undefined (declared but not assigned yet)
name = "John";         // Assignment stays in place
greet();               // "Hello!"
*/

// BAD: Relying on hoisting (confusing!)
console.log(x); // undefined - works but confusing
var x = 5;

// GOOD: Declare before use (clear and readable)
var x = 5;
console.log(x); // 5

// BAD: Calling function before declaration (works but confusing)
sayHello(); // "Hello" - works due to hoisting
function sayHello() {
  console.log("Hello");
}

// GOOD: Declare before calling (clear and readable)
function sayHello() {
  console.log("Hello");
}
sayHello(); // "Hello"

// Understanding hoisting helps you avoid bugs like this:
function example() {
  console.log(message); // What do you expect? "Global" or undefined?
  var message = "Local";
}

var message = "Global";
example(); // Output: undefined (NOT "Global"!)

// Because JavaScript hoists it like this:
// function example() {
//   var message;           // Hoisted to top of function
//   console.log(message);  // undefined
//   message = "Local";
// }

// ============================================
// BEST PRACTICE: Use let/const to avoid hoisting confusion
// ============================================

function betterExample() {
  // console.log(message); // ReferenceError - forces you to declare first!
  let message = "Local";
  console.log(message); // "Local"
}

const globalMessage = "Global";
betterExample();
