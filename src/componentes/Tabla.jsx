import { Button } from "react-bootstrap";

const Tabla = (props) => {
 
 
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Nombre Producto</th>
          <th>Precio Producto</th>
          <th>Cantidad Producto</th>
          <th>&nbsp;</th>
        </tr>
        {props.arrayProductos.map((producto) => {

          return (
            //Se hace un loop con los objetos del array. Cada objeto tiene botones que llaman las funciones del componente
            <tr>
              <th>{producto.NombreProducto}</th>
              <th>{producto.PrecioProducto}</th>
              <th>{producto.CantidadProducto}</th>
              <th>&nbsp;</th>
              <Button onClick={()=>{props.actualizar(producto)}}>Editar</Button>
              <Button onClick={() =>{props.eliminar(producto)}}>Eliminar</Button>
            </tr>
          );
        })}
      </thead>
      <tbody ></tbody>
    </table>
  );
};
export default Tabla;
