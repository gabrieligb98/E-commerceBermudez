import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Navbard() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container className="justify-content-center">
          <Navbar.Brand>
            <div>Auto Parts The Racer's Edge</div>
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Navbar>
        <Container>
          <Nav className="me-auto">
            <Link className="nav-link" to="/">
              AutoPartes
            </Link>
            <Link className="nav-link" to="/Nosotros">
              Nosotros
            </Link>
            <Link className="nav-link" to="/Contacto">
              Contacto
            </Link>
            <CartWidget />
          </Nav>
        </Container>
      </Navbar>
      
      <Navbar  >
        <Container className="justify-content-center" >
             
          <Nav  >
            <Nav.Link className='cat-link'>Categorias</Nav.Link>   
            <Link className='nav-link'   to='/productos/Neumaticos'  >Neumaticos y llantas</Link>
            <Link className='nav-link' to='/productos/Carroceria' >Carroceria</Link>
            <Link className='nav-link' to='/productos/Opticas' >Opticas</Link>         
          </Nav>
          
        </Container>
      </Navbar>
    </>
  );
}

export default Navbard;
