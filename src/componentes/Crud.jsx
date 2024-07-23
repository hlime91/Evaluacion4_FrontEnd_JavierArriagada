//CRUD React, hecho por Javier Arriagada
import { useState } from "react";
import React from "react";
import Formulario from "./Formulario";
import Tabla from "./Tabla";
import NavbarInicio from "./NavbarInicio";
import "./Crud.css";

function Crud() {
  //Se declaran las variables de estado con useState para el arreglo

  //El array de productos empieza con algunos objetos ya, para efectos de testeo
  let [arrayProductos, setarrayProductos] = useState([
    {
      IDProducto: "01",
      NombreProducto: "PC",
      PrecioProducto: 399900,
      CantidadProducto: 2,
    },
    {
      IDProducto: "02",
      NombreProducto: "Impresora",
      PrecioProducto: 90900,
      CantidadProducto: 2,
    },
    {
      IDProducto: "03",
      NombreProducto: "Teclado",
      PrecioProducto: 19990,
      CantidadProducto: 2,
    },
  ]);
  // Tambien se declaran la variable de estado para activar el formulario y la tabla, ademas de la variable de estado de
  //id del producto a actualizar
  let [cambiarBoton, setCambiarBoton] = useState(false);
  let [idProductoActualizado, setIDProductoActualizado] = useState("");
  let [verFormularioTabla, setVerFormularioTabla] = useState(false);

  // Estas son las funciones para guardar y obtener los datos de local storage
  const GuardarLocal = () => {
    localStorage.setItem("datosProducto", JSON.stringify(arrayProductos));
  };

  const ObtenerLocal = () => {
    return JSON.parse(localStorage.getItem("datosProducto"));
  };

  //Funciones para ver Tabla, Formulario y solo Inicio

  const SoloInicio = () => {
    setVerFormularioTabla(false);
  };
  const VerFormularioTabla = () => {
    setVerFormularioTabla(true);
  };

  // Se declaran funciones de CRUD

  //Funcion de Agregar Producto
  const AgregarProducto = () => {
    GuardarLocal();
    let arrayParaAgregar = ObtenerLocal();
    let CantidadProducto = document.getElementById("txtCantidadProducto").value;
    let NombreProducto = document.getElementById("txtNombreProducto").value;
    let PrecioProducto = document.getElementById("txtPrecioProducto").value;
    let IDProducto = Math.random();
    let NuevoProducto = {
      IDProducto: IDProducto,
      NombreProducto: NombreProducto,
      PrecioProducto: PrecioProducto,
      CantidadProducto: CantidadProducto,
    };
    arrayParaAgregar.push(NuevoProducto);
    // Se actualiza estado de array de Productos
    setarrayProductos(arrayParaAgregar);
    // Se limpia formulario
    document.getElementById("txtCantidadProducto").value = "";
    document.getElementById("txtNombreProducto").value = "";
    document.getElementById("txtPrecioProducto").value = "";
  };

  //Funcion para mostrar producto que se quiere actualizar en la tabla
  const MostrarProducto = (Producto) => {
    //Se cambia boton en componente Formulario
    setCambiarBoton(true);
    // Se actualiza ID de producto actualizado en el estado, para luego ser usado por otras funciones
    setIDProductoActualizado(Producto.IDProducto);
    document.getElementById("txtNombreProducto").value =
      Producto.NombreProducto;
    document.getElementById("txtPrecioProducto").value =
      Producto.PrecioProducto;
    document.getElementById("txtCantidadProducto").value =
      Producto.CantidadProducto;
  };

  //Funcion de actualizar Producto
  const ActualizarProducto = () => {
    GuardarLocal();
    //SE genera nuevo array desde los datos de local storage
    let arrayParaActualizar = ObtenerLocal();

    let NombreProducto = document.getElementById("txtNombreProducto").value;

    let PrecioProducto = document.getElementById("txtPrecioProducto").value;

    let CantidadProducto = document.getElementById("txtCantidadProducto").value;
    //Se obtiene estado de id de producto actualizado, desde la funcion MostrarProducto
    let IDProducto = idProductoActualizado;
    //Se crea nuevo objeto de producto actualizado
    let productoActualizado = {
      IDProducto: IDProducto,
      NombreProducto: NombreProducto,
      PrecioProducto: PrecioProducto,
      CantidadProducto: CantidadProducto,
    };
    //Se agrega a nuevo array
    let total = arrayParaActualizar.length;
    for (let i = 0; i < total; i++) {
      let producto = arrayParaActualizar[i];
      if (producto.IDProducto === IDProducto) {
        arrayParaActualizar[i] = productoActualizado;
      }
    }
    // Se actualiza estado de array de Productos
    setarrayProductos(arrayParaActualizar);
  };

  //Funcion de eliminar productos
  const EliminarProducto = (Producto) => {
    GuardarLocal();
    // Creamos dos array: el original obtenido desde local storage, y un array nuevo para eliminar los elementos borrados
    let primerArrayParaEliminar = ObtenerLocal();
    let arrayParaEliminar = [];
    // Filtramos el array original para quedar con el nuevo array
    let total = primerArrayParaEliminar.length;
    for (let i = 0; i < total; i++) {
      let producto = primerArrayParaEliminar[i];
      if (producto.IDProducto !== Producto.IDProducto) {
        arrayParaEliminar.push(producto);
      }
    }
    // Se actualiza estado de array de Productos
    setarrayProductos(arrayParaEliminar);
  };

  //Se importa un navbar de inicio
  // Se envuelven a los componentes Tabla y Formulario en condicionales con el operador &&, para que dependan de una 
  //variable booleana
  // Se baja array de productos a Tabla, ademas de las funciones a las que accederan los botones de mostrar y Borrar de cada producto
  // Se bajan funciones de Agregar Producto y Actualizar Producto a botones de formulario, que aparecen segun el booleano cambiarBoton
  return (
    <div>
      <NavbarInicio
        soloinicio={SoloInicio}
        clickparaverTablaFormulario={VerFormularioTabla}
      ></NavbarInicio>

      {verFormularioTabla && (
        <div>
          <h1>Ingreso y Modificacion de Productos</h1>
          <Formulario
            agregar={AgregarProducto}
            agregarActualizado={ActualizarProducto}
            cambiarBoton={cambiarBoton}
          ></Formulario>
          <br />
          <br />
          <Tabla
            arrayProductos={arrayProductos}
            actualizar={MostrarProducto}
            eliminar={EliminarProducto}
          ></Tabla>
        </div>
      )}
    </div>
  );
}

export default Crud;
