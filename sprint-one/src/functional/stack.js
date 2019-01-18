var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    var key = Object.keys(storage).length;
    //if key does not equal 0
    if (key !== 0) {
      //then set new var to equal key - 1
      var newKey = key - 1;
      if (storage[newKey]) {
        newKey += 1;
        storage[newKey] = value;
        // console.log(storage);
      }
    } else {
      storage[key] = value;
      // console.log(storage);
    }
  };

  someInstance.pop = function() {
    //delete the value at length - 1
    if (Object.keys(storage).length !== 0) {
      // console.log(storage);
      var item = (Object.keys(storage).length - 1);
      var value = storage[item];
      // console.log(item, " : ", value);
      delete storage[item];
      return value;
    }
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
