class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.count = 0;
  }

  enqueue (value) {
    this.storage[this.count] = value;
    this.count ++;
  }

  dequeue () {
    let itemToBeDequeued = this.storage[0];
    delete this.storage[0];
    for (var k in this.storage) {
      this.storage[Number (k) - 1] = this.storage[k];
    }
    this.count --;
    if (this.count < 0) {
      this.count = 0;
    }
    return itemToBeDequeued;
  }

  size () {
    return this.count;
  }


}
