// 👑 Parent class
class Animal {
  constructor(name) {
    this.name = name;
  }

  eat() {
    console.log(`${this.name} is eating 🍽️`);
  }

  sleep() {
    console.log(`${this.name} is sleeping 😴`);
  }
}

// 🐶 Child class inheriting from Animal
class Dog extends Animal {
  bark() {
    console.log(`${this.name} says: Woof! 🐶`);
  }
}

// 🐱 Another child class inheriting from Animal
class Cat extends Animal {
  meow() {
    console.log(`${this.name} says: Meow! 🐱`);
  }
}

// ✅ Creating objects of child classes
const myDog = new Dog("Buddy");
myDog.eat(); // inherited method
myDog.sleep(); // inherited method
myDog.bark(); // Dog's own method

const myCat = new Cat("Luna");
myCat.eat(); // inherited method
myCat.sleep(); // inherited method
myCat.meow(); // Cat's own method
