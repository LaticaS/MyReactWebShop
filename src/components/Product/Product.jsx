import { Outlet, Link } from "react-router-dom"

function Product(){
    return(
        <div className={"product-wrapper"}>
        <h2>Product some-id</h2>
        <Link to={"/product/2"}>Go to product with ID: 2</Link>
        <Outlet />
        </div>
    )
}
export {Product}