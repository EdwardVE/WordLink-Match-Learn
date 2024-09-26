import BSTNode from './BSTNode';

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // Insertar un nodo en el BST
  insert(key, value) {
    const newNode = new BSTNode(key, value);
    if (this.root === null) {
      this.root = newNode;
      return;
    }
    this._insertNode(this.root, newNode);
  }

  _insertNode(node, newNode) {
    if (newNode.key < node.key) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this._insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this._insertNode(node.right, newNode);
      }
    }
  }

  // Buscar un nodo por su clave
  search(key) {
    return this._searchNode(this.root, key);
  }

  _searchNode(node, key) {
    if (node === null) {
      return null;
    }
    if (key === node.key) {
      return node.value;
    }
    if (key < node.key) {
      return this._searchNode(node.left, key);
    } else {
      return this._searchNode(node.right, key);
    }
  }

  // Eliminar un nodo por su clave
  remove(key) {
    this.root = this._removeNode(this.root, key);
  }

  _removeNode(node, key) {
    if (node === null) {
      return null;
    }
    if (key < node.key) {
      node.left = this._removeNode(node.left, key);
      return node;
    } else if (key > node.key) {
      node.right = this._removeNode(node.right, key);
      return node;
    } else {
      // Nodo encontrado
      if (node.left === null && node.right === null) {
        return null;
      }
      if (node.left === null) {
        return node.right;
      }
      if (node.right === null) {
        return node.left;
      }
      // Nodo con dos hijos
      const aux = this._findMinNode(node.right);
      node.key = aux.key;
      node.value = aux.value;
      node.right = this._removeNode(node.right, aux.key);
      return node;
    }
  }

  _findMinNode(node) {
    while (node.left !== null) {
      node = node.left;
    }
    return node;
  }

  // Traversal In-Order (Opcional, para depuración)
  inOrderTraversal() {
    const result = [];
    this._inOrder(this.root, result);
    return result;
  }

  _inOrder(node, result) {
    if (node !== null) {
      this._inOrder(node.left, result);
      result.push({ key: node.key, value: node.value });
      this._inOrder(node.right, result);
    }
  }
}

export default BinarySearchTree;
