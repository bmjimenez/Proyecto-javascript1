// Comienza  la definicion delas  funciones de la aplicacion

// Importación de las clases Ingreso y Egreso
import Ingreso from './Ingreso.mjs';

import Egreso from './Egreso.mjs';


// Inicialización de los arrays para almacenar ingresos y egresos
let arrayIngresos = [];
let arrayEgresos = [];
// Esta función temporal inicia la aplicación, carga los calculos del  cabecero 
// Funciones para calcular el total de ingresos y egresos
 let totalIngresos = () => arrayIngresos.reduce((total, ingreso) => total + ingreso.getValor(), 0);
 let totalEgresos = () => arrayEgresos.reduce((total, egreso) => total + egreso.getValor(), 0);
console.log("Total de Ingresos: " + totalIngresos());
console.log("Total de Egresos: " + totalEgresos());

let Totalpresupuesto = 0;
let porcentajeIngreso = 0;
let porcentajeEgreso = 0;

window.onload = function () {
    // Con esto podemos ver los valores de las variables en consola
    window.ingresos = arrayIngresos
    window.egresos = arrayEgresos

        // Eventos para los botones de agregar ingresos y egresos
        / document.getElementById('agregar_btn').addEventListener('click', agregarElemento);

    // Para el botón eliminar
    //document.getElementById('eliminar_ingreso_1').addEventListener('click', eliminarIngresos)
}


// Función para agregar un ingreso al array de ingresos
export function agregarElemento() {

// Leemos valors del formulario
    const tipoIngreso = document.getElementById('tipo').value;
    const nombreIngreso = document.getElementById('descripcion').value;
    const valorIngreso = parseFloat(document.getElementById('valor').value)|| 0;
    
    window.tipoIngreso = tipoIngreso
    window.nombreIngreso = nombreIngreso
    //window.nombreEgreso = nombreIngreso
    window.valor = valorIngreso
    window.valorEgreso = valorIngreso
    if (tipoIngreso === 'ingreso') {
        // Validación de los campos de ingreso
        if (nombreIngreso && !isNaN(valorIngreso) && valorIngreso > 0) {
            const nuevoIngreso = new Ingreso(nombreIngreso, valorIngreso);
            arrayIngresos.push(nuevoIngreso);
             // Sumar el egreso a  total  de egresos 
            totalIngresos = () => arrayIngresos.reduce((total, ingreso) => total + ingreso.getValor(), 0);
            // Llamar a la función para actualizar el cabecero
            cargarCabecero2(); // Llamar a la función para actualizar el cabecero
            //getVistaEgresos(); // Llamar a la función para actualizar la vista de egresos

            console.log(`Ingreso agregado: ${nuevoIngreso.getNombre()} : $${nuevoIngreso.getValor()}`);
            console.log(arrayIngresos);
            //Pintar array ingresos en html
            getVistaIngresos(); // Llamar a la función para actualizar la vista de ingresos
            
            //getVistaIngresos(); // Llamar a la función para actualizar la vista de ingresos
            //HTML para mostrar los ingresos
            //IngresosHTML = document.getElementById('ingreso-lista');
            //IngresosHTML.document.innerHTML += `INGRESOS44`;
            //getVistaIngresos(); // Llamar a la función para actualizar la vista de ingresos

        } else {
            console.error("Por favor, ingrese un nombre y un valor válido para el ingreso.");
        }
    } else if (tipoIngreso === 'egreso') {
        // Validación de los campos de egreso
        if (nombreIngreso && !isNaN(valorIngreso) && valorIngreso > 0) {
           
            // Crear un nuevo objeto Egreso y agregarlo al array de egresos
            const nuevoEgreso = new Egreso(nombreIngreso, valorIngreso);
            arrayEgresos.push(nuevoEgreso);
             // Sumar el egreso a  total  de egresos 
            totalEgresos = () => arrayEgresos.reduce((total, egreso) => total + egreso.getValor(), 0);
            // Llamar a la función para actualizar el cabecero
            cargarCabecero2(); // Llamar a la función para actualizar el cabecero
            //getVistaEgresos(); // Llamar a la función para actualizar la vista de egresos

            console.log(`Egreso agregado: ${nuevoEgreso.getNombre()} : $${nuevoEgreso.getValor()}`);
            console.log(arrayEgresos);
            //Pintar array egresos en html
        } else {
            console.error("Por favor, ingrese un nombre y un valor válido para el egreso.");
        }
    }
}
    //Pendientes 
    // Hay que evaluar si hacer una funcion para pintar los ingresos y egresos en el html en una sola funcion
    //Reemplazar variables de la funcion get Element ue correspondan a los ingresos y egresos

function getVistaIngresos() {
    // Obtener el elemento HTML donde se mostrarán los ingresos
    for (let i = 0; i < arrayIngresos.length; i++) {
        const elementoIngreso = arrayIngresos[i];
        const descripcion = elementoIngresoingreso.getNombre();
        const valor = elementoIngresoingreso.getValor();
        const id = elementoIngresoingreso.getID();
        // Crear un elemento HTML para mostrar el ingreso
    const ingresoHTML = document.getElementById('ingreso-lista');  
}

    export function eliminarIngresos(event) {
        if (event.target.classList.contains('eliminar-ingreso')) {
            const idIngreso = parseInt(event.target.dataset.id, 10);

            // Confirmando que arrayIngresos esté disponible
            arrayIngresos = arrayIngresos.filter(ingreso => {
                if (typeof ingreso.getID === 'function') {
                    return ingreso.getID() !== idIngreso;
                }
                return true; // mantiene el elemento si no tiene getID
            });

            console.log(`Ingreso con ID ${idIngreso} eliminado.`);
        }
    }

    export function eliminarEgresos(event) {
        if (event.target.classList.contains('eliminar-egreso')) {
            const idEgreso = parseInt(event.target.dataset.id, 10);

            // Confirma que arrayIngresos esté disponible
            arrayEgresos = arrayEgresos.filter(egreso => {
                if (typeof egreso.getID === 'function') {
                    return egreso.getID() !== idEgreso;
                }
                return true; // mantiene el elemento si no tiene getID
            });

            console.log(`Egreso con ID ${idEgreso} eliminado.`);
        }
    }

    
    
    
    //Funcion para Pintar dinamicamente el html del cabecero
    function cargarCabecero2() {

        // Actualizamos los datos del presupuesto disponible,Total de Ingresos,Total de Egresos y porcentaje de egreso
        let Totalpresupuesto =  totalIngresos()-totalEgresos() ;
        console.log("Total del presupuesto: " + Totalpresupuesto);//linea temporal para ver el total del presupuesto en consola
        let TotalpresupuestoHTML = `$${Totalpresupuesto.toFixed(2)}`+ ' MXN'; // Formateamos el total del presupuesto a dos decimales y agregamos la moneda
        console.log("Total del presupuesto disponible HTML: " + TotalpresupuestoHTML);// linea temporal para ver el total del presupuesto en consola
        document.getElementById('presupuesto').innerHTML = TotalpresupuestoHTML;

        // Carga valores totales de ingresos y egresos
        document.getElementById('ingresos').innerHTML = `$${totalIngresos().toFixed(2)}`+ ' MXN';;
        document.getElementById('egresos').innerHTML= `$${totalEgresos().toFixed(2)}`+ ' MXN';;

        // Porcentaje de Egreso, validar que totalIngresos() no sea cero para evitar división por cero
        if (totalIngresos() === 0) {
            porcentajeEgreso = 0; // Si no hay ingresos, el porcentaje de egreso es 0
        } else {
            porcentajeEgreso = ((totalEgresos() * 100)/ totalIngresos());
        }
        //Escribimos el valor de porcentaje-egresos en HTML 
        document.getElementById('porcentaje-egresos').innerHTML = `${porcentajeEgreso.toFixed(2)}%`;
        
        return { Totalpresupuesto, porcentajeIngreso,porcentajeEgreso };
//aqui me quede 



    }

    
    export function iniciarAplicacion() {
       
        // Llamar a la función para cargar el cabecero y mostrar los cálculos actualizados
        cargarCabecero2();
        
        console.log("Aplicación iniciada en app.mjs");
        console.log("Presupuesto inicial: " + "$" + Totalpresupuesto);
        console.log("Porcentaje de Egreso inicial: " + "$" + porcentajeEgreso.toFixed(2) + "%");
        console.log("Total de Ingresos inicial: " + "$" + totalIngresos());
        console.log("Total de Egresos inicial: " + "$" + totalEgresos());
    }


