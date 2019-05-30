var Queue = function () {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};

  someInstance.storage = {};
  someInstance.counter = 1;
  extend(someInstance, queuMethods);
  return someInstance;
};

var extend = function (to, extended) {
  for (var key in extended) {
    to[key] = extended[key];
  }
};

var queuMethods = {

  enqueue: function (value) {
    var i = 2;
    var newStorage = {};
    newStorage[1] = value;
    for (key in this.storage) {
      newStorage[i] = this.storage[key];
      i++;
    }
    this.storage = newStorage;
    this.size();
  },

  dequeue: function () {
    var size = this.size();
    var test = this.storage[size];
    delete this.storage[size];
    this.counter--;
    return test;
  },

  size: function () {
    var size = 0;
    for (key in this.storage) {
      if (this.storage.hasOwnProperty(key)) {
        size++;
      }
    }
    return size;
  }
};