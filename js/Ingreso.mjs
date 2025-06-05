
// Descripción: Este archivo contiene la clase Ingreso, que hereda de la clase Dato, y una función para calcular el total de ingresos.

// Importación de la clase Dato
import {Dato} from './Dato.mjs';


let contadorIngresos = 0; // Contador para los ingresos

// Definición de la clase Ingreso
export default class Ingreso extends Dato {
  constructor(nombre, valor) {
    super(nombre,valor);
    this._id= contadorIngresos++;
  }

  
// Método para obtener el ID del ingreso
  getID () {
    return this._id;
  }
  // Método para establecer un nuevo valor al ingreso
  setValor(nuevoValor) {
    this.valor = nuevoValor;
  }
};

