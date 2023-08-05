import Node from "../../src/linkedList/Node";
describe("Unit test suite for Singly linked list", () => {
  test("Should create a node instance", () => {
    const expectedData = {
      value: 20,
      next: null,
    };
    const node = new Node(20);

    expect(node.value).toBe(expectedData.value);
    expect(node.next).toBe(null);
  });
});