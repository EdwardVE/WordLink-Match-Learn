// Stack.js

import LinkedList from './LinkedList.js';

class Stack {
  constructor() {
    this.list = new LinkedList(); // Instancia de LinkedList para gestionar los elementos de la pila
  }

  /**
   * Agrega un elemento a la pila.
   * @param {*} value - El valor a apilar.
   */
  push(value) {
    this.list.addFirst(value);
    console.log(`Apilado: ${value}`);
  }

  /**
   * Remueve el elemento superior de la pila y lo retorna.
   * @returns {*} - El valor desapilado o null si la pila está vacía.
   */
  pop() {
    const value = this.list.removeFirst();
    if (value !== null) {
      console.log(`Desapilado: ${value}`);
    }
    return value;
  }

  /**
   * Retorna el valor del elemento superior sin removerlo.
   * @returns {*} - El valor en la cima de la pila o null si está vacía.
   */
  peek() {
    return this.list.getFirst();
  }

  /**
   * Verifica si la pila está vacía.
   * @returns {boolean} - True si está vacía, false en caso contrario.
   */
  isEmpty() {
    return this.list.isEmpty();
  }

  /**
   * Retorna el tamaño de la pila.
   * @returns {number} - Número de elementos en la pila.
   */
  size() {
    return this.list.size();
  }

  /**
   * Limpia todos los elementos de la pila.
   */
  clear() {
    this.list.clear();
    console.log("La pila ha sido limpiada.");
  }

  /**
   * Muestra todos los elementos de la pila desde la cima hasta el fondo.
   */
  display() {
    if (this.isEmpty()) {
      console.log("La pila está vacía.");
      return;
    }
    let current = this.list.head;
    const elements = [];
    while (current) {
      elements.push(current.value);
      current = current.next;
    }
    console.log("Elementos de la pila (cima a fondo):", elements.join(" -> "));
  }
}

export default Stack;
