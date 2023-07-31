class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.data;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  delete(index) {
    const item = this.data[index];
    this.shiftIndex(index);

    return item;
  }

  shiftIndex(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }

    delete this.data[this.length - 1];
    this.length--;
  }

  unshift(item) {
    if (!item) return this.length;
    const newArray = {};
    for (let i = 1; i < this.length + 1; i++) {
      newArray[i] = this.data[i - 1];
    }
    newArray[0] = item;
    this.data = newArray;
    this.length++;

    return this.length;
  }

  shift() {
    const lastElement = this.data[0];
    this.shiftIndex(0);

    return lastElement;
  }
}

export default MyArray;
