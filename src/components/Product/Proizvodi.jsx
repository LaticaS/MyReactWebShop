import "./Proizvodi.scss";
import products from "../databooks.json";
import { CartContext } from "../../context/cart.jsx";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Proizvodi() {
  const { cartItems, addToCart } = useContext(CartContext);

  return (
    <>
      <h1>Ponuda 〱</h1>

      <div className="div-proizvodi">
        {products &&
          products.map((product) => {
            const { id } = product;
            return (
              <div className="div-book" key={product.id}>
                <Link to={`/product/${id}`} title="Klik za detalje proizvoda">
                  <img src={product.img} alt="book cover" />
                </Link>
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
    </>
  );
}

export { Proizvodi };
