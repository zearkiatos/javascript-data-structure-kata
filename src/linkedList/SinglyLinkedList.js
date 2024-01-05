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

  remove(index) {
    let counter = 0;
    let newList = null;
    let current = this.head;
    while(counter <= this.length) {
      if (counter !== index) {
        if (counter === 0) {
          newList = new SinglyLinkedList(this.head.value)
        }
        else if (current?.next) {
          newList.append(current?.next.value)
        }
        if (current?.next)
          current = current.next;
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

export default SinglyLinkedList;
