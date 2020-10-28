var Tree = function(value) {
  var newTree = Object.create(treeMethods); //gives methods to Tree
  newTree.value = value;

  // your code here
  newTree.children = [];

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  //make the node
  var node = new Node(value);
  //push node into parent's children property array
  this.children.push(node);
};

treeMethods.contains = function(target, node) {
  //get starting point
  var currentNode = node || this;
  //check if node matches target
  if (currentNode.value === target) {
    return true;
  }
  //recurse through tree starting from 1 after root
  for (var i = 0; i < currentNode.children.length; i ++) {
    var currentChild = currentNode.children[i]; // gets every child
    if (this.contains(target, currentChild)) {
      return true;
    }
  }

  //returns boolean
  return false;
};

var Node = function(value) {
  var childNode = Object.create(treeMethods);
  childNode.value = value;

  childNode.children = [];

  return childNode;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
