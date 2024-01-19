import Node from '../../src/tree/Node';
describe("Test unit suites for Nodes for the tree", () => {
    test("Should create a new node instance", () => {
        const value = 21;
        
        const newNode = new Node(value);

        expect(newNode.value).toBe(value);
        expect(newNode.left).toBeNull();
        expect(newNode.right).toBeNull();
    })
})