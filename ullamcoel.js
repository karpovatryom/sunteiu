class MyClass {
  constructor() {
    this._counts = null; // Initialize _counts to null
  }

  initializeCounts() {
    // Initialize _counts with default values
    this._counts = {
      countA: 0,
      countB: 0,
      countC: 0
    };
  }

  incrementCountA() {
    if (this._counts === null) {
      this.initializeCounts();
    }
    this._counts.countA++;
  }

  getCounts() {
    return this._counts;
  }
}

const myInstance = new MyClass();
console.log(myInstance.getCounts()); // Output: null

myInstance.incrementCountA();
console.log(myInstance.getCounts()); // Output: { countA: 1, countB: 0, countC: 0 }

myInstance.incrementCountA();
console.log(myInstance.getCounts()); // Output: { countA: 2, countB: 0, countC: 0 }
