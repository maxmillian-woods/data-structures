var Stack = function () {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  var counter = 1;
  var size;

  var printStorage = function () {
    console.log(JSON.stringify(storage));
  };

  // Implement the methods below
  someInstance.push = function (value) {
    storage[`${counter}`] = value;
    counter++;
    someInstance.size();
    printStorage();
  };

  someInstance.pop = function () {
    var test = storage[size];
    delete storage[size];
    counter--;
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
    // if(counter === 0){
    //   size = 0;
    // }
    return size;
  };

  return someInstance;
};