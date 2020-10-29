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
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (!this.contains(item)) {
    this._storage.push(item);
  }
};

setPrototype.contains = function(item) {
  if (this._storage.indexOf(item) !== -1) {
    return true;
  }

  return false;
};

setPrototype.remove = function(item) {
  if (!this.contains(item)) {
    return false;
  }

  var itemIndex = this._storage.indexOf(item);
  this._storage.splice(itemIndex, 1);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

//add - O(n) - while using .contains it loops and we have to check the array for unique values
//contains - O(n)
//remove - O(n))
