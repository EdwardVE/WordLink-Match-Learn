import GraphNode from './GraphNode';

class Graph {
  constructor() {
    this.nodes = new Map(); // Mapa de vertex a GraphNode
  }

  // Agregar un vértice al grafo
  addVertex(vertex) {
    if (!this.nodes.has(vertex)) {
      this.nodes.set(vertex, new GraphNode(vertex));
    }
  }

  // Agregar una arista dirigida
  addEdge(from, to) {
    this.addVertex(from);
    this.addVertex(to);
    this.nodes.get(from).neighbors.push(this.nodes.get(to));
  }

  // Obtener vecinos de un vértice
  getNeighbors(vertex) {
    if (!this.nodes.has(vertex)) return [];
    return this.nodes.get(vertex).neighbors.map(node => node.vertex);
  }

  // Verificar si existe una arista dirigida de 'from' a 'to'
  hasEdge(from, to) {
    if (!this.nodes.has(from)) return false;
    return this.nodes.get(from).neighbors.some(node => node.vertex === to);
  }

  // Imprimir el grafo (para depuración)
  printGraph() {
    for (let [vertex, node] of this.nodes.entries()) {
      const neighbors = node.neighbors.map(n => n.vertex).join(', ');
      console.log(`${vertex} -> ${neighbors}`);
    }
  }
}

export default Graph;
