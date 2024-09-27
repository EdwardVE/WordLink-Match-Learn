// LinkedList.js

import ListNode from './ListNode.js';

class LinkedList {
  constructor() {
    this.head = null; // Referencia al primer nodo de la lista
    this._size = 0;   // Tamaño de la lista
  }

  /**
   * Añade un elemento al inicio de la lista.
   * @param {*} value - El valor a añadir.
   */
  addFirst(value) {
    const newNode = new ListNode(value);
    newNode.next = this.head;
    this.head = newNode;
    this._size++;
    console.log(`Añadido al inicio: ${value}`);
  }

  /**
   * Elimina y retorna el primer elemento de la lista.
   * @returns {*} - El valor eliminado o null si la lista está vacía.
   */
  removeFirst() {
    if (this.isEmpty()) {
      console.log("La lista está vacía. No se puede eliminar el primer elemento.");
      return null;
    }
    const removedNode = this.head;
    this.head = this.head.next;
    this._size--;
    console.log(`Eliminado del inicio: ${removedNode.value}`);
    return removedNode.value;
  }

  /**
   * Obtiene el valor del primer elemento sin eliminarlo.
   * @returns {*} - El valor del primer elemento o null si la lista está vacía.
   */
  getFirst() {
    if (this.isEmpty()) {
      console.log("La lista está vacía.");
      return null;
    }
    console.log(`Primer elemento: ${this.head.value}`);
    return this.head.value;
  }

  /**
   * Verifica si la lista está vacía.
   * @returns {boolean} - True si está vacía, false en caso contrario.
   */
  isEmpty() {
    return this.head === null;
  }

  /**
   * Retorna el tamaño de la lista.
   * @returns {number} - Número de elementos en la lista.
   */
  size() {
    return this._size;
  }

  /**
   * Limpia todos los elementos de la lista.
   */
  clear() {
    this.head = null;
    this._size = 0;
    console.log("La lista ha sido limpiada.");
  }

  /**
   * Muestra todos los elementos de la lista desde el inicio hasta el final.
   */
  display() {
    if (this.isEmpty()) {
      console.log("La lista está vacía.");
      return;
    }
    let current = this.head;
    const elements = [];
    while (current) {
      elements.push(current.value);
      current = current.next;
    }
    console.log("Elementos de la lista (inicio a final):", elements.join(" -> "));
  }

  /**
   * Busca y retorna el nodo que contiene el valor especificado.
   * @param {*} value - El valor a buscar.
   * @returns {ListNode|null} - El nodo encontrado o null si no existe.
   */
  find(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return current;
      }
      current = current.next;
    }
    return null;
  }

  /**
   * Elimina un nodo que contiene el valor especificado.
   * @param {*} value - El valor del nodo a eliminar.
   * @returns {boolean} - True si se eliminó exitosamente, false si no se encontró.
   */
  remove(value) {
    if (this.isEmpty()) {
      console.log("La lista está vacía. No se puede eliminar.");
      return false;
    }

    let current = this.head;
    let previous = null;

    while (current) {
      if (current.value === value) {
        if (previous === null) {
          // Eliminar el primer nodo
          this.removeFirst();
        } else {
          previous.next = current.next;
          this._size--;
          console.log(`Eliminado: ${current.value}`);
        }
        return true;
      }
      previous = current;
      current = current.next;
    }

    console.log(`Valor ${value} no encontrado en la lista.`);
    return false;
  }
}

export default LinkedList;
