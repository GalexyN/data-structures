class Node {
  constructor (value) {
    this.value = value;
    this.children = [];
  }

  addChild (value) {
    let node = new Node(value);

    this.children.push(node);
  }
}

class Tree {
  constructor(value) {
    this.root = new Node(value);
  }

  addChild (value) {
    let node = new Node(value);

    this.children.push(node);
  }

  contains (target) {
    let currentNode = this.root;

    let searchTree = node => {
      if (node.value === target) {
        return true;
      }
      if (node.children.length !== 0) {
        for (var i = 0; i < node.children.length; i ++) {
          return searchTree(node.children[i]);
        }
      }
    };

    return searchTree(currentNode) ? true : false;

  }

  traverse (cb) {
    let currentNode = this.root;

    let traverseTree = node => {
      cb(node.value);

      if (node.children.length !== 0) {
        _.each(node.children, traverseTree);
      }
    };

    traverseTree(currentNode);
  }
}