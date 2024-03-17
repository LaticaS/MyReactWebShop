import { Link } from "react-router-dom"
import { Container, Row, Button } from "react-bootstrap"
import { useEffect } from "react"
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function ProizvodBoot(){
    //If this component has props.product use props
    //If not populate product with API Request to the single product    

    return( 
      <>

<CardGroup>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>

      <br />


      <Container>
            <Row>
            <CardGroup>
                <Card>
      <Card.Img variant="top" src="https://www.zuzi.hr/media/img/products/57454/zivi-svijet-moja-prva-enciklopedija-B4sV.webp" width={100} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
         Text kartice
        </Card.Text>
       {/**  <Link to={"/product/"+product.id}>Detailed view</Link> */}
        <Button variant="primary">Detailed View</Button>
      </Card.Body>
      </Card>

      <Card>
      <Card.Img variant="top" src="https://www.zuzi.hr/media/img/products/57454/zivi-svijet-moja-prva-enciklopedija-B4sV.webp"  width={100} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
         Text kartice
        </Card.Text>
       {/**  <Link to={"/product/"+product.id}>Detailed view</Link> */}
        <Button variant="primary">Detailed View</Button>
      </Card.Body>
      </Card>

      <Card>
      <Card.Img variant="top" src="https://www.zuzi.hr/media/img/products/57454/zivi-svijet-moja-prva-enciklopedija-B4sV.webp"  width={100} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
         Text kartice
        </Card.Text>
       {/**  <Link to={"/product/"+product.id}>Detailed view</Link> */}
        <Button variant="primary">Detailed View</Button>
      </Card.Body>
      </Card>
    </CardGroup>
    </Row> 
    </Container>
    </>
            
    )
}
export {ProizvodBoot}