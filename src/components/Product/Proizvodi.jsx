import { createContext, useState } from "react";
import "./Proizvodi.scss";
import books from "../databooks.json";

const KosaricaContext = createContext();

function Proizvodi() {
  const dodajKosarici = (book) => {
    console.log("button clicked", book);
    setBasket({ ...basket, items: [...basket.items, book] });
    console.log("book in basket", book); //provjera da dodalo knjigu
  };

  const [basket, setBasket] = useState({ items: [] });

  // define initial values to pass to KosaricaContext
  // const appContextValues = {basket, setBasket};

  return (
    <>
      <KosaricaContext.Provider value={{ basket, dodajKosarici }}>
        {/**  
        <KosaricaContext.Provider value={appContextValues}>
         */}

        <div className="div-proizvodi">
          {books &&
            books.map((book) => {
              return (
                <div className="div-book" key={book.id}>
                  <a href="" target="_blank" title="Detaljnije">
                    <img src={book.img} alt="book cover" />
                  </a>
                  <p>"{book.title}"</p>
                  <p>
                    <em>{book.subtitle}</em>
                  </p>
                  <p>
                    <strong> {book.author} </strong>
                  </p>
                  <p
                    style={{ padding: 5, color: "yellow", fontSize: "larger" }}
                  >
                    {book.price} €
                  </p>

                  <button onClick={() => dodajKosarici(book)}>
                    DODAJ U KOŠARICU
                  </button>
                </div>
              );
            })}
        </div>
      </KosaricaContext.Provider>
    </>
  );
}

export { Proizvodi, KosaricaContext };
