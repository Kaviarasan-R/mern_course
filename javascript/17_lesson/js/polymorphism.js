// Parent class
class AnimalPolymorphism {
  speak() {
    console.log("The animal makes a sound");
  }
}

// Child class Dog
class DogPolymorphism extends AnimalPolymorphism {
  speak() {
    console.log("Woof! 🐶");
  }
}

// Child class Cat
class CatPolymorphism extends AnimalPolymorphism {
  speak() {
    console.log("Meow! 🐱");
  }
}

// Child class Bird
class BirdPolymorphism extends AnimalPolymorphism {
  speak() {
    console.log("Chirp! 🐦");
  }
}

// ✅ Using polymorphism
const animals = [
  new DogPolymorphism(),
  new CatPolymorphism(),
  new BirdPolymorphism(),
];

animals.forEach((animal) => animal.speak());

// Output:
// Woof! 🐶
// Meow! 🐱
// Chirp! 🐦
