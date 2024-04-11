import products from "../databooks.json";
import "./PojediniProizvod.scss";
import { useParams } from "react-router-dom";

function PojediniProizvod() {
  let { id } = useParams();

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
            title={product.title + ";" + product.author}
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
          <label htmlFor="kolicina">
            Količina <br />
            <input type="number" id="kolicina" min={1} />
          </label>
          <button className="button-dodaj">DODAJ U KOŠARICU</button>
          <hr />
          <p>
            Naslov: {product.title} - {product.subtitle}
          </p>
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
            Opis: <br />
            {product.description}
          </p>
        </div>
      </div>
    </>
  );
}

export { PojediniProizvod };
