class Nodo {
    constructor(valor, siguiente = null, previo = null) {
        this.valor = valor;
        this.siguiente = siguiente;
        this.previo = previo;
    }

    // Método para obtener el valor del nodo
    obtenerValor() {
        return this.valor;
    }

    // Método para establecer el valor del nodo
    establecerValor(valor) {
        this.valor = valor;
    }

    // Método para obtener el siguiente nodo
    obtenerSiguiente() {
        return this.siguiente;
    }

    // Método para establecer el siguiente nodo
    establecerSiguiente(nodo) {
        this.siguiente = nodo;
    }

    // Método para obtener el nodo previo (para listas dobles o árboles)
    obtenerPrevio() {
        return this.previo;
    }

    // Método para establecer el nodo previo
    establecerPrevio(nodo) {
        this.previo = nodo;
    }

    // Método para verificar si el nodo es un nodo hoja (para árboles)
    esHoja() {
        return this.siguiente === null && this.previo === null;
    }

    // Método para representar el nodo como una cadena
    toString() {
        return `Nodo(valor: ${this.valor})`;
    }

}

export default Nodo;
