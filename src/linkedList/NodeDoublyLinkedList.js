import Node from "./Node";

class NodeDoublyLinkedList extends Node {
  constructor(value) {
    super(value);
    this.prev = null;
  }
}

export default NodeDoublyLinkedList;
