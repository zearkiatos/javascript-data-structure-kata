class MyHashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  hashMethod(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    const address = this.hashMethod(key);

    if (!this.data[address]) {
      this.data[address] = [];
    }

    this.data[address].push([key, value]);

    return this.data;
  }

  get(key) {
    const address = this.hashMethod(key);
    const currentBucket = this.data[address];

    if (currentBucket) {
      for (let item of currentBucket) {
        if (item && item[0] === key) return item[1];
      }
    }
  }

  delete(key) {
    const address = this.hashMethod(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          let arrDeletedItems = currentBucket.splice(i, 1);
          return arrDeletedItems[0];
        }
      }
    }
    return undefined;
  }

  getAllKeys() {
    const keys = [];
    for (let bucket of this.data) {
      if (bucket) {
        for (let item of bucket) {
          keys.push(item[0]);
        }
      }
    }

    return keys;
  }
}

export default MyHashTable;
