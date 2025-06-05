// Comienza  la definicion delas  funciones de la aplicacion
// Avance 2: Presupuesto con funciones y objetos

let Ingresos = [
  { nombre: "Sueldo", valor: 2000 },
  { nombre: "Inversión", valor: 1500 }
];

let Egresos = [
  { nombre: "Renta", valor: 900 },
  { nombre: "Ropa", valor: 400 }
];

const totalIngresos = () => {
  let totalIngreso = 0;
  for (let i = 0; i < Ingresos.length; i++) {
    totalIngreso += Ingresos[i].valor;
  }
  return totalIngreso;
};

const totalEgresos = () => {
  let totalEgreso = 0;
  for (let i = 0; i < Egresos.length; i++) {
    totalEgreso += Egresos[i].valor;
  }
  return totalEgreso;
};

const cargarCabecero = () => {
  const presupuesto = totalIngresos() - totalEgresos();
  const porcentajeEgreso = (totalEgresos() / totalIngresos()) * 100;
  return { presupuesto, porcentajeEgreso }; // Devolvemos un objeto con ambas variables
};

const { presupuesto, porcentajeEgreso } = cargarCabecero();

console.log("Presupuesto: " + presupuesto);
console.log("Porcentaje de Egreso: " + porcentajeEgreso.toFixed(2) + "%");
console.log("Total de Ingresos: " + totalIngresos());
console.log("Total de Egresos: " + totalEgresos());

