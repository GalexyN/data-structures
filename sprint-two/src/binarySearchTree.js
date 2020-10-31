class NodeClass {
  constructor (value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor (value) {
    this.root = new NodeClass(value);
  }

  insert(value) {
    var newNode = new NodeClass(value);

    var searchTree = function(node) {
      if (value < node.value) {
        if (!node.left) {
          node.left = newNode;
        } else {
          searchTree(node.left);
        }
      } else if (value > node.value) {
        if (!node.right) {
          node.right = newNode;
        } else {
          searchTree(node.right);
        }
      } else {
        return null;
      }
    };

    searchTree(this.root);
  }

  contains(value) {
    var currentNode = this.root;

    while (currentNode) {
      if (currentNode.value === value) {
        return true;
      }
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }

    return false;
  }

  depthFirstLog(cb) {
    var traverse = function (node) {
      cb(node.value);

      if (node.left) {
        traverse(node.left);
      }

      if (node.right) {
        traverse(node.right);
      }
    };

    traverse(this.root);
  }
}

/*
What is the time complexity of the above functions?

insert - O(n)

contains - O(log n)

depthFirstLog - O(n)


*/


