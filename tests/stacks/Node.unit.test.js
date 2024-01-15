import Node from '../../src/stacks/Node';
describe("Test unit suites for Nodes for the stacks", () => {
    test("Should create a new node instance", () => {
        const value = 21;
        
        const newNode = new Node(value);

        expect(newNode.value).toBe(value);
        expect(newNode.next).toBeNull();
    })
})