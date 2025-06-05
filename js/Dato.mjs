// Definicion de la clase Dato

export class Dato {
  constructor(nombre, valor) {
    this._nombre = nombre;
    this._valor = valor;
  }

  // Método para obtener el nombre del dato
  getNombre() {
    return this._nombre;
  }

  // Método para obtener el valor del dato
  getValor() {
    return this._valor;
  }

  // Método para establecer un nuevo valor al dato
  setValor(nuevoValor) {
    this._valor = nuevoValor;
    return this._valor; // Retorna el nuevo valor establecido
  }

}