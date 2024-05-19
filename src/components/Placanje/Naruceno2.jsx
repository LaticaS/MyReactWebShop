import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/cart";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

function Naruceno2({ narudzba }) {
  const { cartItems, getCartTotal, getCartKolicina } = useContext(CartContext);
  const navigate = useNavigate();
  const [order, setOrder] = useState(narudzba);

  {
    /**
  koristimo useEffect kako bi provjerili postoji li narudžba u lokalnoj memoriji (localStorage). 
  Ako ne postoji narudžba, korisnik će biti preusmjeren na stranicu za plaćanje. 
  Ako postoji, narudžba će biti učitana iz localStorage i prikazana.
*/
  }

  useEffect(() => {
    const savedOrder = JSON.parse(localStorage.getItem("narudzba"));
    if (!order && savedOrder) {
      setOrder(savedOrder);
    }
    if (!order && !savedOrder) {
      navigate("/placanje");
    } else {
      localStorage.setItem("narudzba", JSON.stringify(order));
    }
  }, [order, navigate]);

  if (!order) {
    return null; // ili može prikaz loading indikator dok se stanje učitava
  }

  const paymentMethodSelected =
    order.uplataKartica || order.uplataUplatnica || order.uplataPouzece;

  return (
    <div className="naruceno-wrapper">
      <div className="div-zahvala" style={{ padding: 10 }}>
        {paymentMethodSelected ? (
          <h2 style={{ lineHeight: 1.5, color: "darkgreen", padding: 50 }}>
            ZAHVALJUJEMO VAM NA NARUDŽBI!
          </h2>
        ) : (
          <>
            <h2 style={{ lineHeight: 1.5, color: "red", padding: 50 }}>
              POZOR: Izaberite način plaćanja!
            </h2>
            <Link to="/placanje">
              <Button className="buttoni-navigacija">⪡ PLAĆANJE</Button>
            </Link>
          </>
        )}

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
          {order.uplataKartica
            ? "Plaćanje karticama putem WSPay sustava"
            : order.uplataUplatnica
            ? "Plaćanje općom uplatnicom / Internet bankarstvom"
            : order.uplataPouzece
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
          - {order.ime} {order.prezime}
        </p>
        <p>
          - {order.ulica} {order.kucnibroj}
        </p>
        <p>
          - {order.postanski} {order.grad} {order.drzava}
        </p>
        <p> - {order.email}</p>
        <p> - {order.telefon} </p>
        <p> Napomena: {order.napomena}</p>
      </div>
      <div>
        <h3>Adresa dostava</h3>
        <p>
          - {order.ime2} {order.prezime2}
        </p>
        <p>
          - {order.ulica2} {order.kucnibroj2}
        </p>
        <p>
          - {order.postanski2} {order.grad2} {order.drzava2}
        </p>
        <p> - {order.email2}</p>
        <p> - {order.telefon2} </p>
        <p> Napomena: {order.napomena2}</p>
      </div>
      <br />
    </div>
  );
}

export { Naruceno2 };
