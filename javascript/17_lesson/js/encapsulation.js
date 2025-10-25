class BankAccount {
  // Private property — cannot be accessed directly from outside
  #balance = 0;

  constructor(owner) {
    this.owner = owner;
  }

  // Public method to deposit money
  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(`Deposited: ₹${amount}`);
    } else {
      console.log("Invalid amount");
    }
  }

  // Public method to withdraw money
  withdraw(amount) {
    if (amount <= this.#balance) {
      this.#balance -= amount;
      console.log(`Withdrawn: ₹${amount}`);
    } else {
      console.log("Insufficient balance");
    }
  }

  // Public method to get balance
  getBalance() {
    return `Current Balance: ₹${this.#balance}`;
  }
}

const myAccount = new BankAccount("Kavi");
myAccount.deposit(500);
myAccount.withdraw(200);
console.log(myAccount.getBalance()); // ✅ Current Balance: ₹300

// ❌ Direct access to private variable is not allowed
// console.log(myAccount.#balance);  // ❌ SyntaxError
