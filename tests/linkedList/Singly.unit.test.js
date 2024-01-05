import SinglyLinkedList from "../../src/linkedList/SinglyLinkedList";
import Node from "../../src/linkedList/Node";
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

  test("Should add a new element into the singly linked list", () => {
    const expectedTail = new Node(5);
    const expectedHead = {
      value: 20,
      next: {
        value: 5,
        next: expectedTail,
      },
    };
    expectedHead.next = expectedTail;
    const singlyLinkedList = new SinglyLinkedList(20);
    singlyLinkedList.append(5);

    expect(singlyLinkedList.head).toEqual(expectedHead);
    expect(singlyLinkedList.tail).toEqual(expectedTail);
    expect(singlyLinkedList.length).toBe(2);
  });

  test("Should add two new elements", () => {
    const expectedTail = new Node(21);
    const expectedHead = new Node(20);
    expectedHead.next = new Node(5);
    expectedHead.next.next = new Node(21);

    const singlyLinkedList = new SinglyLinkedList(20);
    singlyLinkedList.append(5);
    singlyLinkedList.append(21);

    expect(singlyLinkedList.head).toEqual(expectedHead);
    expect(singlyLinkedList.tail).toEqual(expectedTail);
    expect(singlyLinkedList.length).toBe(3);
  });

  test("Should add a new element in the head", () => {
    const expectedHead = new Node(5);
    const expectedTail = new Node(20);
    expectedHead.next = expectedTail;
    const singlyLinkedList = new SinglyLinkedList(20);
    singlyLinkedList.prepend(5);

    expect(singlyLinkedList.head).toEqual(expectedHead);
    expect(singlyLinkedList.tail).toEqual(expectedTail);
    expect(singlyLinkedList.length).toBe(2);
  });

  test("Should add two elements in the head", () => {
    const expectedHead = new Node(10);
    const expectedTail = new Node(20);
    expectedHead.next = new Node(5);
    expectedHead.next.next = new Node(20);
    const singlyLinkedList = new SinglyLinkedList(20);
    singlyLinkedList.prepend(5);
    singlyLinkedList.prepend(10);

    expect(singlyLinkedList.head).toEqual(expectedHead);
    expect(singlyLinkedList.tail).toEqual(expectedTail);
    expect(singlyLinkedList.length).toBe(3);
  });

  test("Should add a new element in the last node when the index it is out of range", () => {
    const expectedHead = new Node(10);
    const expectedTail = new Node(3);
    expectedHead.next = new Node(3);
    const singlyLinkedList = new SinglyLinkedList(10);

    singlyLinkedList.insert(10, 3);

    expect(singlyLinkedList.head).toEqual(expectedHead);
    expect(singlyLinkedList.tail).toEqual(expectedTail);
    expect(singlyLinkedList.length).toBe(2);
  });

  test("Should add a new element in index 4 of 6", () => {
    const expectedHead = new Node(10);
    const expectedTail = new Node(60);
    expectedHead.next = new Node(20);
    expectedHead.next.next = new Node(30);
    expectedHead.next.next.next = new Node(40);
    expectedHead.next.next.next.next = new Node(50);
    expectedHead.next.next.next.next.next = new Node(60);
    const singlyLinkedList = new SinglyLinkedList(10);
    singlyLinkedList.append(20);
    singlyLinkedList.append(30);
    singlyLinkedList.append(50);
    singlyLinkedList.append(60);

    singlyLinkedList.insert(3, 40);

    expect(singlyLinkedList.head).toEqual(expectedHead);
    expect(singlyLinkedList.tail).toEqual(expectedTail);
    expect(singlyLinkedList.length).toBe(6);
  });
});
