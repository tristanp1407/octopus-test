import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./Footer";
import Nav from "./Nav";
import OneProduct from "./OneProduct/OneProduct";
import HomePage from "./HomePage/HomePage";
import ProductPage from "./ProductPage/ProductPage";

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
    <Router>
      <Nav cartItems={cartItems} />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/products" exact component={ProductPage} />
        <Route path="/products/:id" component={OneProduct} />
        <OneProduct addToCart={addToCart} />
      </Switch>

      <Footer />
    </Router>
  );
};

export default App;
