import Graph from "../../src/graphs/Graph";

describe("Unit test suite for Graphs", () => {
  test("Should create a new Graph instance", () => {
    const graph = new Graph();

    expect(graph.nodes).toBe(0);
    expect(typeof graph.adjacentList === "object").toBeTruthy();
  });

  test("Should add a new vertex to the graph", () => {
    const graph = new Graph();
    const expectVertex = {
      0: [],
    };

    graph.addVertex(0);

    expect(graph.adjacentList).toEqual(expectVertex);
    expect(graph.nodes).toBe(1);
  });

  test("Should add a new edge to a graph with two vertex", () => {
    const graph = new Graph();
    const expectedGraph = {
      "0": ["2"],
      "2": ["0"]
    };
    graph.addVertex("0");
    graph.addVertex("2");

    graph.addEdge("0", "2");

    expect(graph.adjacentList).toEqual(expectedGraph);
    expect(graph.nodes).toBe(2);
  });

  test("Should create a new graph with six nodes and its edges", () => {
    const graph = new Graph();
    const expectedGraph = {
      "1": ["3", "4", "6"],
      "3": ["1", "5", "6"],
      "4": ["1", "5", "8"],
      "5": ["3", "4"],
      "6": ["1", "3"],
      "8": ["4"]
    };
    graph.addVertex("1");
    graph.addVertex("3");
    graph.addVertex("4");
    graph.addVertex("5");
    graph.addVertex("6");
    graph.addVertex("8");

    graph.addEdge("1", "3");
    graph.addEdge("1", "4");
    graph.addEdge("1", "6");
    graph.addEdge("3", "5");
    graph.addEdge("3", "6");
    graph.addEdge("4", "5");
    graph.addEdge("4", "8");

    expect(graph.adjacentList).toEqual(expectedGraph);
    expect(graph.nodes).toBe(6);
  });
});
