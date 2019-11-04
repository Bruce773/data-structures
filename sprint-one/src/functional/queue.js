var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    // var length = (Object.keys(storage).length);
    // // iterate over keys in storage
    // for(var i = 0; i < length; i++){
    //  // if the length is not zero
    //  if((Object.keys(storage).length !x== 0) && (i !== 0)){
    //   //increase each key by one
    //   storage[i]
    //  }
    // }
    // add "value" to the storage obj with a key of 1

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

  someInstance.dequeue = function() {
    //delete the value at index 0
    if (Object.keys(storage).length !== 0) {
      // console.log(storage);
      var item = Object.keys(storage)[0];
      var value = storage[item];
      // console.log(item, " : ", value);
      delete storage[item];
      return value;
    }
  };

  someInstance.size = function() {
    //return the length of storage
    return Object.keys(storage).length;
  };

  return someInstance;
};
