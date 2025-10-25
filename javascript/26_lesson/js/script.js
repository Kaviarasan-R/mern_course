// ============================================
// BASIC FUNCTION CALLS
// ============================================

function api1(idx) {
  return idx + 1;
}

function callback(idx) {
  const res = api1(idx);
  return res + 1;
}

// console.log(callback(1)) // Output: 3

// ============================================
// CLOSURES - Nested Functions
// ============================================

function callback1(a) {
  return function callback2(b) {
    return function callback3(c) {
      console.log(a, b, c);
      return a + b + c;
    };
  };
}

// console.log(callback1(1)(2)(3)); // Output: 1 2 3, Returns: 6

// Alternative: Store intermediate functions
// const inner = callback1(2)
// const innerMost = inner(3)
// console.log(innerMost(4)) // Output: 2 3 4, Returns: 9

// ============================================
// ASYNC/AWAIT with Fetch API
// ============================================

async function fetchUsers(idx) {
  const res = await fetch(`https://dummyjson.com/users/${idx}`);
  return res.json();
}

// Method 1: Using try/catch
async function testWithTryCatch() {
  try {
    const res = await fetchUsers(1);
    console.log(res.firstName);
  } catch (error) {
    console.error("Error:", error);
  }
}

// Method 2: Using .then() and .catch()
async function testWithThen() {
  await fetchUsers(1)
    .then((res) => {
      if (res.id === 1) console.log(res.firstName);
      else throw new Error("ID is not 1");
    })
    .catch((e) => {
      console.error(e);
    });

  await fetchUsers(2)
    .then((res) => console.log(res.firstName))
    .catch((e) => {
      console.error(e);
    });

  // With setTimeout
  setTimeout(async () => {
    const res = await fetchUsers(3);
    console.log(res.firstName);
  }, 2000);
}

// ============================================
// PROMISE CONSTRUCTOR
// ============================================

function fetchPosts(idx) {
  return new Promise((resolve, reject) => {
    fetch(`https://dummyjson.com/posts/${idx}`)
      .then((res) => res.json())
      .then((res) => {
        if (res.id === idx) {
          resolve(res);
        } else {
          reject(new Error("ID mismatch"));
        }
      })
      .catch((e) => reject(e));
  });
}

// Usage:
// fetchPosts(1).then(post => console.log(post.title))
// fetchPosts(2).then(post => console.log(post.title))

// ============================================
// PROMISE.ALL - Execute Multiple Promises
// ============================================

Promise.all([fetchPosts(1), fetchUsers(1), fetchUsers(2), fetchPosts(2)])
  .then((results) => {
    console.log("All promises resolved successfully!");
    // results is an array: [post1, user1, user2, post2]
  })
  .catch((error) => {
    console.error("One or more promises failed:", error);
  });

// ============================================
// RECURSION
// ============================================

const numbers = [1, 2, 3, 4];

function recursion(arr, idx) {
  if (idx >= arr.length) return;
  recursion(arr, idx + 1);
  console.log(arr[idx]); // Prints in reverse order: 4, 3, 2, 1
}

// recursion(numbers, 0);

// Execution flow:
// recursion([1,2,3,4], 0) => recursion([1,2,3,4], 1) => recursion([1,2,3,4], 2)
//   => recursion([1,2,3,4], 3) => recursion([1,2,3,4], 4) => return
//   => log(4) => log(3) => log(2) => log(1)

// ============================================
// ARRAY MAP METHOD
// ============================================

const originalNumbers = [1, 2, 3, 4, 5];

// Basic map - Transform each element
const doubled = originalNumbers.map((num) => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// Map with index
const withIndex = originalNumbers.map((num, index) => `${index}: ${num}`);
console.log(withIndex); // ['0: 1', '1: 2', '2: 3', '3: 4', '4: 5']

// Map objects
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

const userNames = users.map((user) => user.name);
console.log(userNames); // ['Alice', 'Bob', 'Charlie']

const userInfo = users.map((user) => ({
  id: user.id,
  displayName: `User: ${user.name}`,
}));
console.log(userInfo);
// [
//   { id: 1, displayName: 'User: Alice' },
//   { id: 2, displayName: 'User: Bob' },
//   { id: 3, displayName: 'User: Charlie' }
// ]

// Map with async operations
async function fetchAllUsers() {
  const userIds = [1, 2, 3];
  const promises = userIds.map((id) => fetchUsers(id));
  const allUsers = await Promise.all(promises);
  return allUsers.map((user) => user.firstName);
}

// fetchAllUsers().then(names => console.log(names));

// ============================================
// ARRAY FILTER METHOD
// ============================================

const ages = [12, 18, 25, 30, 15, 40];

// Filter adults (age >= 18)
const adults = ages.filter((age) => age >= 18);
console.log(adults); // [18, 25, 30, 40]

// Filter and map combined
const products = [
  { name: "Laptop", price: 1000, inStock: true },
  { name: "Phone", price: 500, inStock: false },
  { name: "Tablet", price: 300, inStock: true },
];

const availableProducts = products
  .filter((product) => product.inStock)
  .map((product) => product.name);
console.log(availableProducts); // ['Laptop', 'Tablet']

// ============================================
// ARRAY REDUCE METHOD
// ============================================

const numbersForReduce = [1, 2, 3, 4, 5];

// Sum of all numbers
const sum = numbersForReduce.reduce((accumulator, current) => {
  return accumulator + current;
}, 0);
console.log(sum); // 15

// Count occurrences
const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
const fruitCount = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});
console.log(fruitCount); // { apple: 3, banana: 2, orange: 1 }

// ============================================
// ARRAY forEach METHOD
// ============================================

const colors = ["red", "green", "blue"];

// forEach executes function for each element (no return value)
colors.forEach((color, index) => {
  console.log(`${index}: ${color}`);
});

// Output:
// 0: red
// 1: green
// 2: blue

// ============================================
// FUNCTION PROTOTYPE METHOD
// You need .bind(), .call(), or .apply() only
// if your function uses "this" keyword.
// ============================================

const person = {
  name: "Alice",
  greet: function (greeting) {
    console.log(`${greeting}, my name is ${this.name}`);
  },
  introduce: function (city, country) {
    console.log(`I am ${this.name} from ${city}, ${country}`);
  },
};

const person1 = { name: "Abi" };
const person2 = { name: "Bob" };

function introduce(city, country) {
  console.log(`${this.name} from ${city}, ${country}`);
}

// .bind()
// Creates a new function with this bound to the object you provide.
// Does NOT call the function immediately — we call it later.

const greetFunc = person.greet.bind(person); // or use .bind(person1)
greetFunc("Hello"); // Hello, my name is Alice

setTimeout(person.greet.bind(person), 1000, "Hello"); // Automatic bind after 1s

// .call()
// Calls a function immediately with a given this value.
// Additional arguments are passed individually.

person.introduce.call(person, "Paris", "France"); // I am Bob from Paris, France
introduce.call(person1, "Paris", "France");

// .apply()
// Same as .call(), but arguments are passed as an array.

person.introduce.apply(person, ["London", "UK"]); // I am Charlie from London, UK
introduce.apply(person2, ["London", "UK"]);
