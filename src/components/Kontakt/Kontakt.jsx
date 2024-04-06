import "./Kontakt.scss";

function Kontakt() {
  return (
    <>
      <h1>Kontakt 〱</h1>
      <div className="kontakt-wrapper">
        <div className="kontakt-polje">
          <input
            type="text"
            id="ime"
            name="ime"
            placeholder="Upišite ime i prezime"
            className="ime-prezime"
          />
          <br />
          <input
            type="email"
            id="mail"
            name="email"
            placeholder=" Upišite email"
            className="email"
          />
          <br />
          <input
            type="phone"
            id="phone"
            name="phone"
            placeholder=" Upišite telefon"
            className="phone"
          />
          <br />
          <textarea
            className="poruka-area"
            name="Poruka"
            placeholder="Upišite svoju poruku"
            rows={10}
            cols={50}
          />
          <br />
          <p>
            <input
              type="checkbox"
              value="kontakt-privola"
              name="kontakt-privola"
              id="checkbox"
            />
            <small>
              Suglasan sam sa prikupljanjem osobnih podataka u svrhu kontakta
              (privolu je moguće opozvati u bilo kojem trenutku).
            </small>
          </p>
          <br />
          <button type="submit" name="Pošalji">
            Pošalji
          </button>
        </div>

        <div className="kontakt-info">
          <ul>
            <li>Preporoda 3, 22000 Šibenik</li>
            <li>OIB: 12345678901</li>
            <li>info@booki.hr</li>
            <li>022/123 345</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export { Kontakt };
