import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Newsletter.scss"

function Newsletter() {
  return (

    <div className='newsletter-wrapper'>
    <h3>Prvi saznajte za akcije i ponude</h3>
        <h4>Prijava na newsletter</h4>      
    <Navbar className="bg-light justify-content-around p-4">    
      <Form inline>
        <InputGroup>          
          <Form.Control          
            placeholder="Ime i prezime"
            aria-label="Ime i prezime"            
          />
        </InputGroup>
      </Form>
      <Form inline>
        <Row>
          <Col xs="auto">
            <Form.Control            
              type="text"
              placeholder="Email"              
            />
          </Col>
          <Col xs="auto">
            <Button type="submit" className='newsletter-dugme'>Potvrđujem prijavu</Button>
          </Col>
        </Row>
      </Form>
    </Navbar>
    </div> 

  );
}

export default Newsletter;