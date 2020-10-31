var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  list.count = 0;

  list.addToTail = function(value) {
    let node = new Node(value);

    if (this.head === null) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }

    this.tail = node;
    this.count ++;
  };

  list.removeHead = function() {
    let removedHeadValue = this.head.value;
    this.head = this.head.next;

    if (this.count > 0) {
      this.count --;
    }

    return removedHeadValue;
  };

  list.contains = function(target) {
    let current = this.head;

    while (current.next) {
      if (current.value === target) {
        return true;
      }
      current = current.next;
    }

    if (current.value === target) {
      return true;
    }

    return false;
  };

  list.size = function () {
    return this.count;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

// addToTail = O(n);
// removedHead = O(1);
// contains = O(n);