import { CartContext } from "../../context/cart";
import { useContext } from "react";
import { Link } from "react-router-dom";

function Naruceno() {
  const { cartItems, getCartTotal, getCartKolicina } = useContext(CartContext);
  return (
    <div className="naruceno-wrapper">
      <div className="div-zahvala" style={{ padding: 10 }}>
        <h2 style={{ lineHeight: 1.5, color: "darkgreen", padding: 50 }}>
          ZAHVALJUJEMO VAM NA NARUDŽBI!
        </h2>

        <p>
          Nakon što zaprimimo uplatu očekujte proizvode na Vašoj adresi u
          najkraćem mogućem roku. Vaša narudžba će biti isporučena unutar 3-7
          radnih dana (ponedjeljak-petak).
        </p>
        <p>Uskoro će vam stići email sa potvrdom narudžbe.</p>
        <p>
          Knjige dostavljamo putem DPD dostavljačke službe. Nakon što zaprimite
          obavijest o predviđenoj dostavi paketa, možete pristupiti FMP portalu
          te odabrati dostavu paketa Vama na ruke ili na sigurno mjesto (terasa,
          garaža i sl.).
        </p>
      </div>
      <br />
      <div className="div-narudžba-id">
        <h2>Narudžba # broj</h2>
        <p>NAČIN PLAĆANJA:</p>
        <h4 style={{ color: "red" }}>UKUPNO ZA UPLATU: {getCartTotal()} €</h4>
      </div>
      <br />
      <br />

      <div className="pregled-narudzbe-polje">
        {cartItems.map((item) => (
          <div
            className="flex justify-between items-center div-proizvoda"
            key={item.id}
          >
            <div className="flex gap-4 slika-naslov-cijena-kolicina">
              <div className="flex flex-col">
                <p className="text-lg font-bold">
                  "{item.title}" / {item.opis} / količina: {item.quantity}
                </p>
              </div>
              <div className="flex flex-col">
                <p>Cijena:</p>
                <h5 className="text-gray-600">{item.price} € </h5>
              </div>
            </div>
          </div>
        ))}
      </div>
      <br />

      <div className="div-dostava">
        <h3>Dostava</h3>
        <p>Standardna dostava DPD Croatia - 3.50 €</p>
      </div>
      <div>
        <h3>Adresa naplata</h3>
      </div>
      <div>
        <h3>Adresa dostava</h3>
      </div>
      <br />
    </div>
  );
}

export { Naruceno };
