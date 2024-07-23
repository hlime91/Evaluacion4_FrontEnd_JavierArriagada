import { Form, Button } from "react-bootstrap";

const Formulario = (props) => {
  // Se cambia boton con el operador ternario

  return (
    <Form id="DatosProducto" className="Formulario">
      <label>Nombre Producto</label>
      <input
        type="text"
        className="form-control formulario"
        id="txtNombreProducto"
        name="NombreProducto"
      />
      <label>Precio Producto</label>
      <input
        type="text"
        className="form-control formulario"
        id="txtPrecioProducto"
        name="PrecioProducto"
      />
      <label>Cantidad Producto</label>
      <input
        type="text"
        className="form-control formulario"
        id="txtCantidadProducto"
        name="CantidadProducto"
      />
      <br></br>

      {props.cambiarBoton ? (
        <Button
          className="btn btn-success"
          onClick={() => {
            props.agregarActualizado();
          }}
        >
          Actualizar
        </Button>
      ) : (
        <Button
          className="btn btn-success"
          onClick={() => {
            props.agregar();
          }}
        >
          Agregar
        </Button>
      )}
    </Form>
  );
};

export default Formulario;
