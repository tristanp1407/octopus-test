import React, { useState, useEffect } from "react";
import styled from "styled-components";

import CenteredImage from "../Components/CenteredImage";
import ProductTitle from "./Components/ProductTitle";
import ProductSpec from "./Components/ProductSpec";
import CartManager from "./Components/CartManager";
import ItemDescription from "./Components/ProductDescription";
import Specifications from "./Components/Specifications";

const ProductOverview = styled.div`
  background: linear-gradient(#05102a 60%, #02193b 60%);
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const ProductInfo = styled.div`
  padding: 0 30px 5px 30px;
`;

const OneProduct = (props) => {
  //define query body with dynamic id
  let queryBody = `
  query getProductById {
    product(productId: ${props.match.params.id}) {
    id
    name
    power
    description
    price
    quantity
    brand
    weight
    height
    width
    length
    modelCode
    colour
    imgUrl
    }
  }`;

  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState(undefined);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: queryBody,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        setIsLoading(false);
        setProduct(res.data.product);
        // console.log(res.data.product);
      });
  }, []);

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
    let toBeAdded = { id: product.id, quantity: qty };
    //update state in parent
    props.addToCart(toBeAdded);
  };

  //return if loading
  if (isLoading) {
    return <div>Loading...</div>;
  }

  //return once loaded
  return (
    <>
      {product && (
        <>
          <ProductOverview>
            <CenteredImage height={"310px"} url={product.imgUrl} />
            <ProductInfo>
              <ProductTitle data={product.name} />
              <ProductSpec power={product.power} quantity={product.quantity} />
            </ProductInfo>
          </ProductOverview>

          <CartManager
            cartItems={props.cartItems}
            price={product.price}
            qty={qty}
            handleAddToCart={addItemstoCart}
            selectQuantity={selectQuantity}
          />

          <ItemDescription data={product.description} />

          <Specifications
            brand={product.brand}
            weight={product.weight}
            height={product.height}
            width={product.width}
            length={product.length}
            modelCode={product.modelCode}
            colour={product.colour}
          />
        </>
      )}
    </>
  );
};

export default OneProduct;
