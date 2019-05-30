class Stack {
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
  push(value) {
    this.storage[this.counter] = value;
    this.counter++;
    this.size();
  }
  pop() {
    var size = this.size();
    var test = this.storage[size];
    delete this.storage[size];
    this.counter--;
    this.size();
    return test;
  }
}

var example = new Stack();