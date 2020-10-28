// edges is a property

// {
//   2: [5],
//   5: [2],
//   3: [],
//   berlin: {coordinates: xy, edges: {a: a, b: b, c: c, d}}
// }

// Instantiate a new graph
var Graph = function() {
  this.vertices = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if (this[node]) {
    return true;
  }

  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  //if one of the nodes doesn't exist return false
  if (!this[node]) {
    return false;
  }
  // remove edges before removing node
  //check each keys edges array
  //see keys edges array it contains edge
  //if contains edge - remove edge

  for (var i = 0; i < this[node].length; i++) {
    var edge = this[node][i];
    this.removeEdge(this[node], edge);
  }

  // removes node
  delete this[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  //if one of the nodes doesn't exist return false
  if (!this[fromNode] || !this[toNode]) {
    return false;
  }

  var from = this[fromNode].indexOf(toNode) >= 0;
  var to = this[toNode].indexOf(fromNode) >= 0;

  //if both true return true / else false
  if (from && to) {
    return true;
  }

  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  //if one of the nodes doesn't exist return false
  if (!this[fromNode] || !this[toNode]) {
    return false;
  }

  this[fromNode].push(toNode);
  this[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  //if one of the nodes doesn't exist return false
  if (!this[fromNode] || !this[toNode]) {
    return false;
  }

  var from = this[fromNode].indexOf(toNode);
  var to = this[toNode].indexOf(fromNode);

  this[fromNode].splice(from, 1); // removes toNode from fromNode
  this[toNode].splice(to, 1); // removes fromNode from toNode
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var k in this) {
    cb(Number(k));
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

// addNode - O(1)

// contains - O(1)

// removeNode - O(n) linear because we have to delete all the edges from the edges array

// hasEdge - O(n) linear because we used indexOf which loops through the edges array

// addEdge - O(1)

// removeEdge - O(n)

// forEachNode - O(n)