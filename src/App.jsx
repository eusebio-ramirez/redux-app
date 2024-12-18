import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import Cliente from "./Cliente/Cliente";
import Producto from "./Producto/Producto";

function App() {
  return (
    <Container>
      <Row>
        <Col md={6}>
          <Cliente />
        </Col>
        <Col md={6}>
          <Producto />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
