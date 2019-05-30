var Stack = function () {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.counter = 1;
};
Stack.prototype.size = function () {
  var size = 0;
  for (key in this.storage) {
    if (this.storage.hasOwnProperty(key)) {
      size++;
    }
  }
  return size;
};
Stack.prototype.push = function (value) {
  this.storage[this.counter] = value;
  this.counter++;
  this.size();
};
Stack.prototype.pop = function () {
  var size = this.size();
  var test = this.storage[size];
  delete this.storage[size];
  this.counter--;
  this.size();
  return test;
};
var example = new Stack();