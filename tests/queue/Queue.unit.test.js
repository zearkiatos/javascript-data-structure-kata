import Node from "../../src/queue/Node";
import Queue from "../../src/queue/Queue";

describe("Unit test suites for Queues", () => {
  test("Should create a new instance of a queue", () => {
    const queue = new Queue();

    expect(queue.first).toBeNull();
    expect(queue.last).toBeNull();
    expect(queue.length).toBe(0);
  });

  test("Should get the first element in the queue as null when they added a element", () => {
    const queue = new Queue();

    const first = queue.peek();

    expect(first).toBeNull();
  });

  test("Should add a new element to the queue", () => {
    const queue = new Queue();
    const value = 20;
    const expectedValue = new Node(value);

    queue.enqueue(value);

    expect(queue.peek()).toEqual(expectedValue);
    expect(queue.last).toEqual(expectedValue);
    expect(queue.length).toBe(1);
  });

  test("Should add a more than one element to the queue", () => {
    const queue = new Queue();
    const firstValue = new Node(20);
    const secondValue = new Node(10);
    firstValue.next = secondValue;

    queue.enqueue(20);
    queue.enqueue(10);

    expect(queue.peek()).toEqual(firstValue);
    expect(queue.last).toEqual(secondValue);
    expect(queue.length).toBe(2);
  });

  test("Should add three elements to the queue", () => {
    const queue = new Queue();
    const firstValue = new Node(20);
    const secondValue = new Node(10);
    const thirdValue = new Node(5);
    secondValue.next = thirdValue;
    firstValue.next = secondValue;

    queue.enqueue(20);
    queue.enqueue(10);
    queue.enqueue(5);

    console.log(queue.peek());

    expect(queue.peek()).toEqual(firstValue);
    expect(queue.last).toEqual(thirdValue);
    expect(queue.length).toBe(3);
  });

  test("Should remove the first element", () => {
    const queue = new Queue();
    const firstValue = new Node(20);
    const secondValue = new Node(10);
    firstValue.next = secondValue;

    queue.enqueue(20);
    queue.enqueue(10);
    queue.dequeue();

    console.log(queue.peek());

    expect(queue.peek()).toEqual(secondValue);
    expect(queue.last).toEqual(secondValue);
    expect(queue.length).toBe(1);
  });

  test("Should remove unique element and set the queue as null", () => {
    const queue = new Queue();
    const value = new Node(20);

    queue.enqueue(20);
    queue.dequeue();

    console.log(queue.peek());

    expect(queue.peek()).toBeNull();
    expect(queue.last).toBeNull();
    expect(queue.length).toBe(0);
  });
});
