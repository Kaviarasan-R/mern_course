// forEach - Execute a function for each array element
const numbers = [1, 2, 3, 4, 5];
numbers.forEach((num, index) => {
  console.log(`Index ${index}: ${num}`);
});

// map - Create a new array by transforming each element
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// for...in - Loop through object properties (keys)
const person = { name: 'John', age: 30, city: 'NYC' };
for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}

// for...of - Loop through iterable values (arrays, strings, etc.)
const fruits = ['apple', 'banana', 'orange'];
for (let fruit of fruits) {
  console.log(fruit);
}

// Object.entries() - Get array of [key, value] pairs
const user = { username: 'alice', email: 'alice@example.com' };
for (let [key, value] of Object.entries(user)) {
  console.log(`${key}: ${value}`);
}

// slice - Extract a portion of an array (non-mutating)
const arr = [1, 2, 3, 4, 5];
const sliced = arr.slice(2); // Start from index 2
console.log(sliced); // [3, 4, 5]
const sliced2 = arr.slice(1, 4); // From index 1 to 4 (exclusive)
console.log(sliced2); // [2, 3, 4]

// filter - Create new array with elements that pass a test
const ages = [12, 18, 25, 30, 15];
const adults = ages.filter(age => age >= 18);
console.log(adults); // [18, 25, 30]

// indexOf - Find the first index of an element
const colors = ['red', 'blue', 'green', 'blue'];
console.log(colors.indexOf('blue')); // 1
console.log(colors.indexOf('yellow')); // -1 (not found)

// sort - Sort array elements (mutates original array)
const unsorted = [3, 1, 4, 1, 5, 9];
unsorted.sort((a, b) => a - b); // Ascending order
console.log(unsorted); // [1, 1, 3, 4, 5, 9]

const words = ['banana', 'apple', 'cherry'];
words.sort(); // Alphabetical order
console.log(words); // ['apple', 'banana', 'cherry']


// find - Return first element that passes a test
const products = [
  { id: 1, name: 'Laptop' },
  { id: 2, name: 'Phone' },
  { id: 3, name: 'Tablet' }
];
const found = products.find(product => product.id === 2);
console.log(found); // { id: 2, name: 'Phone' }

// flatMap - Map and flatten the result by one level
const arrs = [[1, 2], [3, 4], [5, 6]];
const allWords = arrs.flatMap(arr => arr);
console.log(allWords); // [1,2,3,4,5,6]

// reduce - Reduce array to a single value
const nums = [1, 2, 3, 4, 5];
const sum = nums.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum); // 15

// some - Check if at least one element passes test
const scores = [45, 67, 89, 23];
const hasPassingScore = scores.some(score => score >= 60);
console.log(hasPassingScore); // true

// every - Check if all elements pass test
const allPassing = scores.every(score => score >= 60);
console.log(allPassing); // false

// includes - Check if array contains a value
const pets = ['cat', 'dog', 'bird'];
console.log(pets.includes('dog')); // true
console.log(pets.includes('fish')); // false

// findIndex - Return index of first element that passes test
const items = [5, 12, 8, 130, 44];
const firstLargeIndex = items.findIndex(item => item > 10);
console.log(firstLargeIndex); // 1

// concat - Merge arrays (non-mutating)
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const merged = arr1.concat(arr2);
console.log(merged); // [1, 2, 3, 4, 5, 6]

// join - Join array elements into a string
const letters = ['a', 'b', 'c'];
const joined = letters.join('-');
console.log(joined); // 'a-b-c'

// split - Split string into array
const text = 'hello,world,javascript';
const parts = text.split(',');
console.log(parts); // ['hello', 'world', 'javascript']

// Object.keys() - Get array of object keys
const car = { brand: 'Toyota', model: 'Camry', year: 2020 };
const keys = Object.keys(car);
console.log(keys); // ['brand', 'model', 'year']

// Object.values() - Get array of object values
const values = Object.values(car);
console.log(values); // ['Toyota', 'Camry', 2020]

// spread operator (...) - Expand arrays/objects
const original = [1, 2, 3];
const copy = [...original];
const extended = [...original, 4, 5];
console.log(extended); // [1, 2, 3, 4, 5]

const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };
console.log(obj2); // { a: 1, b: 2, c: 3 }

// reverse - Reverse array order (mutates original)
const digits = [1, 2, 3, 4];
digits.reverse();
console.log(digits); // [4, 3, 2, 1]