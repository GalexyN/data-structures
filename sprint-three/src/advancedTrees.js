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
      if (node.children) {
        for (var i = 0; i < node.children.length; i ++) {
          return searchTree(node.children[i]);
        }
      }
    };

    if (searchTree(currentNode)) {
      return true;
    }

    return false;

  }

  traverse (cb) {

  }
}