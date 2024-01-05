import Node from "./Node";
class SinglyLinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length += 1;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    }

    const newNode = new Node(value);
    const firstPointer = this.getIndex(index - 1);
    const holdingPointer = firstPointer.next;
    firstPointer.next = newNode;
    newNode.next = holdingPointer;
    this.length++;

    return this;
  }

  getIndex(index) {
    let counter = 0;
    let currentNode = this.head;

    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
  }
}

export default SinglyLinkedList;
