class Nodo {
    constructor(valor) {
        this.valor = valor;
        this.hijos = []; // Lista de hijos
    }

    // Agrega un hijo al nodo
    agregarHijo(nodo) {
        this.hijos.push(nodo);
    }
}

class Arbol {
    constructor(raiz) {
        this.raiz = raiz; // Nodo raíz del árbol
    }

    // Realiza un recorrido en profundidad (DFS) en el árbol
    dfs(nodo = this.raiz) {
        console.log(nodo.valor);

        for (let hijo of nodo.hijos) {
            this.dfs(hijo);
        }
    }

    // Realiza un recorrido en anchura (BFS) en el árbol
    bfs() {
        let cola = [this.raiz];

        while (cola.length > 0) {
            let nodo = cola.shift();
            console.log(nodo.valor);

            for (let hijo of nodo.hijos) {
                cola.push(hijo);
            }
        }
    }
}

// Ejemplo de uso
const raiz = new Nodo('A');
const nodoB = new Nodo('B');
const nodoC = new Nodo('C');
const nodoD = new Nodo('D');
const nodoE = new Nodo('E');
const nodoF = new Nodo('F');

raiz.agregarHijo(nodoB);
raiz.agregarHijo(nodoC);
nodoB.agregarHijo(nodoD);
nodoB.agregarHijo(nodoE);
nodoC.agregarHijo(nodoF);

const arbol = new Arbol(raiz);

console.log("DFS del árbol:");
arbol.dfs(); // Recorrido en profundidad

console.log("\nBFS del árbol:");
arbol.bfs(); // Recorrido en anchura
