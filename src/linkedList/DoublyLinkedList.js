import NodeDoublyLinkedList from "./NodeDoublyLinkedList";

class DoublyLinkedList {
  constructor(value) {
    this.head = new NodeDoublyLinkedList(value);
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new NodeDoublyLinkedList(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length += 1;

    return this;
  }

  prepend(value) {
    const newNode = new NodeDoublyLinkedList(value);
    newNode.next = this.head;
    newNode.next.prev = newNode;
    this.head = newNode;
    this.length++;
    return this;
  }

  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    }

    const newNode = new NodeDoublyLinkedList(value);
    const firstPointer = this.getIndex(index - 1);
    const nextHoldingPointer = firstPointer.next;
    const prevHoldingPointer = firstPointer.prev;
    firstPointer.next = newNode;
    newNode.next = nextHoldingPointer;
    newNode.prev = prevHoldingPointer;
    this.length++;

    return this;
  }

  remove(index) {
    let counter = 0;
    let newList = null;
    let current = this.head;
    const indexForDelete = (index > this.length - 1) ? this.length - 1 : index;
    while (counter <= this.length - 1) {
      if (counter !== indexForDelete) {
        if (counter === 0) {
          newList = new DoublyLinkedList(this.head.value);
        } else if (current?.next) {
          if (counter + 1 === this.length - 1) {
            newList.append(current?.value);
          }
          else {
            newList.append(current?.next.value);
          }
        
        }
        if (current?.next) current = current.next;
      }
      counter++;
    }

    this.head = newList.head;
    this.tail = newList.tail;
    this.length = newList.length;

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

export default DoublyLinkedList;
