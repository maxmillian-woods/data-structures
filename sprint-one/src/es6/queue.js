class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.counter = 1;
  }
  size() {
    var size = 0;
    for (var key in this.storage) {
      if (this.storage.hasOwnProperty(key)) {
        size++;
      }
    }
    return size;
  }
  enqueue(value) {
    var i = 2;
    var newStorage = {};
    newStorage[1] = value;
    for (var key in this.storage) {
      newStorage[i] = this.storage[key];
      i++;
    }
    this.storage = newStorage;
    this.size();
  }
  dequeue() {
    var size = this.size();
    var test = this.storage[size];
    delete this.storage[size];
    this.counter--;
    return test;
  }
}
var example = new Queue();