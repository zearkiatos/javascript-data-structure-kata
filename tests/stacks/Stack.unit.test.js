import Stack from '../../src/stacks/Stack';
import Node from '../../src/stacks/Node';
describe("Test unit suites for Stack", () => {
    test("Should create a new instance of stack with initials values", () => {
        const newStack = new Stack();

        expect(newStack.top).toBeNull();
        expect(newStack.bottom).toBeNull();
        expect(newStack.length).toBe(0);
    });

    test("Should return the last element saved", () => {
        const newStack = new Stack();

        const peek = newStack.peek();

        expect(peek).toBeNull();
    });

    test("Should add two elements and pop the last element", () => {
        const expectedValue = new Node(5);
        expectedValue.next = new Node(10);
        const newStack = new Stack();

        newStack.push(10);
        newStack.push(5);
        const peek = newStack.peek();

        expect(peek).toEqual(expectedValue);
    });

    test("Should add an element to the stack", () => {
        const newStack = new Stack();

        newStack.push(20);

        expect(newStack.top.value).toBe(20);
        expect(newStack.bottom.value).toBe(20);
    });

    test("Should add two elements to the stack", () => {
        const expectedBottom = new Node(20);
        const expectedTop = new Node(10);
        expectedTop.next = expectedBottom;

        const newStack = new Stack();

        newStack.push(20);
        newStack.push(10);

        expect(newStack.top).toEqual(expectedTop);
        expect(newStack.bottom).toEqual(expectedBottom);
    });

    test("Should remove the last element", () => {
        const expectedBottom = new Node(20);
        const expectedTop = new Node(20);

        const newStack = new Stack();

        newStack.push(20);
        newStack.push(10);
        newStack.pop();

        expect(newStack.top).toEqual(expectedTop);
        expect(newStack.bottom).toEqual(expectedBottom);
        expect(newStack.length).toBe(1);
    });

    test("Should remove the unique element an return null", () => {
        const newStack = new Stack();

        newStack.push(2);
        newStack.pop();

        expect(newStack.top).toBeNull();
        expect(newStack.bottom).toBeNull();
        expect(newStack.length).toBe(0);
    });

    test("Should not remove nothing when the stack does not have any element", () => {
        const newStack = new Stack();

        newStack.pop();

        expect(newStack.top).toBeNull();
        expect(newStack.bottom).toBeNull();
        expect(newStack.length).toBe(0);
    })
})