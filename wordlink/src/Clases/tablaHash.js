class TablaHash {
    constructor(tamano = 50) {
        this.tabla = new Array(tamano); // Creamos una tabla (array) con un tamaño predeterminado
        this.tamano = tamano;
    }

    // Función hash para generar un índice basado en la clave
    _hash(clave) {
        let hash = 0;
        for (let i = 0; i < clave.length; i++) {
            hash += clave.charCodeAt(i); // Sumar los códigos de caracteres de la clave
        }
        return hash % this.tamano; // Retornar el índice en el rango del tamaño de la tabla
    }

    // Método para insertar o actualizar un valor en la tabla hash
    set(clave, valor) {
        const indice = this._hash(clave);

        // Si la posición está vacía, creamos una nueva lista
        if (!this.tabla[indice]) {
            this.tabla[indice] = [];
        }

        // Buscar si la clave ya existe en la lista (para actualizar)
        for (let i = 0; i < this.tabla[indice].length; i++) {
            if (this.tabla[indice][i][0] === clave) {
                this.tabla[indice][i][1] = valor; // Actualizar el valor si la clave ya existe
                return;
            }
        }

        // Si la clave no existe, agregamos un nuevo par [clave, valor]
        this.tabla[indice].push([clave, valor]);
    }

    // Método para obtener un valor a partir de su clave
    get(clave) {
        const indice = this._hash(clave);

        // Buscar la clave en la lista enlazada
        if (this.tabla[indice]) {
            for (let i = 0; i < this.tabla[indice].length; i++) {
                if (this.tabla[indice][i][0] === clave) {
                    return this.tabla[indice][i][1]; // Retornar el valor asociado a la clave
                }
            }
        }
        return undefined; // Si la clave no existe
    }

    // Método para eliminar un valor a partir de su clave
    eliminar(clave) {
        const indice = this._hash(clave);

        if (this.tabla[indice]) {
            for (let i = 0; i < this.tabla[indice].length; i++) {
                if (this.tabla[indice][i][0] === clave) {
                    this.tabla[indice].splice(i, 1); // Eliminar el par [clave, valor]
                    return true;
                }
            }
        }
        return false; // Si la clave no se encuentra
    }

    // Mostrar la tabla hash completa
    mostrarTabla() {
        for (let i = 0; i < this.tabla.length; i++) {
            if (this.tabla[i]) {
                console.log(i, this.tabla[i]);
            }
        }
    }
}

// Ejemplo de uso
const tablaHash = new TablaHash();
tablaHash.set('nombre', 'Juan');
tablaHash.set('edad', 25);
tablaHash.set('profesion', 'Ingeniero');
console.log(tablaHash.get('nombre'));      // Salida: Juan
console.log(tablaHash.get('profesion'));   // Salida: Ingeniero
tablaHash.eliminar('edad');
tablaHash.mostrarTabla();
