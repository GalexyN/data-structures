// for tail - make a node
// if list.head === null then tail = the newly added node
//------------------------------------------------------
// remove head - returns removedHead
// capture this.head.value before removing
// re-declare the head this.head.next
//------------------------------------------------------
// contains - returns boolean
// node.value look up
//-----------------------------------------------------


var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

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
  };

  list.removeHead = function() {
    let removedHeadValue = this.head.value;
    this.head = this.head.next;

    return removedHeadValue;
  };

  list.contains = function(target) {
    let current = this.head;

    while (current.next) { // head to 1 before tail
      if (current.value === target) {
        return true;
      }
      current = current.next;
    }

    if (current.value === target) { // catches tail
      return true;
    }

    return false;
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