import React, { useState } from "react";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import OneProduct from "./components/OneProduct";

const App = () => {
  //setting cart as array to push objects e.g. {id:1, quantity: 3}
  const [cartItems, updateCartItems] = useState([]);
  const addToCart = (itemsToAdd) => {
    console.log(itemsToAdd.quantity + " items added to the cart");
    //check if item already in cart
    const exist = cartItems.find((x) => x.id === itemsToAdd.id);
    if (exist) {
      updateCartItems(
        cartItems.map((x) =>
          x.id === itemsToAdd.id
            ? { ...exist, quantity: exist.quantity + itemsToAdd.quantity }
            : x
        )
      );
    } else {
      updateCartItems([...cartItems, itemsToAdd]);
    }
  };

  return (
    <>
      <Nav cartItems={cartItems} />
      <OneProduct addToCart={addToCart} />
      <Footer />
    </>
  );
};

export default App;
