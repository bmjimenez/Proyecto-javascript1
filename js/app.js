// Comienza  la definicion delas  funciones de la aplicacion

// Importación de las clases Ingreso y Egreso
import Ingreso from './Ingreso.mjs';

import Egreso from './Egreso.mjs';


// Arreglo de ingresos con ejemplos
const arrayIngresos = [
  new Ingreso('Salario', 20000),
  new Ingreso('Venta auto', 50000)
];

// Arreglo de egresos con ejemplos
const arrayEgresos = [
  new Egreso('Renta', 4000),
  new Egreso('Ropa', 800)
];

// Funciones para calcular el total de ingresos y egresos

const totalIngresos = () =>
  arrayIngresos.reduce((total, ingreso) => total + ingreso.getValor(), 0);

const totalEgresos = () =>
  arrayEgresos.reduce((total, egreso) => total + egreso.getValor(), 0);


// Función para cargar el cabecero con el presupuesto y porcentaje de egreso

  function cargarCabecero() {
    const presupuesto = totalIngresos() - totalEgresos();
    const porcentajeEgreso = (totalEgresos() / totalIngresos()) * 100;
    return { presupuesto, porcentajeEgreso }; // Devolvemos un objeto con ambas variables
      }

const { presupuesto, porcentajeEgreso } = cargarCabecero();

console.log("Presupuesto: " + presupuesto);
console.log("Porcentaje de Egreso: " + porcentajeEgreso.toFixed(2) + "%");
console.log("Total de Ingresos: " + totalIngresos());
console.log("Total de Egresos: " + totalEgresos());

