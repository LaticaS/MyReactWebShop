import "./Proizvodi.scss";
import products from "../databooks.json";
import { CartContext } from "../../context/cart.jsx";
import { useContext, useEffect, useState } from "react";
//import { PrikazKosarice } from "../Kosarica/Kosarica.jsx";

//const KosaricaContext = createContext();

function Proizvodi() {
  const [showModal, setshowModal] = useState(false);
  const { cartItems, addToCart } = useContext(CartContext);

  const toggle = () => {
    setshowModal(!showModal);
  };

  // const dodajKosarici = (book) => {
  //console.log("button clicked", book);
  //setBasket({ ...basket, items: [...basket.items, book] });
  //console.log("book in basket", product); //provjera da dodalo knjigu
  //};
  // const [basket, setBasket] = useState({ items: [] });
  // define initial values to pass to KosaricaContext
  // const appContextValues = {basket, setBasket};

  return (
    <>
      <h1>Ponuda 〱</h1>
      <div>
        {!showModal && (
          <button
            className="px-4 py-2 bg-warning text-white text-xs font-bold uppercase rounded"
            onClick={toggle}
          >
            U košarici ({cartItems.length})
          </button>
        )}
      </div>
      <div className="div-proizvodi">
        {products &&
          products.map((product) => {
            return (
              <div className="div-book" key={product.id}>
                <a href="" target="_blank" title="Detaljnije">
                  <img src={product.img} alt="book cover" />
                </a>
                <p>"{product.title}"</p>
                <p>
                  <em>{product.subtitle}</em>
                </p>
                <p>
                  <strong> {product.author} </strong>
                </p>
                <p style={{ padding: 5, color: "yellow", fontSize: "larger" }}>
                  {product.price} €
                </p>

                <br />
                <button onClick={() => addToCart(product)}>add to Cart</button>
              </div>
            );
          })}
      </div>
      {/*** <PrikazKosarice showModal={showModal} toggle={toggle} /> */}
    </>
  );
}

export { Proizvodi };
