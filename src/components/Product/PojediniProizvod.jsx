import "./PojediniProizvod.scss";

function PojediniProizvod() {
  return (
    <>
      <h1>Detaljno 〱</h1>
      <div className="pojedini-proizvod-wrapper">
        <div className="div-img-pojedini-proizvod">
          <img
            src="https://znanje.hr/product-images/35948cb4-24d1-4ee6-b122-e555bb318f64.jpg"
            variant="top"
          />
        </div>
        <div className="div-podaci-pojedini-proizvod">
          <h2>naslov</h2>
          <h4>
            <strong>autor</strong>
          </h4>
          <h2>cijena</h2>
          <hr />
          <label htmlFor="kolicina">
            Količina <br />
            <input type="number" id="kolicina" min={1} />
          </label>
          <button className="button-dodaj">DODAJ U KOŠARICU</button>
          <hr />
          <p>Godina izdanja:</p>
          <hr />

          <p>Izdavač:</p>
          <hr />

          <p>Broj stranica:</p>
          <hr />

          <p>Barkod:</p>
          <hr />

          <p>
            Opis: <br />
          </p>
        </div>
      </div>
    </>
  );
}

export { PojediniProizvod };
