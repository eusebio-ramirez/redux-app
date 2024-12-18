import { useDispatch, useSelector } from "react-redux";
import useForm from "../hooks/useForm";
import { addCliente } from "../features/cliente/clienteSlice";
import { Col, Row } from "react-bootstrap";

const initialState = {
  nombre: "",
  telefono: "",
};

const Cliente = () => {
  const clients = useSelector((state) => state.cliente.clientes);
  const dispatch = useDispatch();
  const {
    resetForm,
    handleChange,
    values: { nombre, telefono },
  } = useForm(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addCliente({ nombre, telefono }));
    resetForm();
  };

  return (
    <div>
      <span>Cliente</span>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            name="nombre"
            value={nombre}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Telefono:</label>
          <input
            type="text"
            name="telefono"
            value={telefono}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Enviar</button>
        <button type="button" onClick={resetForm}>
          Reiniciar
        </button>
      </form>
      <div>
        {clients.map((client, index) => (
          <Row key={index}>
            <Col md={6}>Nombre: {client.nombre}</Col>
            <Col md={6}>Telefono: {client.telefono}</Col>
          </Row>
        ))}
      </div>
    </div>
  );
};

export default Cliente;
