var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  let stack = Object.create(Stack.prototype);
  stack.count = 0;
  stack.storage = {};
  return stack;
};

var stackMethods = {
};
Stack.prototype.push = function(value) {
  this.storage[this.count] = value;
  this.count ++;
};

Stack.prototype.pop = function() {
  let itemToBePopped = this.storage[this.count - 1];
  delete this.storage[this.count - 1];
  this.count --;
  if (this.count < 0) {
    this.count = 0;
  }
  return itemToBePopped;
};

Stack.prototype.size = function () {
  return this.count;
};


