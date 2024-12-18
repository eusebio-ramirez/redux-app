import { useDispatch, useSelector } from "react-redux";
import useForm from "../hooks/useForm";
import InputText from "../InputText/InputText";
import { Col, Row } from "react-bootstrap";
import { addProducto } from "../features/producto/productoSlice";

const initialState = {
  nombre: "",
  precio: 0,
};

const Producto = () => {
  const {
    resetForm,
    handleChange,
    values: { nombre, precio },
  } = useForm(initialState);

  const products = useSelector((state) => state.producto.productos);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProducto({ nombre, precio }));
    resetForm();
  };

  return (
    <div>
      <span>Producto</span>
      <form onSubmit={handleSubmit}>
        <InputText
          label="Producto"
          type={"text"}
          value={nombre}
          name="nombre"
          onChange={handleChange}
        />

        <div>
          <label>Precio:</label>
          <input
            type="number"
            name="precio"
            value={precio}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Enviar</button>
        <button type="button" onClick={resetForm}>
          Reiniciar
        </button>
      </form>
      <div>
        {products.map((product, index) => (
          <Row key={index}>
            <Col md={6}>Nombre: {product.nombre}</Col>
            <Col md={6}>Precio: {product.precio}</Col>
          </Row>
        ))}
      </div>
    </div>
  );
};

export default Producto;
