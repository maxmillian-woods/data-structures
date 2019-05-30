var Queue = function () {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  var counter = 1;
  var size = 0;
  var val = 1;

  var printStorage = function () {
    console.log(JSON.stringify(storage));
  };

  // Implement the methods below

  someInstance.enqueue = function (value) {
    var i = 2;
    var newStorage = {};
    newStorage[1] = value;
    for (key in storage) {
      newStorage[i] = storage[key];
      i++;
    }
    storage = newStorage;
    someInstance.size();
  };

  someInstance.dequeue = function () {
    var test = storage[size];
    delete storage[size];
    counter--;
    val++;
    someInstance.size();
    printStorage();
    return test;
  };

  someInstance.size = function () {
    size = 0;
    for (key in storage) {
      if (storage.hasOwnProperty(key)) {
        size++;
      }
    }
    return size;
  };

  return someInstance;
};