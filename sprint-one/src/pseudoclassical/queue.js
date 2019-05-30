var Queue = function () {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.counter = 1;
};

Queue.prototype.size = function () {
  var size = 0;
  for (key in this.storage) {
    if (this.storage.hasOwnProperty(key)) {
      size++;
    }
  }
  return size;
};

Queue.prototype.enqueue = function (value) {
  var i = 2;
  var newStorage = {};
  newStorage[1] = value;
  for (key in this.storage) {
    newStorage[i] = this.storage[key];
    i++;
  }
  this.storage = newStorage;
  this.size();
};

Queue.prototype.dequeue = function () {
  var size = this.size();
  var test = this.storage[size];
  delete this.storage[size];
  this.counter--;
  return test;
};
var test = new Queue;