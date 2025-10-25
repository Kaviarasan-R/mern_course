class Car {
  constructor(brand) {
    this.brand = brand;
  }

  // Public method
  drive() {
    this.#startEngine(); // You don’t see how engine starts
    this.#checkFuel(); // You don’t see how fuel is checked
    console.log(`${this.brand} is now driving 🚗💨`);
  }

  // Private methods - hidden from the outside
  #startEngine() {
    console.log("Engine started ✅");
  }

  #checkFuel() {
    console.log("Fuel level checked ⛽");
  }
}

const myCar = new Car("Tesla");

// ✅ User only needs to call `drive` — no need to know engine details
myCar.drive();

// ❌ Cannot access private methods
// myCar.#startEngine(); // ❌ Error
