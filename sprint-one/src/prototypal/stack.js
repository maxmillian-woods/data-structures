var Stack = function () {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};
  someInstance.counter = 1;

  return someInstance;
};
var extend = function (to, extended) {
  for (var key in extended) {
    to[key] = extended[key];
  }
};
var stackMethods = {
  push: function (value) {
    this.storage[this.counter] = value;
    this.counter++;
    this.size();
  },
  pop: function () {
    var size = this.size();
    var test = this.storage[size];
    delete this.storage[size];
    this.counter--;
    this.size();
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