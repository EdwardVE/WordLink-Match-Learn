// GraphNode.js

import LinkedList from './LinkedList.js';

class GraphNode {
  /**
   * Crea una instancia de GraphNode.
   * @param {*} vertex - El valor del vértice.
   */
  constructor(vertex) {
    this.vertex = vertex;
    this.neighbors = new LinkedList(); // Utilizamos LinkedList para almacenar los vecinos
  }

  /**
   * Añade un vecino al nodo.
   * @param {GraphNode} neighbor - El nodo vecino a añadir.
   */
  addNeighbor(neighbor) {
    if (!this.hasNeighbor(neighbor.vertex)) {
      this.neighbors.addFirst(neighbor);
      console.log(`Añadido vecino ${neighbor.vertex} al vértice ${this.vertex}`);
    } else {
      console.log(`El vértice ${neighbor.vertex} ya es vecino de ${this.vertex}`);
    }
  }

  /**
   * Elimina un vecino del nodo.
   * @param {*} vertex - El valor del vértice del vecino a eliminar.
   * @returns {boolean} - True si se eliminó exitosamente, false si no se encontró.
   */
  removeNeighbor(vertex) {
    return this.neighbors.remove(this.getNeighborNode(vertex));
  }

  /**
   * Verifica si un vértice es vecino.
   * @param {*} vertex - El valor del vértice a verificar.
   * @returns {boolean} - True si es vecino, false en caso contrario.
   */
  hasNeighbor(vertex) {
    return this.getNeighborNode(vertex) !== null;
  }

  /**
   * Obtiene el nodo vecino que contiene el vértice especificado.
   * @param {*} vertex - El valor del vértice a buscar.
   * @returns {GraphNode|null} - El nodo vecino encontrado o null si no existe.
   */
  getNeighborNode(vertex) {
    let current = this.neighbors.head;
    while (current) {
      if (current.value.vertex === vertex) {
        return current.value;
      }
      current = current.next;
    }
    return null;
  }

  /**
   * Retorna una lista de los vértices vecinos.
   * @returns {Array} - Array de valores de vértices vecinos.
   */
  getNeighborsList() {
    const neighbors = [];
    let current = this.neighbors.head;
    while (current) {
      neighbors.push(current.value.vertex);
      current = current.next;
    }
    return neighbors;
  }

  /**
   * Muestra todos los vecinos del nodo.
   */
  displayNeighbors() {
    if (this.neighbors.isEmpty()) {
      console.log(`El vértice ${this.vertex} no tiene vecinos.`);
      return;
    }

    let current = this.neighbors.head;
    const neighborsList = [];
    while (current) {
      neighborsList.push(current.value.vertex);
      current = current.next;
    }
    console.log(`Vecinos de ${this.vertex}: ${neighborsList.join(' -> ')}`);
  }
}

export default GraphNode;
