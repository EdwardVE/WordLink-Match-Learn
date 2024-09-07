import Nodo from './nodo.js';

class Lista extends Nodo {
    constructor() {
        super(null);
        this.cabeza = null;
        this.cola = null;
        this.longitud = 0;
    }

    añadir(valor) {
        const nuevoNodo = new Nodo(valor);
        if (this.cola) {
            this.cola.establecerSiguiente(nuevoNodo);
            nuevoNodo.establecerPrevio(this.cola);
            this.cola = nuevoNodo;
        } else {
            this.cabeza = this.cola = nuevoNodo;
        }
        this.longitud++;
    }

    añadirAlInicio(valor) {
        const nuevoNodo = new Nodo(valor);
        if (this.cabeza) {
            nuevoNodo.establecerSiguiente(this.cabeza);
            this.cabeza.establecerPrevio(nuevoNodo);
            this.cabeza = nuevoNodo;
        } else {
            this.cabeza = this.cola = nuevoNodo;
        }
        this.longitud++;
    }

    eliminar(valor) {
        let actual = this.cabeza;
        while (actual) {
            if (actual.obtenerValor() === valor) {
                if (actual === this.cabeza) {
                    this.cabeza = actual.obtenerSiguiente();
                    if (this.cabeza) {
                        this.cabeza.establecerPrevio(null);
                    }
                } else if (actual === this.cola) {
                    this.cola = actual.obtenerPrevio();
                    if (this.cola) {
                        this.cola.establecerSiguiente(null);
                    }
                } else {
                    actual.obtenerPrevio().establecerSiguiente(actual.obtenerSiguiente());
                    actual.obtenerSiguiente().establecerPrevio(actual.obtenerPrevio());
                }
                this.longitud--;
                return true;
            }
            actual = actual.obtenerSiguiente();
        }
        return false;
    }

    buscar(valor) {
        let actual = this.cabeza;
        while (actual) {
            if (actual.obtenerValor() === valor) {
                return actual;
            }
            actual = actual.obtenerSiguiente();
        }
        return null;
    }

    obtenerLongitud() {
        return this.longitud;
    }

    toString() {
        let actual = this.cabeza;
        let resultado = '';
        while (actual) {
            resultado += actual.toString() + (actual.obtenerSiguiente() ? ' -> ' : '');
            actual = actual.obtenerSiguiente();
        }
        return resultado;
    }
}

export default Lista;
