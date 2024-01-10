import NodeDoublyLinkedList from "../../src/linkedList/NodeDoublyLinkedList";
import DoublyLinkedList from "../../src/linkedList/DoublyLinkedList";

describe("Unit test suite for Doubly linked list", () => {
  test("Should create a doubly linked list instance", () => {
    const expectedData = {
      value: 20,
      prev: null,
      next: null,
    };
    const doublyLinkedList = new DoublyLinkedList(20);

    expect(doublyLinkedList.head).toEqual(expectedData);
    expect(doublyLinkedList.tail).toEqual(expectedData);
    expect(doublyLinkedList.length).toBe(1);
  });

  test("Should add a new element into the doubly linked list", () => {
    const expectedTail = new NodeDoublyLinkedList(5);
    const expectedHead = new NodeDoublyLinkedList(20);
    expectedTail.prev = expectedHead;
    expectedHead.next = expectedTail;
    const douglyLinkedList = new DoublyLinkedList(20);
    douglyLinkedList.append(5);

    expect(douglyLinkedList.head).toEqual(expectedHead);
    expect(douglyLinkedList.tail).toEqual(expectedTail);
    expect(douglyLinkedList.length).toBe(2);
  });

  test("Should add two new elements", () => {
    const expectedTail = new NodeDoublyLinkedList(21);
    const expectedHead = new NodeDoublyLinkedList(20);
    expectedHead.next = new NodeDoublyLinkedList(5);
    expectedHead.next.prev = expectedHead;
    expectedHead.next.next = expectedTail;
    expectedTail.prev = expectedHead.next;

    const douglyLinkedList = new DoublyLinkedList(20);
    douglyLinkedList.append(5);
    douglyLinkedList.append(21);

    expect(douglyLinkedList.head).toEqual(expectedHead);
    expect(douglyLinkedList.tail).toEqual(expectedTail);
    expect(douglyLinkedList.length).toBe(3);
  });

  test("Should add a new element in the head", () => {
    const expectedHead = new NodeDoublyLinkedList(5);
    const expectedTail = new NodeDoublyLinkedList(20);
    expectedHead.next = expectedTail;
    expectedTail.prev = expectedHead;

    const douglyLinkedList = new DoublyLinkedList(20);
    douglyLinkedList.prepend(5);

    expect(douglyLinkedList.head).toEqual(expectedHead);
    expect(douglyLinkedList.tail).toEqual(expectedTail);
    expect(douglyLinkedList.length).toBe(2);
  });

  test("Should add two elements in the head", () => {
    const expectedHead = new NodeDoublyLinkedList(10);
    const expectedTail = new NodeDoublyLinkedList(20);
    expectedHead.next = new NodeDoublyLinkedList(5);
    expectedHead.next.next = expectedTail;
    expectedHead.next.next.prev = expectedHead.next;
    expectedHead.next.prev = expectedHead;

    const douglyLinkedList = new DoublyLinkedList(20);
    douglyLinkedList.prepend(5);
    douglyLinkedList.prepend(10);

    expect(douglyLinkedList.head).toEqual(expectedHead);
    expect(douglyLinkedList.tail).toEqual(expectedTail);
    expect(douglyLinkedList.length).toBe(3);
  });

  test("Should add a new element in the last node when the index it is out of range", () => {
    const expectedHead = new NodeDoublyLinkedList(10);
    const expectedTail = new NodeDoublyLinkedList(3);
    expectedHead.next = expectedTail;
    expectedHead.next.prev = expectedHead;
    expectedTail.prev = expectedHead;
    const doublyLinkedList = new DoublyLinkedList(10);

    doublyLinkedList.insert(10, 3);

    expect(doublyLinkedList.head).toEqual(expectedHead);
    expect(doublyLinkedList.tail).toEqual(expectedTail);
    expect(doublyLinkedList.length).toBe(2);
  });

  test("Should add a new element in index 4 of 6", () => {
    const expectedHead = new NodeDoublyLinkedList(10);
    const expectedTail = new NodeDoublyLinkedList(60);
    expectedHead.next = new NodeDoublyLinkedList(20);
    expectedHead.next.prev = expectedHead;
    expectedHead.next.next = new NodeDoublyLinkedList(30);
    expectedHead.next.next.prev = expectedHead.next;
    expectedHead.next.next.next = new NodeDoublyLinkedList(40);
    expectedHead.next.next.next.prev = expectedHead.next.next;
    expectedHead.next.next.next.next = new NodeDoublyLinkedList(50);
    expectedHead.next.next.next.next.prev = expectedHead.next.next.next;
    expectedHead.next.next.next.next.next = new NodeDoublyLinkedList(60);
    expectedHead.next.next.next.next.next.prev = expectedHead.next.next.next.next;
    const doublyLinkedList  = new DoublyLinkedList(10);
    doublyLinkedList.append(20);
    doublyLinkedList.append(30);
    doublyLinkedList.append(50);
    doublyLinkedList.append(60);

    doublyLinkedList.insert(3, 40);

    expect(doublyLinkedList.length).toBe(6);
  });

  test("Should remove the last element if the index is grant to equal to the size of the singly linked", () => {
    const expectedHead = new NodeDoublyLinkedList(1);
    const expectedTail = new NodeDoublyLinkedList(2);
    expectedHead.next = expectedTail;
    expectedHead.next.prev = expectedHead;
    const doublyLinkedList = new DoublyLinkedList(1);
    doublyLinkedList.append(2);
    doublyLinkedList.append(3);

    doublyLinkedList.remove(10);

    expect(doublyLinkedList.head).toEqual(expectedHead);
    expect(doublyLinkedList.tail).toEqual(expectedTail);
    expect(doublyLinkedList.length).toBe(2);
  });

  test("Should remove an element with an index gave", () => {
    const expectedHead = new NodeDoublyLinkedList(1);
    const expectedTail = new NodeDoublyLinkedList(3);
    expectedHead.next = expectedTail;
    expectedTail.prev = expectedHead;
    const doublyLinkedList = new DoublyLinkedList(1);
    doublyLinkedList.append(2);
    doublyLinkedList.append(3);

    doublyLinkedList.remove(1);

    expect(doublyLinkedList.head).toEqual(expectedHead);
    expect(doublyLinkedList.tail).toEqual(expectedTail);
    expect(doublyLinkedList.length).toBe(2);
  });
});
