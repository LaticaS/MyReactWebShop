import { createContext, useState, useEffect } from "react";
import React from "react";
import toast, { Toaster } from "react-hot-toast";

export const CartContext = createContext();

//const CartProvider uokviruje SVE FUNKCIJE KOJE SLIJEDE
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(
    localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : []
  );

  const notify = () => toast.success("Dodano košarici!");

  //FUNKCIJA DODAJ U KOŠARICU
  const addToCart = (item) => {
    const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id); // check if the item is already in the cart

    if (isItemInCart) {
      setCartItems(
        cartItems.map(
          (
            cartItem // if the item is already in the cart, increase the quantity of the item
          ) =>
            cartItem.id === item.id
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem // otherwise, return the cart item
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
      // if the item is not in the cart, add the item to the cart
    }
    notify();
  };

  //FUNKCIJA UKLONI IZ KOŠARICE
  const removeFromCart = (item) => {
    const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

    if (isItemInCart.quantity === 1) {
      setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id)); // if the quantity of the item is 1, remove the item from the cart
    } else {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 } // if the quantity of the item is greater than 1, decrease the quantity of the item
            : cartItem
        )
      );
    }
  };

  //FUNKCIJA UKLONI POJEDINI PROIZVOD IZ KOŠARICE
  const removeItemFromCart = (item) => {
    const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

    if (isItemInCart.quantity >= 1) {
      setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id)); // if the quantity of the item is 1, remove the item from the cart
    }
  };

  //FUNKCIJA ISPRAZNI KOŠARICU
  const clearCart = () => {
    setCartItems([]); // set the cart items to an empty array
  };

  //FUNKCIJA KOŠARICA TOTAL
  const getCartTotal = () => {
    const total = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    return total.toFixed(2);

    //return cartItems.reduce(
    //  (total, item) => total + item.price * item.quantity, 0 );
    // calculates the total price of the items in the cart
  };

  //FUNKCIJA KOŠARICA KOLICINA?
  const getCartKolicina = () => {
    const kolicina = cartItems.reduce(
      (kolicina, item) => kolicina + item.quantity,
      0
    );
    return kolicina;
  };

  //FUNKCIJA postavljanje stanja košarice/cart state u browser localStorage sa stringify JSON
  // sets the value of the specified localStorage item.
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  //FUNKCIJA dohvaćanje iz localStorage
  useEffect(() => {
    const cartItems = localStorage.getItem("cartItems");
    if (cartItems) {
      setCartItems(JSON.parse(cartItems));
    }
  }, []);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        removeItemFromCart,
        clearCart,
        getCartTotal,
        getCartKolicina,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
