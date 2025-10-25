// CLASSES & OBJECTS

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hi, I am ${this.name}, ${this.age} years old.`);
  }
}

const person1 = new Person("Alice", 25); // Object (Instance)
person1.greet(); // Hi, I am Alice, 25 years old.

// CONSTRUCTOR

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  info() {
    console.log(`${this.title} by ${this.author}`);
  }
}

const book1 = new Book("1984", "George Orwell");
book1.info(); // 1984 by George Orwell

// STATIC MEMBERS
// Static properties/methods belong to the class itself, not to the instance.

class MathHelper {
  static PI = 3.14159;

  static circleArea(radius) {
    return MathHelper.PI * radius * radius;
  }

  rectangleArea(length, width) {
    return length * width;
  }
}

console.log(MathHelper.PI); // 3.14159
console.log(MathHelper.circleArea(5)); // 78.53975

const helper = new MathHelper();
// helper.circleArea(5); // ❌ Error, static methods not on instance
helper.rectangleArea(10, 5); // 50

// METHOD OVERRIDING

class AnimalOOPS {
  speak() {
    console.log("The animal makes a sound");
  }
}

class DogOOPS extends AnimalOOPS {
  speak() {
    // overrides parent method
    console.log("Woof! 🐶");
  }
}

const dog = new DogOOPS();
dog.speak(); // Woof! 🐶

// METHOD OVERLOADING
// JavaScript doesn’t support traditional overloading, but you can simulate it with default parameters or checking types.

class Calculator {
  add(a, b, c) {
    if (c !== undefined) return a + b + c; // 3 args
    return a + b; // 2 args
  }
}

const calc = new Calculator();
console.log(calc.add(2, 3)); // 5
console.log(calc.add(2, 3, 4)); // 9

// INTERFACES / ABSTRACT CLASSES
// JS doesn’t have built-in interfaces, but you can simulate abstract behavior using base classes or by throwing errors.

class VehicleOOPS {
  // Abstract class simulation
  start() {
    throw new Error("Method 'start()' must be implemented");
  }
}

class CarOOPS extends VehicleOOPS {
  start() {
    console.log("Car engine started 🚗");
  }
}

const car = new CarOOPS();
car.start(); // Car engine started

// TYPESCRIPT EXAMPLE

// interface Drivable {
//   start(): void;
//   stop(): void;
// }

// class Bike implements Drivable {
//   start() { console.log("Bike started 🚲"); }
//   stop() { console.log("Bike stopped"); }
// }
