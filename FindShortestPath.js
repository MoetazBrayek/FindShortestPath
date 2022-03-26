// find shorest path function
// Moetaz Brayek
function findShortestPath(graph, start, end, path = []) {
    path.push(start);
    if (start === end) return path;
    if (!graph[start]) return null;
    let shortest;
    for (let node of graph[start]) {
        if (path.includes(node)) continue;
        let newPath = findShortestPath(graph, node, end, [...path]);
        if (newPath) {
            if (!shortest || newPath.length < shortest.length) {
                shortest = newPath;
            }
        }
    }
    return shortest;
}
// graph
const graph = {   
    'A': ['B', 'C', 'E'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F', 'G'],
    'D': ['B'],
    'E': ['A', 'B', 'D'],
    'F': ['C'],
    'G': ['C']
};
console.log(findShortestPath(graph, 'A', 'F'))
console.log('Shoretest Path is  :  %s', '🚀🎉');
