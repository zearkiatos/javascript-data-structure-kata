import SinglyLinkedList from "../../src/linkedList/SinglyLinkedList";
describe("Unit test suite for Singly linked list", () => {
  test("Should create a singly linked list instance", () => {
    const expectedData = {
      value: 20,
      next: null,
    };
    const singlyLinkedList = new SinglyLinkedList(20);

    expect(singlyLinkedList.head).toEqual(expectedData);
    expect(singlyLinkedList.tail).toEqual(expectedData);
    expect(singlyLinkedList.length).toBe(1);
  });
});
