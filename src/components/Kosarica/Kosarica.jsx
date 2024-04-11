import { Button } from "react-bootstrap";
import { useContext } from "react";
import { Link } from "react-router-dom";
//import { KosaricaContext } from "../Product/Proizvodi.jsx";
import "./Kosarica.scss";
import { CartContext } from "../../context/cart.jsx";

function PrikazKosarice() {
  //const vrijednostKonteksta = useContext(KosaricaContext);
  const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } =
    useContext(CartContext);

  return (
    <>
      <h1>Vaša košarica 〱</h1>
      <hr />
      <div className="flex flex-col gap-4">
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
                  className="rounded-md h-24"
                  style={{ width: 120 }}
                />
              </div>

              <div className="flex flex-col">
                <h4 className="text-lg font-bold">"{item.title}"</h4>
                <h5 className="text-lg font-bold">{item.author}</h5>
              </div>

              <div
                className="flex gap-4"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  fontSize: "1.2rem",
                }}
              >
                <Button
                  className="px-4 py-2 button-kolicina"
                  onClick={() => {
                    addToCart(item);
                  }}
                >
                  +
                </Button>
                <p>{item.quantity}</p>
                <Button
                  className="px-4 py-2 button-kolicina"
                  onClick={() => {
                    removeFromCart(item);
                  }}
                >
                  -
                </Button>
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
          <h3 className="text-lg font-bold ukupna-cijena">
            Ukupna cijena: {getCartTotal()} €
          </h3>
          <hr />
          <Button
            className="px-4 py-2 bg-success text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
            onClick={() => {
              clearCart();
            }}
          >
            <svg
              width="30px"
              height="30px"
              viewBox="-0.96 -0.96 25.92 25.92"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#ffffff"
              alt="Isprazni košaricu"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <g id="Interface / Trash_Full">
                  {" "}
                  <path
                    id="Vector"
                    d="M14 10V17M10 10V17M6 6V17.8C6 18.9201 6 19.4798 6.21799 19.9076C6.40973 20.2839 6.71547 20.5905 7.0918 20.7822C7.5192 21 8.07899 21 9.19691 21H14.8031C15.921 21 16.48 21 16.9074 20.7822C17.2837 20.5905 17.5905 20.2839 17.7822 19.9076C18 19.4802 18 18.921 18 17.8031V6M6 6H8M6 6H4M8 6H16M8 6C8 5.06812 8 4.60241 8.15224 4.23486C8.35523 3.74481 8.74432 3.35523 9.23438 3.15224C9.60192 3 10.0681 3 11 3H13C13.9319 3 14.3978 3 14.7654 3.15224C15.2554 3.35523 15.6447 3.74481 15.8477 4.23486C15.9999 4.6024 16 5.06812 16 6M16 6H18M18 6H20"
                    stroke="#ffffff"
                    stroke-width="1.416"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                </g>{" "}
              </g>
            </svg>
            Isprazni košaricu
          </Button>
        </div>
      ) : (
        <h1 className="text-lg font-bold">Vaša košarica je prazna</h1>
      )}

      <br />
      <br />
      <div className="div-buttoni">
        <Link to="/products">
          <Button className="buttoni-navigacija">⪡ POVRATAK NA WEBSHOP</Button>
        </Link>
        <Link to="/placanje">
          <Button className="buttoni-navigacija">PLAĆANJE ⪢</Button>
        </Link>
      </div>
    </>
  );
}

export { PrikazKosarice };
