import React from "react";
import styled from "styled-components";

const Button = styled.button`
  height: 40px;
  width: 100%;
  max-width: 300px;
  margin-top: 20px;
  color: white;
  background: linear-gradient(#ff61a9 45%, #fa1c7b 45%);
  font-size: 20px;
  font-weight: bold;
  border: none;
  border-radius: 2px; ;
`;

const AddToCartButton = (props) => {
  return <Button onClick={props.handleAddToCart}>Add to Cart</Button>;
};

export default AddToCartButton;
