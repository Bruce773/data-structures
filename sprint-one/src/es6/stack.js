class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }

  push(value) {
    var key = Object.keys(this.storage).length;
    //if key does not equal 0
    if (key !== 0) {
      //then set new var to equal key - 1
      var newKey = key - 1;
      if (this.storage[newKey]) {
        newKey += 1;
        this.storage[newKey] = value;
      }
    } else {
      this.storage[key] = value;
    }
  }

  pop() {
    //delete the value at length - 1
    if (Object.keys(this.storage).length !== 0) {
      // console.log(storage);
      var item = Object.keys(this.storage).length - 1;
      var value = this.storage[item];
      // console.log(item, " : ", value);
      delete this.storage[item];
      return value;
    }
  }

  size() {
    return Object.keys(this.storage).length;
  }
}
