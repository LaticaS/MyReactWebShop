import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "./Newsletter.scss"

function Newsletter() {
  return (
    <div className='newsletter-wrapper' style={{backgroundImage:"linear-gradient(orange, darkgreen)"}}>
    <h3>Pratite naše akcije i ponude</h3>
        <h4>Newsletter</h4>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">        
        <Form.Control type="email" placeholder="Email" />        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicText">        
        <Form.Control type="text" placeholder="Ime i prezime" />
      </Form.Group>      
      <Button className='newsletter-dugme' type="submit">
        Potvrđujem prijavu
      </Button>
    </Form>    
    </div> 

  );
}

export default Newsletter;