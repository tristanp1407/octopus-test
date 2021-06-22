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
  justify-content: center;
  align-items: center;
  background-color: #05102a ;
`

const AppContainer = styled.div`
  width: 100vw;
  max-width: 1000px;
`

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
      <AppView>
        <Nav cartItems={cartItems} />
        
        <AppContainer>
          <Switch>
            <Route path="/" exact component={ProductPage} />
            <Route path="/products/:id" render={(props) => <OneProduct {...props} addToCart={addToCart} />} />
          </Switch>
        </AppContainer>

        <Footer /> 
      
      </AppView>
    </Router>
  );
};

export default App;
