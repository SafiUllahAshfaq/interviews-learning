function depthFirstSearch(graph, source) {
  const stack = [source];

  while (stack.length > 0) {
    const current = stack.pop();
    console.log(current);

    for (const neighbor of graph[current]) {
      stack.push(neighbor);
    }
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
