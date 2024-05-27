import Nodo from './nodo.js';


class DoublyLinkedList{

    constructor(){
        this.cabeza = null;
        this.cola = null;
        this.size = 0;
    }

    // Método para añadir un elemento al comienzo de la lista
    
    addFirst(valor){
        const newNodo = new Nodo(valor);

        if (!this.cabeza){
            this.cabeza = newNodo;
            this.cola = newNodo;
            this.size++;
        } else {
            newNodo.siguiente = this.cabeza;
            this.cabeza.previo = newNodo;
            this.cabeza = newNodo;
            this.size++;
        }
    }

    // Método para añadir un elemento al final de la lista

    addLast(valor){
        const newNodo = new Nodo(valor);

        if (!this.cabeza){
            this.cabeza = newNodo;
            this.cola = newNodo;
            this.size++;
        } else {
            this.cola.siguiente = newNodo;
            newNodo.previo = this.cola;
            this.cola = newNodo;
            this.size++;
        }
    }

    // Método para añadir un elemnto en una posición cualquiera de la lista

    addIndex(valor, indice){
        if (indice < 0 || indice > this.size){return null;}

        if(indice == 0){this.addFirst(valor);}          
        else if(indice == this.size){this.addLast(valor);}
        else{
            const newNodo = new Nodo(valor);
            let currentNodo = this.cabeza;

            for(let i = 0; i < indice - 1; i++){currentNodo = this.cabeza.siguiente;}

            newNodo.siguiente = currentNodo.siguiente;
            newNodo.previo = currentNodo;

            currentNodo.siguiente = newNodo;

            this.size++;

        }

    }

    // Método para elminar el primer elemento de la lista

    delBegin(){
        if (!this.cabeza){return null;}

        const valorEliminado = this.cabeza.valor;
        this.cabeza = this.cabeza.siguiente;

        if (this.cabeza){this.cabeza.previo = null;}

        else{this.cola = null;}

        this.size--;
        return valorEliminado;
    }

    // Método para eliminar el ultimo elemento de la lista

    delEnd(){
        if (!this.cola){return null;}

        const valorEliminado = this.cola.valor;

        if(this.size == 1){
            this.clear();
        }

        else{
            this.cola = this.cola.previo;
            this.cola.siguiente = null;
        }

        this.size--;
        return valorEliminado;
    }

    // Método para eliminar un elemento que se encuentre en cualquier posición de la lista

    delIndex(indice){
        if(indice < 0 || indice > this.size){return null;}
        

        if(indice == 0){this.delBegin();}
        else if (indice == this.size - 1){this.delEnd();}

        else{
            let currentNodo = this.cabeza;

            for (let i = 0; i < indice; i++){currentNodo = currentNodo.siguiente;}

            const valorEliminado = currentNodo.valor;
            
            currentNodo = currentNodo.previo;
            currentNodo.siguiente = currentNodo.siguiente.siguiente;
            this.size--;

            return valorEliminado;
        }
    }

    // Método para buscar el indice de la primera aparición de un elemnto

    indexOf(valor){
        let currentNodo = this.cabeza;
        let index = 0;

        while (currentNodo){
            if (currentNodo.valor == valor){return index;}

            currentNodo = currentNodo.siguiente;
            index++;
        }

        return null;
    }

    // Método para definir el formato en el cual se imprime la lista

    toString(){
        if (this.size == 0){return '[]';}
        let currentNodo = this.cabeza;
        let list = "[";

        while(currentNodo){
            if(!currentNodo.siguiente){
                list += `${currentNodo.valor}]`;
                currentNodo = currentNodo.siguiente;

                continue;
            }

            list += `${currentNodo.valor}, `;
            currentNodo = currentNodo.siguiente;
        }

        return list;
    }

    // Método para eliminar todos los elemntos de la lista

    clear(){
        this.cabeza = null;
        this.cola = null;
        this.size = 0;
    }

    // Método para optener el tamaño de la lista

    length(){return this.size;}

    // Método para saber si la lista esta vacia

    isEmpty(){return this.size == 0 ? true : false;}
}

export default DoublyLinkedList;