import Node from "../../src/tree/Node";
import BinarySearchTree from "../../src/tree/BinarySearchTree";

describe("Unit test suite of tree", () => {
  test("Should create a new tree", () => {
    const tree = new BinarySearchTree();

    expect(tree.root).toBeNull();
  });

  test("Should insert a new as a root if it does not exist any value", () => {
    const firstValue = 10;
    const expectedValue = new Node(firstValue);
    const tree = new BinarySearchTree();

    tree.insert(10);

    expect(tree.root).toEqual(expectedValue);
  });

  test("Should insert the second node if the root value is less to the value should move to the right side", () => {
    const firstValue = 10;
    const secondValue = 20;
    const expectedRoot = new Node(firstValue);
    expectedRoot.right = new Node(secondValue)

    const tree = new BinarySearchTree();

    tree.insert(firstValue);
    tree.insert(secondValue);

    expect(tree.root).toEqual(expectedRoot);
    expect(tree.root.right).toEqual(expectedRoot.right);
  });

  test("Should insert the second node if the root value is grand to the value should move to the left side", () => {
    const firstValue = 10;
    const secondValue = 5;
    const expectedRoot = new Node(firstValue);
    expectedRoot.left = new Node(secondValue)

    const tree = new BinarySearchTree();

    tree.insert(firstValue);
    tree.insert(secondValue);

    expect(tree.root).toEqual(expectedRoot);
    expect(tree.root.left).toEqual(expectedRoot.left);
  });

  test("Should create a tree with seven branches", () => {
    const nodesValues = [10, 4, 20, 2, 8 , 17, 170]
    const expectedRoot = new Node(nodesValues[0]);
    expectedRoot.left = new Node(nodesValues[1]);
    expectedRoot.right = new Node(nodesValues[2]);
    expectedRoot.left.left = new Node(nodesValues[3]);
    expectedRoot.left.right = new Node(nodesValues[4]);
    expectedRoot.right.left = new Node(nodesValues[5]);
    expectedRoot.right.right = new Node(nodesValues[6]);
    const tree = new BinarySearchTree();

    tree.insert(nodesValues[0]);
    tree.insert(nodesValues[1]);
    tree.insert(nodesValues[2]);
    tree.insert(nodesValues[3]);
    tree.insert(nodesValues[4]);
    tree.insert(nodesValues[5]);
    tree.insert(nodesValues[6]);

    expect(tree.root).toEqual(expectedRoot);
    expect(tree.root.right).toEqual(expectedRoot.right);
    expect(tree.root.left).toEqual(expectedRoot.left);
  });

  test('Should search and get the node where is a specific value', () => {
    const valueForSearch = 20;
    const nodesValues = [10, 4, 20, 2, 8 , 17, 170];
    const expectedNode = new Node(20);
    expectedNode.left = new Node(17);
    expectedNode.right = new Node(170);
    const tree = new BinarySearchTree();
    tree.insert(nodesValues[0]);
    tree.insert(nodesValues[1]);
    tree.insert(nodesValues[2]);
    tree.insert(nodesValues[3]);
    tree.insert(nodesValues[4]);
    tree.insert(nodesValues[5]);
    tree.insert(nodesValues[6]);

    const foundNode = tree.search(valueForSearch);

    expect(foundNode).toEqual(expectedNode);
  });

  test('Should found element on the left of the tree', () => {
    const valueForSearch = 4;
    const nodesValues = [10, 4, 20, 2, 8 , 17, 170];
    const expectedNode = new Node(4);
    expectedNode.left = new Node(2);
    expectedNode.right = new Node(8);
    const tree = new BinarySearchTree();
    tree.insert(nodesValues[0]);
    tree.insert(nodesValues[1]);
    tree.insert(nodesValues[2]);
    tree.insert(nodesValues[3]);
    tree.insert(nodesValues[4]);
    tree.insert(nodesValues[5]);
    tree.insert(nodesValues[6]);

    const foundNode = tree.search(valueForSearch);

    expect(foundNode).toEqual(expectedNode);
  });

  test('Should return null if it does not exist', () => {
    const valueForSearch = 21;
    const nodesValues = [10, 4, 20, 2, 8 , 17, 170];
    const expectedNode = new Node(20);
    expectedNode.left = new Node(17);
    expectedNode.right = new Node(170);
    const tree = new BinarySearchTree();
    tree.insert(nodesValues[0]);
    tree.insert(nodesValues[1]);
    tree.insert(nodesValues[2]);
    tree.insert(nodesValues[3]);
    tree.insert(nodesValues[4]);
    tree.insert(nodesValues[5]);
    tree.insert(nodesValues[6]);

    const foundNode = tree.search(valueForSearch);

    expect(foundNode).toBeNull();
  });
});
