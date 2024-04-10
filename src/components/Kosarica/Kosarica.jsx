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
    <div className="kosarica-wrapper">
      <main>
        <h1>Vaša košarica 〱</h1>

        <div className="flex-col flex items-center bg-warning gap-8 p-10 text-black text-sm">
          <div className="flex flex-col gap-4 bg-warning">
            {cartItems.map((item) => (
              <div className="flex justify-between items-center" key={item.id}>
                <div className="flex gap-4">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="rounded-md h-24"
                    style={{ width: 150 }}
                  />
                  <div className="flex flex-col">
                    <h1 className="text-lg font-bold">
                      Naslov: "{item.title}"
                    </h1>
                    <p className="text-gray-600">Cijena: {item.price} €</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Button
                    className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                    onClick={() => {
                      addToCart(item);
                    }}
                  >
                    +
                  </Button>
                  <p>Količina: {item.quantity}</p>
                  <Button
                    className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                    onClick={() => {
                      removeFromCart(item);
                    }}
                  >
                    -
                  </Button>
                </div>
              </div>
            ))}
          </div>
          {cartItems.length > 0 ? (
            <div className="flex flex-col justify-between items-center">
              <h1 className="text-lg font-bold">
                Ukupna cijena: {getCartTotal()} €
              </h1>
              <Button
                className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                onClick={() => {
                  clearCart();
                }}
              >
                Clear cart
              </Button>
            </div>
          ) : (
            <h1 className="text-lg font-bold">Your cart is empty</h1>
          )}
        </div>

        <br />
        <br />

        <div className="div-buttoni">
          <Link to="/products">
            <Button>⪡ POVRATAK NA WEBSHOP</Button>
          </Link>
          <Link to="/placanje">
            <Button>PLAĆANJE ⪢</Button>
          </Link>
        </div>
      </main>
    </div>
  );
}
export { PrikazKosarice };
