import { useEffect, useState } from "react"
import { Product } from "../Product/Product.jsx"
import { ProductList } from "../Product/ProductList.jsx"

function Home(){
    const[productList, setProductList] = useState([]);
    useEffect (() => {
        //kopiran primjer iz dummyjsona!
        fetch('https://dummyjson.com/products?limit=6')
        .then(res => res.json())
        .then(json => {
            console.log("Products =>", json.products) 
        setProductList(json.products)  
    })     

    }, []);


    return(
        <div className={"home"}>
            <div className={"sidebar"}>
                <h2>Amazing WebShop - Home page</h2>
                <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                    <li>Item 4</li>
                    <li>Item 5</li>
                </ul> 

                <ProductList products={productList} /> 

            </div>

        </div>
    )
}

export {Home}