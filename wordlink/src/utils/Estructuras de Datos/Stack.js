import StackNode from './StackNode';

class Stack {
  constructor() {
    this.top = null;
    this._size = 0;
  }

  // Agregar un elemento a la pila
  push(value) {
    const newNode = new StackNode(value);
    newNode.next = this.top;
    this.top = newNode;
    this._size++;
  }

  // Remover el elemento superior de la pila
  pop() {
    if (this.isEmpty()) {
      return null;
    }
    const poppedNode = this.top;
    this.top = this.top.next;
    this._size--;
    return poppedNode.value;
  }

  // Ver el elemento superior sin removerlo
  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.top.value;
  }

  // Verificar si la pila está vacía
  isEmpty() {
    return this.top === null;
  }

  // Obtener el tamaño de la pila
  size() {
    return this._size;
  }

  // Limpiar la pila
  clear() {
    this.top = null;
    this._size = 0;
  }
}

export default Stack;
