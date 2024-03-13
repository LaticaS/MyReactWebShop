import { Link } from "react-router-dom"
import { Product } from "./Product.jsx"
import { SingleProduct } from "./SingleProduct"
import { Container, Row } from "react-bootstrap"
import {Col, Container, Row} from "react-bootstrap"
import { useEffect, useState } from "react"


function ProductList({products}) {
    const[productList, setProductList]= useState()

    useEffect(() => {
        console.log("Products from Home.js", products);
    }, []);   

    return(
        <Container>
            <Row>
            {products?.map(product => {
                //console.log("Each product in the list: ", product)
                return(                    
                    <Col key={product.id} className={"mb-4"}>
                        <SingleProduct product={product} />
                    </Col>                    
                )
            }
            )}
          </Row>
          </Container>  

    )
}
export {ProductList}