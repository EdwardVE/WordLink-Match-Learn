// src/data/levelGraph.js
import Graph from '../utils/Estructuras de Datos/Graph';

const levelGraph = new Graph();

// Supongamos que tienes 5 niveles: 0, 1, 2, 3, 4
levelGraph.addVertex(0);
levelGraph.addVertex(1);
levelGraph.addVertex(2);
levelGraph.addVertex(3);
levelGraph.addVertex(4);
levelGraph.addVertex(5);
levelGraph.addVertex(6);
levelGraph.addVertex(7);
levelGraph.addVertex(8);
levelGraph.addVertex(9);
levelGraph.addVertex(10);

// Relaciones de desbloqueo
levelGraph.addEdge(0, 1); // Completar nivel 0 desbloquea nivel 1
levelGraph.addEdge(1, 2); // Completar nivel 1 desbloquea nivel 2
levelGraph.addEdge(2, 3); // Completar nivel 2 desbloquea nivel 3
levelGraph.addEdge(3, 4); // Completar nivel 3 desbloquea nivel 4
levelGraph.addEdge(4, 5); // Completar nivel 4 desbloquea nivel 5
levelGraph.addEdge(5, 6); // Completar nivel 5 desbloquea nivel 6
levelGraph.addEdge(6, 7); // Completar nivel 6 desbloquea nivel 7
levelGraph.addEdge(7, 8); // Completar nivel 7 desbloquea nivel 8
levelGraph.addEdge(8, 9); // Completar nivel 8 desbloquea nivel 9
levelGraph.addEdge(9, 10); // Completar nivel 9 desbloquea nivel 10

export default levelGraph;

