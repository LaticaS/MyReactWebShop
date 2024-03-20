import { Button } from "react-bootstrap";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { KosaricaContext } from "../Product/Proizvodi.jsx";
import "./Kosarica.scss";

function Kosarica() {
    // const {basket} = useContext(KosaricaContext);  
    
    return(
        <div className="kosarica-wrapper">
            <main>
            <h1>Košarica</h1>
            <table>
                <thead>
            <tr>
                    <th>Proizvod</th>
                    <th>Količina</th>
                    <th>Cijena</th>
                    <th>Ukupna cijena</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>                                        
                    <tr>
                    <td>
                    <img src="https://znanje.hr/product-images/35948cb4-24d1-4ee6-b122-e555bb318f64.jpg" alt="" /> 
                    <p>Naslov knjige: </p>
                    </td>
                    <td>
                    <form action="">
                        <input type="number" name="količina" min="1" max="20" id="input-količina-proizvod" />
                    </form>
                    </td>
                    <td> €</td>
                    <td> €</td>
                    <td>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="red" className="bi bi-x-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                        </svg>                     
                    </td>  
                    </tr> 
                      

                      {/** 
                {basket && basket.items.map((item) => (
                            <tr key={item.id}>
                                <td>
                                    <img src={item.img} alt="" />
                                    <p>Naslov knjige: {item.title}</p>
                                </td>
                                <td>
                                    <form action="">
                                        <input type="number" name="količina" min="1" max="20" id="input-količina-proizvod" />
                                    </form>
                                </td>
                                <td>{item.price} €</td>
                                <td>Ukupna cijena</td>
                                <td>
                                    <button>Ukloni</button>
                                </td>
                            </tr>
                        ))}
                        */}
                                                                    
                </tbody>
                <tfoot>
                <tr>
                    <td>
                        <input type="text" className="promotivni-input" placeholder="Unijeti promotivni kod" />
                        <button>Priloži</button>
                    </td>
                    <td></td>
                    <td></td>                   
                    <td>
                        <p>Zbroj košarice: €</p>
                        <p>Popust: €</p>                        
                        <p><b>KOŠARICA UKUPNO: €</b></p>
                    </td>
                    <td></td>
                </tr>
                </tfoot>             
            </table>            

            <div className="div-buttoni">
            <Link to="/products"><Button>⪡ POVRATAK NA WEBSHOP</Button></Link>
            <Button>OČISTI KOŠARICU</Button>
            <Link to="/placanje"><Button>PLAĆANJE ⪢</Button></Link>
            </div>             

            </main>
        </div>
    )
}
export {Kosarica}