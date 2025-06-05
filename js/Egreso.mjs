
// Descripción: Este archivo contiene la clase Egreso, que hereda de la clase Dato, y una función para calcular el total de egresos.
// Importación de la clase Dato
import {Dato} from './Dato.mjs';


export const contadorEgresos = 0; // Contador para los ingresos
// Definición de la clase Egreso
export class Egreso extends Dato {
  constructor(nombre, valor) {
    super(nombre,valor)
  this._id= contadorEgresos++;
  }

  

  // Método para establecer un nuevo valor al egreso
  setValor(nuevoValor) {
    this.valor = nuevoValor;
  }
// Metodo para obtener el ID del egreso
get getID() {
    return this._id;
  }

}


  
