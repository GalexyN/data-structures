var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = [];

  set._limit = 10;
  set.valuesInsideSet = 0;

  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  var index = getIndexBelowMaxForKey(item, this._limit);
  if (!this._storage[index]) {
    this.valuesInsideSet++;
  }

  this._storage[index] = item;
};

setPrototype.contains = function(item) {
  var index = getIndexBelowMaxForKey(item, this._limit);

  if (this._storage[index] !== undefined) {
    return true;
  }

  return false;
};

setPrototype.remove = function(item) {
  var index = getIndexBelowMaxForKey(item, this._limit);

  delete this._storage[index];

  if (this.valuesInsideSet > 0) {
    this.valuesInsideSet--;
  }
};

var getIndexBelowMaxForKey = function(str, max) {
  var hash = 0;

  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash;
    hash = Math.abs(hash);
  }

  return hash % max;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

//  -----------------------1st TIME-----------------------
//add - O(n) - while using .contains it loops and we have to check the array for unique values
//contains - O(n)
//remove - O(n))

//  -----------------------2nd TIME-----------------------
// ADD = O(1)
// CONTAINS = O(1)
// REMOVE = O(1)