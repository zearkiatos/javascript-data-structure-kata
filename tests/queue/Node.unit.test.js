import Node from '../../src/queue/Node';
describe("Test unit suites for Nodes for the queues", () => {
    test("Should create a new node instance", () => {
        const value = 21;
        
        const newNode = new Node(value);

        expect(newNode.value).toBe(value);
        expect(newNode.next).toBeNull();
    })
})