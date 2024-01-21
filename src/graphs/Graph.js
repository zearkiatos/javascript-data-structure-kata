class Graph {
  constructor() {
    this.nodes = 0;
    this.adjacentList = {};
  }

  addVertex(node) {
    this.adjacentList[node] = [];
    this.nodes++;
  }

  addEdge(firstNode, secondNode) {
    this.adjacentList[firstNode].push(secondNode);
    this.adjacentList[secondNode].push(firstNode);
  }
}

export default Graph;
