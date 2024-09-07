class Grafo {
    constructor() {
        this.vertices = new Map(); // Utilizamos un mapa para almacenar los vértices y sus conexiones
    }

    // Agregar un vértice (nodo) al grafo
    agregarVertice(vertice) {
        if (!this.vertices.has(vertice)) {
            this.vertices.set(vertice, []); // Inicializa una lista de adyacencia para el nuevo vértice
        }
    }

    // Agregar una arista (conexión) entre dos vértices
    agregarArista(vertice1, vertice2) {
        if (this.vertices.has(vertice1) && this.vertices.has(vertice2)) {
            this.vertices.get(vertice1).push(vertice2); // Conexión de vertice1 a vertice2
            this.vertices.get(vertice2).push(vertice1); // Si es un grafo no dirigido, agregamos la conexión inversa
        }
    }

    // Mostrar el grafo en la consola
    mostrarGrafo() {
        for (let [vertice, aristas] of this.vertices) {
            console.log(`${vertice} -> ${aristas.join(", ")}`);
        }
    }

    // Realizar una búsqueda en profundidad (DFS) en el grafo
    dfs(inicio, visitados = new Set()) {
        visitados.add(inicio);
        console.log(inicio);

        for (let vecino of this.vertices.get(inicio)) {
            if (!visitados.has(vecino)) {
                this.dfs(vecino, visitados);
            }
        }
    }

    // Realizar una búsqueda en anchura (BFS) en el grafo
    bfs(inicio) {
        let visitados = new Set();
        let cola = [inicio];

        visitados.add(inicio);

        while (cola.length > 0) {
            let vertice = cola.shift();
            console.log(vertice);

            for (let vecino of this.vertices.get(vertice)) {
                if (!visitados.has(vecino)) {
                    visitados.add(vecino);
                    cola.push(vecino);
                }
            }
        }
    }
}

// Ejemplo de uso
const grafo = new Grafo();
grafo.agregarVertice('A');
grafo.agregarVertice('B');
grafo.agregarVertice('C');
grafo.agregarVertice('D');
grafo.agregarVertice('E');

grafo.agregarArista('A', 'B');
grafo.agregarArista('A', 'C');
grafo.agregarArista('B', 'D');
grafo.agregarArista('C', 'E');
grafo.agregarArista('D', 'E');

console.log("Grafo:");
grafo.mostrarGrafo();  // Muestra las conexiones del grafo

console.log("\nDFS desde A:");
grafo.dfs('A');  // Búsqueda en profundidad

console.log("\nBFS desde A:");
grafo.bfs('A');  // Búsqueda en anchura
