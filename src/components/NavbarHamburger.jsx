import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function NavbarHamburger() {
  return (
    <Navbar expand="lg" className="text-success" style={{backgroundImage:"linear-gradient(orange, gold)"}}>
      <Container>
        <Navbar.Brand href="#home" className="text-success font-weight-bold">
        <img 
              src="./book_PNG51049.png"
              id="logo"
              alt="Logo Booki"
              title="Prodaja knjiga Booki"
              width="100px"
              height="100px"            
              className="d-inline-block align-top"              
            />
            <p>Booki WebShop</p>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home"><Link to="/">Početna</Link></Nav.Link>             

            <NavDropdown title="Knjige" id="basic-nav-dropdown">
              <Link to="/products">
              <NavDropdown.Item href="#action/3.1">Beletristika</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Publicistika
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Stručna literatura</NavDropdown.Item>              
              <NavDropdown.Item href="#action/3.4">
                Djeca i mladi
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.5">
                Rječnici
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.6">
                Enciklopedije
              </NavDropdown.Item>
              </Link>         
            </NavDropdown>

            <Nav.Link href="#link"><Link to="/contact">Kontakt</Link></Nav.Link>            
            <Nav.Link href="#link"><Link to="/placanje">Narudžba</Link></Nav.Link>            

            <Form inline>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Pretraži Booki webshop"
              className=" mr-sm-2"
            />
          </Col>
          <Col xs="auto">
            <Button type="submit">Submit</Button>
          </Col>
        </Row>
      </Form>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarHamburger;