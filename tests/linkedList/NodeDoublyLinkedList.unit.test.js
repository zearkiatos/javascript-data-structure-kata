import NodeDoublyLinkedList from "../../src/linkedList/NodeDoublyLinkedList";
describe("Unit test suite Node for doubly linked list", () => {
  test("Should create a node instance", () => {
    const expectedData = {
      value: 20,
      next: null,
      prev: null
    };
    const node = new NodeDoublyLinkedList(20);

    expect(node.value).toBe(expectedData.value);
    expect(node.next).toBe(expectedData.next);
    expect(node.prev).toBe(expectedData.prev);
  });
});