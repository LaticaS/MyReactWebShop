import { useParams } from "react-router-dom"

function DetailedProductView(){
    const[product, setProduct]= useState({});
    const urlParams= useParams();
    const URLProductID = urlParams.id;

    console.log("ID from param", URLProductID);

    useEffect (() => {
        //kopiran primjer iz dummyjsona!
        fetch('https://dummyjson.com/products/' + URLProductID)
        .then(res => res.json())
        .then(json => {
            console.log("Product =>", json) 
        //setProductList(json.products)  
        setProduct(json);
    })     

    }, []);
    
    console.log("URL params DetailedProductsView:", urlParams)
    return(
        <div> {/** 
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        */}
        </div>
    )
}

export {DetailedProductView}