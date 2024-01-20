import Node from "./Node";

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (currentNode !== null) {
        if (value < currentNode.value) {
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }

  search(value) {
    let foundNode = null;
    let currentNode = this.root;
    while (currentNode !== null) {
      if (value > currentNode.value) {
        if (currentNode.right?.value === value) {
          foundNode = currentNode.right;
          break;
        }
        currentNode = currentNode.right;
      } else {
        if (currentNode.left?.value === value) {
          foundNode = currentNode.left;
          break;
        }
        currentNode = currentNode.left;
      }
    }

    return foundNode;
  }
}

export default BinarySearchTree;
