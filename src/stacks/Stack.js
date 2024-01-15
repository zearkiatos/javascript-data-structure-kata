import Node from './Node';

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }

  push(value) {
    const newNode = new Node(value);

    if (this.length == 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
      this.bottom = holdingPointer;
    }

    this.length++;

    return this;
  }

  pop() {
    if (this.length > 0) {
        if (this.length === 1) {
            this.top = null;
            this.bottom = null;
            this.length = 0;
        }
        else {
            const holdingPointer = this.bottom;
            this.top = holdingPointer;
            this.length--;
        }
    }

    return this;
  }
}

export default Stack;
