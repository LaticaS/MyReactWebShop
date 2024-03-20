import { Container, Row, Card, Button } from "react-bootstrap"

function PojediniProizvod() {
    
    return( 
        <> 
            <Container>
            <Row>
            <Card style={{ width: '18rem' }} className="m-3">
      <Card.Img src="https://znanje.hr/product-images/35948cb4-24d1-4ee6-b122-e555bb318f64.jpg" variant="top"/>
      <Card.Body>
        <Card.Title>Card Title - naslov knjige</Card.Title>
        <Card.Text>
          <p><em>podnaslov</em></p>
          <p><strong>autor</strong></p>
          <p>Opis proizvoda</p>
          <p>cijena</p>          
        </Card.Text>       
        <Button>DODAJ U KOŠARICU</Button>
      </Card.Body>
    </Card>
    </Row>    
    </Container>
    </>            
    )
}

export {PojediniProizvod}