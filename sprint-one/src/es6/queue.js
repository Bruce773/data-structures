class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }

  enqueue(value) {
    var key = Object.keys(this.storage).length;
    //if key does not equal 0
    console.log(this.storage);
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

  dequeue() {
    //delete the value at index 0
    if (Object.keys(this.storage).length !== 0) {
      var item = Object.keys(this.storage)[0];
      var value = this.storage[item];
      delete this.storage[item];
      return value;
    }
  }

  size() {
    return Object.keys(this.storage).length;
  }
}
