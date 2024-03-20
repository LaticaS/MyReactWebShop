import { Link } from "react-router-dom"
import { Container, Row, Card, Button } from "react-bootstrap"
import { useEffect } from "react"

function SingleProduct({product}){
    //If this component has props.product use props
    //If not populate product with API Request to the single product

    console.log("product", product)

    return( 
      <>  
          {/** 
          <div className={"single-product"}>
            <h2>Some single product title</h2>
            <Link to="/about">Go to about page</Link>
            <br />
            <a href="/about">go to about</a>
            </div>            
            */}                   

            <Container>
            <Row>
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.thumbnail} />
      <Card.Body>
        <Card.Title>Card Title{product.title}</Card.Title>
        <Card.Text>
          {product.description}
        </Card.Text>
       {/**  <Link to={"/product/"+product.id}>Detailed view</Link> */}
        <Button as={Link} to={"/product/" + product.id} variant="primary">Detailed View</Button>
      </Card.Body>
    </Card>
    </Row> 
    </Container>
    </>
            
    )
}
export {SingleProduct}