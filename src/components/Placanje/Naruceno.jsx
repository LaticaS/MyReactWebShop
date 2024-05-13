import React from "react";
import { CartContext } from "../../context/cart";
import { useContext } from "react";

function Naruceno({ narudzba }) {
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
      <div
        className="div-narudžba-id"
        style={{
          background: "white",
          margin: 5,
          padding: 10,
          border: "1px solid grey",
        }}
      >
        <h2>Narudžba # broj</h2>
        <p>
          NAČIN PLAĆANJA:{" "}
          {narudzba.uplataKartica
            ? "Plaćanje karticama putem WSPay sustava"
            : narudzba.uplataUplatnica
            ? "Plaćanje općom uplatnicom / Internet bankarstvom"
            : narudzba.uplataPouzecem
            ? "Plaćanje pouzećem kurirskoj službi prilikom dostave"
            : "Nije odabran način plaćanja, odaberite način plaćanja!"}
        </p>
        <h4 style={{ color: "red" }}>UKUPNO ZA UPLATU: {getCartTotal()} €</h4>
      </div>
      <br />
      <br />

      <div
        className="pregled-narudzbe-polje"
        style={{ border: "1px solid grey", margin: 5 }}
      >
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
        <p>
          - {narudzba.ime} {narudzba.prezime}
        </p>
        <p>
          - {narudzba.ulica} {narudzba.kucnibroj}
        </p>
        <p>
          - {narudzba.postanski} {narudzba.grad} {narudzba.drzava}
        </p>
        <p> - {narudzba.email}</p>
        <p> - {narudzba.telefon} </p>
        <p> Napomena: {narudzba.napomena}</p>
      </div>
      <div>
        <h3>Adresa dostava</h3>
        <p>
          - {narudzba.ime2} {narudzba.prezime2}
        </p>
        <p>
          - {narudzba.ulica2} {narudzba.kucnibroj2}
        </p>
        <p>
          - {narudzba.postanski2} {narudzba.grad2} {narudzba.drzava2}
        </p>
        <p> - {narudzba.email2}</p>
        <p> - {narudzba.telefon2} </p>
        <p> Napomena: {narudzba.napomena2}</p>
      </div>
      <br />
    </div>
  );
}

export { Naruceno };
