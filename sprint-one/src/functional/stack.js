var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  let count = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[count] = value;
    count ++;
  };

  someInstance.pop = function() {
    let itemToBePopped = storage[count - 1];
    delete storage[count - 1];
    count --;
    if (count < 0) {
      count = 0;
    }
    return itemToBePopped;
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};
