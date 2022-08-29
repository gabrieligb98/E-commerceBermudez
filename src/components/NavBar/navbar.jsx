import CartWidget from "./CartWidget";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Navbard() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home" >
            Auto Parts The Racer's Edge
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#autopartes">Autopartes</Nav.Link>
            <Nav.Link href="#neumaticos">Neumaticos y Llantas</Nav.Link>
            <Nav.Link href="#carroceria">Carroceria</Nav.Link>
            <Nav.Link href="#contacto">Contacto</Nav.Link>
            <CartWidget/>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbard;
