var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  newTree.children = [];

  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var node = new Node(value);
  this.children.push(node);
};

treeMethods.contains = function(target, node) {
  var currentNode = node || this;
  if (currentNode.value === target) {
    return true;
  }

  for (var i = 0; i < currentNode.children.length; i ++) {
    var currentChild = currentNode.children[i];
    if (this.contains(target, currentChild)) {
      return true;
    }
  }

  return false;
};

treeMethods.seeIfExtended = function () {
  var isAnExtension = true;

  for (var method in treeMethods) {
    if (!this[method]) {
      isAnExtension = false;
    }
  }

  return isAnExtension;
};

var Node = function(value) {
  var childNode = {};

  childNode.value = value;
  childNode.children = [];

  _.extend(childNode, treeMethods);

  return childNode;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

//addChild - O(1)
//contains - O(n)