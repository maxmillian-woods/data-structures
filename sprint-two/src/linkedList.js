var LinkedList = function () {
  var list = {};
  list.head = null;
  list.tail = null;
  list.size = 0;
  list.addToTail = function (value) {
    var node = Node(value);
    if (list.tail == null) {
      list.tail = node;
      list.head = node;
    } else {
      current = list.tail;
      current.next = node;
      list.tail = current.next;
    }
    list.size++;
  };

  list.removeHead = function () {
    var prev = list.head.value;
    var current = list.head;
    if (list.size === 2) {
      current = list.tail;
    }
    list.head = current;
    list.size--;
    return prev;
  };

  list.contains = function (target) {};
  return list;
};

var Node = function (value) {
  var node = {};
  node.value = value;
  node.next = null;
  return node;
};
/*
 * Complexity: What is the time complexity of the above functions?
 */