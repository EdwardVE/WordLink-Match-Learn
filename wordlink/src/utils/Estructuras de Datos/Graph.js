// Graph.js

import GraphNode from './GraphNode.js';

class Graph {
  constructor() {
    this.nodes = new Map(); // Mapa de vertex a GraphNode
  }

  /**
   * Agrega un vértice al grafo.
   * @param {*} vertex - El valor del vértice a añadir.
   */
  addVertex(vertex) {
    if (!this.nodes.has(vertex)) {
      this.nodes.set(vertex, new GraphNode(vertex));
      console.log(`Añadido vértice: ${vertex}`);
    } else {
      console.log(`El vértice ${vertex} ya existe en el grafo.`);
    }
  }

  /**
   * Agrega una arista dirigida entre dos vértices.
   * @param {*} from - El vértice de origen.
   * @param {*} to - El vértice de destino.
   */
  addEdge(from, to) {
    this.addVertex(from);
    this.addVertex(to);
    const fromNode = this.nodes.get(from);
    const toNode = this.nodes.get(to);
    fromNode.addNeighbor(toNode);
    console.log(`Añadida arista dirigida de ${from} a ${to}`);
  }

  /**
   * Agrega una arista no dirigida entre dos vértices.
   * @param {*} from - Uno de los vértices.
   * @param {*} to - El otro vértice.
   */
  addUndirectedEdge(from, to) {
    this.addEdge(from, to);
    this.addEdge(to, from);
    console.log(`Añadida arista no dirigida entre ${from} y ${to}`);
  }

  /**
   * Obtiene los vecinos de un vértice.
   * @param {*} vertex - El valor del vértice.
   * @returns {Array} - Array de valores de vértices vecinos.
   */
  getNeighbors(vertex) {
    if (!this.nodes.has(vertex)) {
      console.log(`El vértice ${vertex} no existe en el grafo.`);
      return [];
    }
    return this.nodes.get(vertex).getNeighborsList();
  }

  /**
   * Verifica si existe una arista dirigida de 'from' a 'to'.
   * @param {*} from - El vértice de origen.
   * @param {*} to - El vértice de destino.
   * @returns {boolean} - True si existe la arista, false en caso contrario.
   */
  hasEdge(from, to) {
    if (!this.nodes.has(from)) {
      console.log(`El vértice ${from} no existe en el grafo.`);
      return false;
    }
    return this.nodes.get(from).hasNeighbor(to);
  }

  /**
   * Elimina una arista dirigida de 'from' a 'to'.
   * @param {*} from - El vértice de origen.
   * @param {*} to - El vértice de destino.
   */
  removeEdge(from, to) {
    if (!this.nodes.has(from)) {
      console.log(`El vértice ${from} no existe en el grafo.`);
      return;
    }
    const fromNode = this.nodes.get(from);
    const removed = fromNode.removeNeighbor(to);
    if (removed) {
      console.log(`Eliminada arista dirigida de ${from} a ${to}`);
    } else {
      console.log(`No existe una arista dirigida de ${from} a ${to}`);
    }
  }

  /**
   * Elimina un vértice del grafo y todas sus aristas asociadas.
   * @param {*} vertex - El valor del vértice a eliminar.
   */
  removeVertex(vertex) {
    if (!this.nodes.has(vertex)) {
      console.log(`El vértice ${vertex} no existe en el grafo.`);
      return;
    }

    // Eliminar todas las aristas entrantes a este vértice
    for (let [v, node] of this.nodes.entries()) {
      if (v !== vertex) {
        const removed = node.removeNeighbor(vertex);
        if (removed) {
          console.log(`Eliminada arista dirigida de ${v} a ${vertex}`);
        }
      }
    }

    // Eliminar el vértice del mapa
    this.nodes.delete(vertex);
    console.log(`Eliminado vértice: ${vertex}`);
  }

  /**
   * Imprime el grafo (para depuración).
   */
  printGraph() {
    if (this.nodes.size === 0) {
      console.log("El grafo está vacío.");
      return;
    }

    for (let [vertex, node] of this.nodes.entries()) {
      const neighbors = node.getNeighborsList().join(', ');
      console.log(`${vertex} -> ${neighbors}`);
    }
  }
}

export default Graph;
