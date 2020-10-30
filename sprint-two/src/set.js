/*
Set is an array of unique values

.add -
push to set.storage array

.contains -
indexOf !== -1
returns boolean

.remove -
.splice

*/


var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = []; // fix me

  set._limit = 10;
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  var index = getIndexBelowMaxForKey(item, this._limit); //gives hash number

  this._storage[index] = item;
};

setPrototype.contains = function(item) {
  var index = getIndexBelowMaxForKey(item, this._limit); //gives hash number

  if (this._storage[index] !== undefined) {
    return true;
  }

  return false;
};

setPrototype.remove = function(item) {
  var index = getIndexBelowMaxForKey(item, this._limit); //gives hash number

  delete this._storage[index];
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

var getIndexBelowMaxForKey = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};