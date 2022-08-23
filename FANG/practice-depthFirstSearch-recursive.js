function depthFirstSearch(graph, current) {
  console.log(current);

  for (const neighbor of graph[current]) {
    depthFirstSearch(graph, neighbor);
  }
}

const graph = {
  a: ["c", "b"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};

depthFirstSearch(graph, "a");
