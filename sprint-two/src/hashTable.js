// insert:
// 1. get index of hashed key
// 2. create a bucket for our key/value pairs
// 3. create a tuple for our key/value
// 4. push our tuple into our bucket
// 5. push our bucket into our hashed index

// retrieve:
// 1. Get the bucket from our hash index
// 2. Iterate through the bucket
// 3. Check each 0 index of the bucket
// 4. If k === 0 index of bucket, return value
// 5. If k not found, return false;

//remove:
// 1. get the index of the hash key
// 2. get the bucket at the index of the hash key
// 3. loop through the bucket and find if input k is defined
// 4. if k is defined in bucket - remove k from bucket

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit); //gives hash number

  var tuple = [k, v];
  let found = false;

  if (Array.isArray(this._storage[index])) {
    for (var i = 0; i < this._storage[index].length; i++) { //loops through bucket
      var tuples = this._storage[index][i];
      if (tuples[0] === k) {
        tuples[1] = v;
        found = true;
      }
    }

    if (!found) {
      this._storage[index].push(tuple);
    }
  } else {
    var bucket = [];
    bucket.push(tuple);
    this._storage[index] = bucket;
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage[index]; //array

  for (var i = 0; i < bucket.length; i++) {
    var keyToTest = bucket[i][0];
    if (keyToTest === k) {
      return bucket[i][1];
    }
  }

  return undefined;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage[index];
  var indexOfK;

  for (var i = 0; i < bucket.length; i++) {
    var tuples = bucket[i];
    if (tuples[0] === k) {
      indexOfK = tuples.indexOf(k);
    }
  }

  if (indexOfK !== -1) {
    bucket.splice(indexOfK, 1);
  }
};

//remove:
// 1. get the index of the hash key
// 2. get the bucket at the index of the hash key
// 3. loop through the bucket and find if input k is defined
// 4. if k is defined in bucket - remove k from bucket

/*
 * Complexity: What is the time complexity of the above functions?
 */

// insert - O(1)
// retrieve - O(1)
// remove - O(1)

// they should all be O(1) unless we get super unlucky with a hash function that puts them all in the same bucket which would make it O(n)

