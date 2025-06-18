// Curso: Programación  JavaScript I Tecmilenio
// Autor: Jose Bernardo Moya Jimenez
// Email:bmjimenez@hotmail.com
// Profesor: Alan Jimenez
// Fecha: 2023-10-01
// Descripción: Este archivo contiene las funciones principales de la aplicación, incluyendo la inicialización,
// la adición de ingresos y egresos, y la actualización del cabecero con los totales y porcentajes.

// Importación de las clases Ingreso y Egreso
import Ingreso from './Ingreso.mjs';
import Egreso from './Egreso.mjs';

// Inicialización de los arreglos para almacenar ingresos y egresos
let arrayIngresos = [];
let arrayEgresos = [];

// Funciones para calcular el total de ingresos y egresos
 let totalIngresos = () => arrayIngresos.reduce((total, ingreso) => total + ingreso.getValor(), 0);
 let totalEgresos = () => arrayEgresos.reduce((total, egreso) => total + egreso.getValor(), 0);

// Inicializando variables para almacenar el total del presupuesto, porcentaje de ingreso y porcentaje de egreso
let Totalpresupuesto = 0;
let porcentajeIngreso = 0;
let porcentajeEgreso = 0;

window.onload = function () {
    // Con esto podemos ver los valores de las variables en consola
    window.ingresos = arrayIngresos
    window.egresos = arrayEgresos

    // Eventos para los botones de agregar ingresos y egresos
    document.getElementById('agregar_btn').addEventListener('click', agregarElemento);

}


// Función para agregar un elemento a cualquiera de los array de ingresos y egresos
export function agregarElemento() 
{
// Leemos valores del formulario
    const tipoIngreso = document.getElementById('tipo').value;
    const nombreIngreso = document.getElementById('descripcion').value;
    const valorIngreso = parseFloat(document.getElementById('valor').value)|| 0;
    // Asignamos los valores a las variables globales para poder usarlas en otras funciones
    window.tipoIngreso = tipoIngreso
    window.nombreIngreso = nombreIngreso
    window.valor = valorIngreso

    // Validación del tipo de ingreso (ingreso o egreso)
    if (tipoIngreso === 'ingreso') {
        // Validación de los campos de ingreso
        if (nombreIngreso && !isNaN(valorIngreso) && valorIngreso > 0) {
            const nuevoIngreso = new Ingreso(nombreIngreso, valorIngreso);
            arrayIngresos.push(nuevoIngreso);
             // Sumar el ingreso a  total  de Ingresos 
            totalIngresos = () => arrayIngresos.reduce((total, ingreso) => total + ingreso.getValor(), 0);
            
            cargarCabecero2(); // Llamar a la función para actualizar el cabecero
            cargarIngresos(); //  //Pintar array ingresos en index.html
        } else {
            console.log("Por favor, ingrese un nombre y un valor válido para el ingreso.");
        }
    } else if (tipoIngreso === 'egreso') {
        window.valorEgreso = valorIngreso // esta variable no se usa ?
        // Validación de los campos de egreso
        if (nombreIngreso && !isNaN(valorIngreso) && valorIngreso > 0) {
           
            // Crear un nuevo objeto Egreso y agregarlo al array de egresos
            const nuevoEgreso = new Egreso(nombreIngreso, valorIngreso);
            arrayEgresos.push(nuevoEgreso);
             // Sumar el egreso a  total  de egresos 
            totalEgresos = () => arrayEgresos.reduce((total, egreso) => total + egreso.getValor(), 0);
            
            cargarCabecero2(); // Llamar a la función para actualizar el cabecero
            cargarEgresos(); // pintar array egresos en index.html
        } else {
            console.log("Por favor, ingrese un nombre y un valor válido para el egreso.");
        }
    }
    // Limpiar los campos de entrada después de agregar el ingreso o egreso
    document.getElementById('descripcion').value = '';
    document.getElementById('valor').value = '';
}

// Función para mostrar los ingresos en la lista_ingresos en HTML
const cargarIngresos=() => 
{
    // Crear un elemento HTML para mostrar el ingreso
    const listaIngresos = document.getElementById('lista_ingresos');
    listaIngresos.innerHTML = ''; // Limpiar la lista antes de agregar nuevos elementos
    // Obtener el elemento HTML donde se mostrarán los ingresos
    for (let i = 0; i < arrayIngresos.length; i++) {
        const elementoIngreso = arrayIngresos[i];
        const descripcion = elementoIngreso.getNombre();
        const valor = elementoIngreso.getValor();
        const id = elementoIngreso.getID();

        // Crear un nuevo ingreso en HTML dentro del contenedor lista_ingresos
          listaIngresos.innerHTML += `
                                <div class="elemento limpiarEstilos">
                                        <div class="elemento_descripcion">
                                            ${descripcion}
                                        </div>
                                    <div class="derecha limpiarEstilos">
                                            <div class="elemento_valor">
                                            ${'+' + valor.toFixed(2)} MXN
                                            </div>

                                        <div class="elemento_eliminar">
                                            <button class="elemento_eliminar--btn" data-id="${id}" onclick="eliminarIngreso(${id})">
                                            
                                                <ion-icon name="close-circle-outline"></ion-icon>
                                            </button>
                                        </div><!-- termina elemento_eliminar-->
                                    </div><!termina derecha limpiarEstilos-->                        
                                </div><!-- termina elemento limpiarEstilos-->
                                `;
    }
}   

    

// Función para mostrar los egresos en la lista-egresos en HTML
const cargarEgresos= () => 
{
    // Crear un elemento HTML para mostrar el egreso
    const listaEgresos = document.getElementById('lista_egresos');
    listaEgresos.innerHTML = ''; // Limpiar la lista antes de agregar nuevos elementos
    // Obtener el elemento HTML donde se mostrarán los ingresos
    for (let i = 0; i < arrayEgresos.length; i++)
     {
        const elementoEgreso = arrayEgresos[i];
        const descripcion = elementoEgreso.getNombre();
        const valor = elementoEgreso.getValor();
        const id = elementoEgreso.getID();

        // Crear un nuevo ingreso en HTML dentro del contenedor lista_egresos
          listaEgresos.innerHTML += `
                                <div class="elemento limpiarEstilos">
                                        <div class="elemento_descripcion">
                                            ${descripcion}
                                        </div>
                                    <div class="derecha limpiarEstilos">
                                            <div class="elemento_valor">
                                            ${-valor.toFixed(2)} MXN
                                            </div>

                                        <div class="elemento_eliminar">
                                            <button class="elemento_eliminar--btn" data-id="${id}" onclick="eliminarEgreso(${id})">
                                                <ion-icon name="close-circle-outline"></ion-icon>
                                            </button>
                                        </div><!-- termina elemento_eliminar-->
                                    </div><!termina derecha limpiarEstilos-->                        
                                </div><!-- termina elemento limpiarEstilos-->
                                `;

    }   
}

// Función para eliminar un ingreso por su ID
export function eliminarIngreso(id) {
let resultado = window.confirm("¿Estás seguro de que quieres eliminar este registro?");
if (resultado) {
  // El usuario hizo clic en "Aceptar"
   // Aquí va el código para eliminar el elemento
  arrayIngresos = arrayIngresos.filter(ingreso => ingreso.getID() !== id);
  console.log(`Ingreso con ID ${id} eliminado.`);
 
} else {
  // El usuario hizo clic en "Cancelar"
  // Aquí va el código para manejar la cancelación
  console.log("Eliminación cancelada");
  window.alert("Eliminación cancelada");
  
}
    cargarCabecero2(); // actualiza los totales y porcentajes
    cargarIngresos(); // vuelve a pintar la lista
    
}
window.eliminarIngreso = eliminarIngreso;  

// Función para eliminar un egreso por su ID
export function eliminarEgreso(id) {
    let resultado = window.confirm("¿Estás seguro de que quieres eliminar este registro?");
if (resultado) {
  // El usuario hizo clic en "Aceptar"
    // Aquí va el código para eliminar el elemento
    arrayEgresos = arrayEgresos.filter(egreso => egreso.getID() !== id);
    console.log(`Egreso con ID ${id} eliminado.`);
    } else {
  // El usuario hizo clic en "Cancelar"
  console.log("Eliminación cancelada");
  window.alert("Eliminación cancelada");
  
}
    cargarCabecero2();   // actualiza los totales y porcentajes
    cargarEgresos();     // vuelve a pintar la lista de egresos
    
}
window.eliminarEgreso = eliminarEgreso; // necesario para que funcione desde el HTML
    
//Funcion para Pintar dinamicamente el html del cabecero
function cargarCabecero2() 
{

    // Actualizamos los datos del presupuesto disponible,Total de Ingresos,Total de Egresos y porcentaje de egreso
    let Totalpresupuesto =  totalIngresos()-totalEgresos() ;
    console.log("Total del presupuesto: " + Totalpresupuesto);//linea temporal para ver el total del presupuesto en consola
   let TotalpresupuestoHTML
    if (Totalpresupuesto === 0) {
        TotalpresupuestoHTML = `$${(0).toFixed(2)} MXN`;
    }else if (Totalpresupuesto < 0) {
    TotalpresupuestoHTML = `-$${Math.abs(Totalpresupuesto).toFixed(2)} MXN`;
    }else {
    TotalpresupuestoHTML = `+$${Totalpresupuesto.toFixed(2)} MXN`;
}


    console.log("Total del presupuesto disponible HTML: " + TotalpresupuestoHTML);// linea temporal para ver el total del presupuesto en consola
    document.getElementById('presupuesto').innerHTML = TotalpresupuestoHTML;

    // Carga valores totales de ingresos y egresos
    document.getElementById('ingresos').innerHTML = `$${totalIngresos().toFixed(2)}`+ ' MXN';;
        if (totalEgresos() === 0) {
            document.getElementById('egresos').innerHTML = '$'+`0.00`+ ' MXN'; // Si no hay egresos, mostrar 0
        } else
        {
        document.getElementById('egresos').innerHTML= "-" + `$${totalEgresos().toFixed(2)}`+ ' MXN';
        }
        // Porcentaje de Egreso, validar que totalIngresos() no sea cero para evitar división por cero
        if (totalIngresos() === 0) {
            porcentajeEgreso = 0; // Si no hay ingresos, el porcentaje de egreso es 0
        } else {
            porcentajeEgreso = ((totalEgresos() * 100)/ totalIngresos());
        }
        //Escribimos el valor de porcentaje-egresos en HTML 
        document.getElementById('porcentaje-egresos').innerHTML =  "+" +`${porcentajeEgreso.toFixed(2)}%`;

        return { Totalpresupuesto, porcentajeIngreso,porcentajeEgreso };    
    }
 
    // Función para iniciar la aplicación, se ejecuta al cargar la página index.html
    export function iniciarAplicacion() {
       console.log("Iniciando la aplicación...");
        // Llamar a la función para cargar el cabecero y mostrar los cálculos actualizados
        cargarCabecero2();
        
        console.log("Aplicación iniciada en app.mjs");
        console.log("Presupuesto inicial: " + "$" + Totalpresupuesto);
        console.log("Porcentaje de Egreso inicial: " + "$" + porcentajeEgreso.toFixed(2) + "%");
        console.log("Total de Ingresos inicial: " + "$" + totalIngresos());
        console.log("Total de Egresos inicial: " + "$" + totalEgresos());
    }


