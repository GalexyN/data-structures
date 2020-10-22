var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  let count = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[count] = value;
    count ++;
  };

  someInstance.dequeue = function() {
    let itemToBeDequeued = storage[0];
    delete storage[0];
    for (var k in storage) {
      storage[Number(k) - 1] = storage[k];
    }
    count --;
    if (count < 0) {
      count = 0;
    }
    return itemToBeDequeued;
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};
