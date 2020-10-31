class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.count = 0;
  }

  push (value) {
    this.storage[this.count] = value;
    this.count ++;
  }

  pop () {
    let itemToBePopped = this.storage[this.count - 1];
    delete this.storage[this.count - 1];
    this.count --;
    if (this.count < 0) {
      this.count = 0;
    }
    return itemToBePopped;
  }

  size () {
    return this.count;
  }

}