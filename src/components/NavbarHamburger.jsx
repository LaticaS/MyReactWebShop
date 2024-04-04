import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function NavbarHamburger() {
  return (
    <Navbar expand="md" className="text-success" style={{backgroundImage:"linear-gradient(orange, gold)"}}>
      <Container>
        <Navbar.Brand href="#home">
          <Link to="/" className='text-decoration-none text-success'>
        <img 
              src="./book_PNG51049.png"
              id="logo"
              alt="Logo Booki"
              title="Booki, prodaja knjiga"
              width="100px"
              height="100px"            
              className="d-inline-block align-top"              
            /> 
            <p>Booki Webshop</p>
            </Link>          
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='border-success' />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Row>
               <Col xs="auto">
            <Form inline>
        <Row>
        <Col xs="auto"><Nav.Link href="#link"></Nav.Link></Col>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Pretraži Booki webshop"
              className="mr-sm-2"
              style={{width:300}}
            />
          </Col>
          <Col xs="auto">   
            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="darkgreen" className="bi bi-search" id="search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
            </svg>            
          </Col>
        </Row>
      </Form>
      </Col>

      <Col xs="auto">
      <Nav.Link href="#link"><Link to="/cart">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="darkgreen" className="bi bi-basket" id="Kosara" viewBox="0 0 16 16">
        <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9zM1 7v1h14V7zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5"/>
        </svg>
      </Link></Nav.Link>
      </Col>
      
      <Col xs="auto"><Nav.Link href="#link"></Nav.Link></Col>

      <Col xs="auto">
      <Nav.Link href="#link">
      <a href="mailto:info@booki.hr" className="nav1" target="_blank" title="Mail to: info@booki.hr">info@booki.hr</a>
      <br />
      <a href="tel:+385022123340" className="nav1" target="_blank" title="Phone Booki: Croatia +385">022/123 340</a>
      </Nav.Link>
      </Col>

      <Col xs="auto">
      <Nav.Link href="#link">
      <a href="https://www.facebook.com/" target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="darkgreen" className="bi bi-facebook" id="Face" viewBox="0 0 16 16">
        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
        </svg>                        
      </a>
      </Nav.Link> 
      </Col>  
      <Col xs="auto">   
      <Nav.Link href="#link">
      <a href="https://www.instagram.com/" target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="darkgreen" className="bi bi-instagram" id="Insta" viewBox="0 0 16 16">
        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
        </svg>                        
        </a>
      </Nav.Link> 
      </Col> 
      <Col xs="auto">
      <Nav.Link href="#link">
      <a href="https://twitter.com/" target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="darkgreen" className="bi bi-twitter-x" id="Twitt" viewBox="0 0 16 16">
        <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
        </svg>                        
        </a>
      </Nav.Link>
      </Col>
      </Row>

      <Row className='lead'>
      <Col xs="auto"><Nav.Link href="#link"></Nav.Link></Col>
            <Col xs="auto">
            <Nav.Link href="#home"><Link to="/" className='text-decoration-none text-success'>POČETNA</Link></Nav.Link>
            </Col>
            <Col xs="auto"> 
            <NavDropdown title="KNJIGE" id="basic-nav-dropdown">
              <Link to="/products" className='text-decoration-none text-success'>
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
            </Col>

            <Col xs="auto">
            <Nav.Link href="#link"><Link to="/about" className='text-decoration-none text-success'>O NAMA</Link></Nav.Link>
            </Col>  
            <Col xs="auto">
            <Nav.Link href="#link"><Link to="/contact" className='text-decoration-none text-success'>KONTAKT</Link></Nav.Link>
            </Col>  
            <Col xs="auto">    
            <Nav.Link href="#link"><Link to="/placanje" className='text-decoration-none text-success'>NARUDŽBA</Link></Nav.Link>
            </Col>  
            </Row> 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarHamburger;