var Graph = function() {
  this.vertices = {};
  this.size = 0;
};

Graph.prototype.addNode = function(node) {
  this[node] = [];
  this.size++;
};

Graph.prototype.contains = function(node) {
  if (this[node]) {
    return true;
  }

  return false;
};

Graph.prototype.removeNode = function(node) {
  if (!this[node]) {
    return false;
  }

  for (var i = 0; i < this[node].length; i++) {
    var edge = this[node][i];
    this.removeEdge(this[node], edge);
  }

  delete this[node];

  if (this.size > 0) {
    this.size--;
  }
};

Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (!this[fromNode] || !this[toNode]) {
    return false;
  }

  var from = this[fromNode].indexOf(toNode) >= 0;
  var to = this[toNode].indexOf(fromNode) >= 0;

  if (from && to) {
    return true;
  }

  return false;
};

Graph.prototype.addEdge = function(fromNode, toNode) {
  if (!this[fromNode] || !this[toNode]) {
    return false;
  }

  this[fromNode].push(toNode);
  this[toNode].push(fromNode);
};

Graph.prototype.removeEdge = function(fromNode, toNode) {
  if (!this[fromNode] || !this[toNode]) {
    return false;
  }

  var from = this[fromNode].indexOf(toNode);
  var to = this[toNode].indexOf(fromNode);

  this[fromNode].splice(from, 1);
  this[toNode].splice(to, 1);
};

Graph.prototype.getSize = function() {
  return this.size;
};

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