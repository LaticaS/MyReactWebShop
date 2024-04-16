import { useState } from "react";
import "./Placanje.scss";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { CartContext } from "../../context/cart";
import { useContext } from "react";

function Placanje() {
  const { cartItems, getCartTotal, getCartKolicina } = useContext(CartContext);
  const [liked, setLiked] = useState(true);

  function handleChange(e) {
    setLiked(e.target.checked);
  }

  return (
    <>
      <h1>Plaćanje 〱</h1>
      <div className="placanje-wrapper">
        <div className="adresa-polje">
          <h4>INFORMACIJE ZA NAPLATU</h4>

          <form action="">
            <input
              type="text"
              id="ime"
              name="ime"
              placeholder="Upišite ime"
              className="ime"
            />
            <input
              type="text"
              id="prezime"
              name="prezime"
              placeholder="Upišite prezime"
              className="prezime"
            />
            <br />
            <input
              type="email"
              id="mail"
              name="email"
              placeholder=" Upišite email"
              className="email"
            />
            <input
              type="phone"
              id="phone"
              name="phone"
              placeholder=" Upišite telefon"
              className="phone"
            />
            <br />
            <input
              type="text"
              id="ulica"
              name="ulica"
              placeholder="Upišite ime ulice"
              className="ulica"
            />
            <input
              type="text"
              id="kucni-broj"
              name="kucni-broj"
              placeholder="Upišite kućni broj"
              className="kucniBroj"
            />
            <br />
            <textarea
              name="Napomena"
              placeholder="Napomena dostavljaču: broj kata, stana i sl. (neobavezno)"
              rows={4}
              cols={30}
            />

            <p>
              <input
                type="checkbox"
                value="obavijesti-mailom"
                name="privola-obavijesti-mailom"
                id="checkbox"
              />
              <small>
                Želim primati informacije o pogodnostima i novim proizvodima
                putem emaila.
              </small>
            </p>

            <input
              type="text"
              id="grad"
              name="grad"
              placeholder="Grad"
              className="grad"
            />
            <input
              type="text"
              id="postanski-broj"
              name="postanski-broj"
              placeholder="Poštanski broj"
              className="postanskiBroj"
            />
            <br />
            <br />
            <input
              type="text"
              id="drzava"
              name="drzava"
              placeholder="Država"
              className="drzava"
            />
          </form>
          <br />

          <label>
            <input type="checkbox" checked={liked} onChange={handleChange} />
            Adresa dostave ista kao adresa za naplatu
          </label>
          <br />
          <br />
          <div>
            {liked ? (
              <></>
            ) : (
              <>
                <h4>INFORMACIJE ZA DOSTAVU</h4>
                <form action="">
                  <input
                    type="text"
                    id="ime"
                    name="ime"
                    placeholder="Upišite ime"
                    className="ime"
                  />
                  <input
                    type="text"
                    id="prezime"
                    name="prezime"
                    placeholder="Upišite prezime"
                    className="prezime"
                  />
                  <br />
                  <input
                    type="email"
                    id="mail"
                    name="email"
                    placeholder=" Upišite email"
                    className="email"
                  />
                  <input
                    type="phone"
                    id="phone"
                    name="phone"
                    placeholder=" Upišite telefon"
                    className="phone"
                  />
                  <br />
                  <input
                    type="text"
                    id="ulica"
                    name="ulica"
                    placeholder="Upišite ime ulice"
                    className="ulica"
                  />
                  <input
                    type="text"
                    id="kucni-broj"
                    name="kucni-broj"
                    placeholder="Upišite kućni broj"
                    className="kucniBroj"
                  />
                  <br />
                  <textarea
                    name="Napomena"
                    placeholder="Napomena dostavljaču: broj kata, stana i sl. (neobavezno)"
                    rows={4}
                    cols={30}
                  />
                  <p>
                    <input
                      type="checkbox"
                      value="obavijesti-mailom"
                      name="privola-obavijesti-mailom"
                      id="checkbox"
                    />
                    <small>
                      Želim primati informacije o pogodnostima i novim
                      proizvodima putem emaila.
                    </small>
                  </p>

                  <input
                    type="text"
                    id="grad"
                    name="grad"
                    placeholder="Grad"
                    className="grad"
                  />
                  <input
                    type="text"
                    id="postanski-broj"
                    name="postanski-broj"
                    placeholder="Poštanski broj"
                    className="postanskiBroj"
                  />
                  <br />
                  <br />
                  <input
                    type="text"
                    id="drzava"
                    name="drzava"
                    placeholder="Država"
                    className="drzava"
                  />
                  <br />
                </form>
              </>
            )}
          </div>
        </div>

        <div className="placanje-sidebar">
          <div className="pregled-narudzbe-polje">
            <h4>PREGLED VAŠE NARUDŽBE</h4>
            {cartItems.map((item) => (
              <div
                className="flex justify-between items-center div-proizvoda"
                key={item.id}
              >
                <div className="flex gap-4 slika-naslov-cijena-kolicina">
                  <div>
                    <img
                      src={item.img}
                      alt={item.title}
                      title={item.title + "; " + item.author}
                      className="rounded-md h-24 slika-kosarica"
                    />
                  </div>

                  <div className="flex flex-col">
                    <p className="text-lg font-bold">"{item.title}"</p>
                    <p>količina: {item.quantity}</p>
                  </div>
                  <div className="flex flex-col">
                    <p>Cijena:</p>
                    <h5 className="text-gray-600">{item.price} € </h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {cartItems.length > 0 ? (
            <div className="flex flex-col justify-between items-center">
              <h5 className="kolicina-artikala">
                Ukupna količina: {getCartKolicina()}
              </h5>
              <h3 className="text-lg font-bold ukupna-cijena">
                Ukupna cijena: {getCartTotal()} €
              </h3>
            </div>
          ) : (
            <h4 className="nula-artikala">0 artikala</h4>
          )}

          <div className="nacin-placanja-polje">
            <h4>IZABERITE NAČIN PLAĆANJA</h4>
            <div className="div-forme-placanja">
              <form action="">
                <input
                  type="radio"
                  value="kartice"
                  name="nacin-placanja"
                  id="karticama"
                />
                <label htmlFor="karticama">
                  Plaćanje karticama putem WSPay sustava
                </label>
                <br />
                <input
                  type="radio"
                  value="uplatnica"
                  name="nacin-placanja"
                  id="uplatnicom"
                />
                <label htmlFor="uplatnicom">
                  Plaćanje općom uplatnicom / Internet bankarstvom
                </label>
                <br />
                <input
                  type="radio"
                  value="pouzece"
                  name="nacin-placanja"
                  id="pouzecem"
                />
                <label htmlFor="pouzecem">
                  Plaćanje pouzećem kurirskoj službi prilikom dostave
                </label>
                <br />
              </form>
            </div>
          </div>

          <button type="submit" name="Narucujem" className="button-narucujem">
            <h5>NARUČI</h5>
          </button>
          <p>
            <small>
              Pritiskom na gumb "Naručujem" slažete se sa Općim uvjetima
              korištenja stranice i pristajete na korištenje Vaših osobnih
              podataka sukladno uvjetima web stranice.
            </small>
          </p>
        </div>

        <div className="div-buttoni">
          <Link to="/cart">
            <Button>⪡ POVRATAK NA KOŠARICU</Button>
          </Link>
        </div>
      </div>
    </>
  );
}
export { Placanje };
