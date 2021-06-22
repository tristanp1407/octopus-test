import React, { useState } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./Footer";
import Nav from "./Nav";
import OneProduct from "./OneProduct/OneProduct";
import ProductPage from "./ProductPage/ProductPage";

const AppView = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;
  justify-content: center;
  align-items: center;
  background-color: #05102a;
`;

const AppContainer = styled.div`
  max-width: 1000px;
  flex-grow: 1;
`;

const App = () => {
  const [cartItems, updateCartItems] = useState([]);

  const addToCart = (itemsToAdd) => {
    //check if item already in cart
    const exist = cartItems.find((x) => x.id === itemsToAdd.id);
    // if items already in cart, add to the current quantity
    if (exist) {
      updateCartItems(
        cartItems.map((x) =>
          x.id === itemsToAdd.id
            ? { ...exist, quantity: exist.quantity + itemsToAdd.quantity }
            : x
        )
      );
      //if not in cart, add select quantity of product
    } else {
      updateCartItems([...cartItems, itemsToAdd]);
    }
  };

  return (
    <Router>
      <AppView>
        <Nav cartItems={cartItems} />

        <AppContainer>
          <Switch>
            <Route path="/" exact component={ProductPage} />
            <Route
              path="/products/:id"
              render={(props) => (
                <OneProduct {...props} addToCart={addToCart} />
              )}
            />
          </Switch>
        </AppContainer>

        <Footer />
      </AppView>
    </Router>
  );
};

export default App;
