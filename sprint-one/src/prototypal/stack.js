var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  let stack = Object.create(stackMethods);
  stack.count = 0;
  stack.storage = {};
  return stack;
};

var stackMethods = {
  push: function(value) {
    this.storage[this.count] = value;
    this.count ++;
  },

  pop: function() {
    let itemToBePopped = this.storage[this.count - 1];
    delete this.storage[this.count - 1];
    this.count --;
    if (this.count < 0) {
      this.count = 0;
    }
    return itemToBePopped;
  },

  size: function () {
    return this.count;
  }
};


