import React, { useState } from "react";
import styled from "styled-components";
import data from "../data";
import CenteredImage from "./CenteredImage";
import ProductTitle from "./ProductTitle";
import ProductSpec from "./ProductSpec";
import CartManager from "./CartManager";
import ItemDescription from "./ProductDescription";
import Specifications from "./Specifications";

const ProductOverview = styled.div`
  background: linear-gradient(#05102a 60%, #02193b 60%);
  width: 100vw;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const ProductInfo = styled.div`
  padding: 0 30px 5px 30px;
`;

const OneProduct = (props) => {
  let [qty, setQty] = useState(1);
  //set number of items to be added to the cart
  const selectQuantity = (e) => {
    if (e.target.value === "+") {
      setQty(qty + 1);
    } else if ((e.target.value === "-") & (qty > 1)) {
      setQty(qty - 1);
    }
  };

  const addItemstoCart = () => {
    //grab id and qty
    let toBeAdded = { id: data.product.id, quantity: qty };
    //update state in parent
    props.addToCart(toBeAdded);
  };

  //extract specifications from product data to pass as prop
  let specs = {
    brand: data.product.brand,
    weight: data.product.weight,
    height: data.product.height,
    width: data.product.width,
    length: data.product.length,
    modelCode: data.product.modelCode,
    colour: data.product.colour,
  };

  return (
    <>
      <ProductOverview>
        <CenteredImage url={data.product.imgUrl} />
        <ProductInfo>
          <ProductTitle data={data.product.name} />
          <ProductSpec
            power={data.product.power}
            quantity={data.product.quantity}
          />
        </ProductInfo>
      </ProductOverview>

      <CartManager
        cartItems={props.cartItems}
        price={data.product.price}
        qty={qty}
        handleAddToCart={addItemstoCart}
        selectQuantity={selectQuantity}
      />

      <ItemDescription data={data.product.description} />

      <Specifications data={specs} />
    </>
  );
};

export default OneProduct;
