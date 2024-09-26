// src/utils/HashTable.js
import HashNode from './HashNode';

class HashTable {
  constructor(size = 100) {
    this.size = size;
    this.buckets = new Array(this.size).fill(null).map(() => null);
  }

  // Función hash simple
  hash(key) {
    let hash = 0;
    for (let char of key.toLowerCase()) {
      hash += char.charCodeAt(0);
    }
    return hash % this.size;
  }

  // Insertar clave-valor
  set(key, value) {
    const index = this.hash(key);
    if (this.buckets[index] === null) {
      this.buckets[index] = new HashNode(key, value);
    } else {
      let current = this.buckets[index];
      while (current) {
        if (current.key === key) {
          current.value = value; // Actualizar valor si la clave ya existe
          return;
        }
        if (current.next === null) break;
        current = current.next;
      }
      current.next = new HashNode(key, value); // Agregar nuevo nodo al final
    }
  }

  // Obtener valor por clave
  get(key) {
    const index = this.hash(key);
    let current = this.buckets[index];
    while (current) {
      if (current.key === key) {
        return current.value;
      }
      current = current.next;
    }
    return null; // No encontrado
  }

  // Verificar si una clave existe
  has(key) {
    return this.get(key) !== null;
  }

  // Remover un elemento por clave
  remove(key) {
    const index = this.hash(key);
    let current = this.buckets[index];
    let prev = null;
    while (current) {
      if (current.key === key) {
        if (prev === null) {
          this.buckets[index] = current.next;
        } else {
          prev.next = current.next;
        }
        return true;
      }
      prev = current;
      current = current.next;
    }
    return false; // No encontrado
  }

  // Imprimir la tabla hash (para depuración)
  printHashTable() {
    for (let i = 0; i < this.size; i++) {
      let current = this.buckets[i];
      let chain = [];
      while (current) {
        chain.push(`${current.key}: ${current.value}`);
        current = current.next;
      }
      if (chain.length > 0) {
        console.log(`Bucket ${i}: ${chain.join(' -> ')}`);
      }
    }
  }
}

export default HashTable;
