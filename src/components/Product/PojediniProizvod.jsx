import products from "../databooks.json";
import "./PojediniProizvod.scss";
import { useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cart.jsx";
import { useContext } from "react";

function PojediniProizvod() {
  let { id } = useParams();
  const { addToCart } = useContext(CartContext);

  const product = products.find((product) => String(product.id) === id);

  return (
    <>
      <h1>Detaljno 〱</h1>
      <div className="pojedini-proizvod-wrapper" key={id}>
        <div className="div-img-pojedini-proizvod">
          <img
            src={product.img}
            variant="top"
            alt="naslovnica"
            title={product.title + "; " + product.author}
          />
        </div>
        <div className="div-podaci-pojedini-proizvod">
          <h2>
            <em> "{product.title}" </em>
          </h2>
          <h4>
            <strong>{product.author}</strong>
          </h4>
          <hr />
          <h4 className="h-cijena">Cijena: {product.price} €</h4>
          <hr />
          <button className="button-dodaj" onClick={() => addToCart(product)}>
            DODAJ U KOŠARICU
          </button>
          <hr />
          <p>
            Naslov: {product.title} - {product.subtitle}
          </p>
          <hr />
          <p>Kratki opis: {product.opis}</p>
          <hr />
          <p>Godina izdanja: {product.published}</p>
          <hr />

          <p>Izdavač: {product.publisher}</p>
          <hr />

          <p>Broj stranica: {product.pages}</p>
          <hr />

          <p>Barkod: {product.isbn}</p>
          <hr />

          <p className="p-opis">
            Sažetak sadržaja: <br />
            {product.description}
          </p>
        </div>
      </div>
      <br />
      <br />
      <div className="div-buttoni">
        <Link to="/categories">
          <Button className="buttoni-navigacija">⪡ POVRATAK NA WEBSHOP</Button>
        </Link>
        <Link to="/placanje">
          <Button className="buttoni-navigacija">PLAĆANJE ⪢</Button>
        </Link>
      </div>
    </>
  );
}

export { PojediniProizvod };
