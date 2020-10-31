var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var tuple = [k, v];
  let found = false;

  if (Array.isArray(this._storage.get(index))) {
    for (var i = 0; i < this._storage.get(index).length; i++) {
      var tuples = this._storage.get(index)[i];
      if (tuples[0] === k) {
        tuples[1] = v;
        found = true;
      }
    }

    if (!found) {
      this._storage.get(index).push(tuple);
    }
  } else {
    var bucket = [];
    bucket.push(tuple);
    this._storage.set(index, bucket);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);

  for (var i = 0; i < bucket.length; i++) {
    var keyToTest = bucket[i][0];
    if (keyToTest === k) {
      return bucket[i][1];
    }
  }

  return undefined;
};

// created new method for new test
HashTable.prototype.contains = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);

  for (var i = 0; i < bucket.length; i++) {
    var valueToTest = bucket[i][1];
    if (valueToTest === v) {
      return true;
    }
  }

  return false;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(index);
  var indexOfK;

  for (var i = 0; i < bucket.length; i++) {
    var tuples = bucket[i];
    if (tuples[0] === k) {
      indexOfK = i;
    }
  }

  bucket.splice(indexOfK, 1);
};


/*
 * Complexity: What is the time complexity of the above functions?
 */

// insert - O(1)
// retrieve - O(1)
// remove - O(1)

// they should all be O(1) unless we get super unlucky with a hash function that puts them all in the same bucket which would make it O(n)

