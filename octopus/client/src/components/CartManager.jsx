import React from "react";
import styled from "styled-components";
import AddToCartButton from "./AddToCartButton";
import PriceDisplay from "./PriceDisplay";
import QuantitySelect from "./QuantitySelect";

const Wrapper = styled.div`
  background-color: #05102a;
  display: flex;
  padding: 15px 30px;
  flex-direction: column;
  justify-content: center;
  align-items: center; ;
`;
const PriceWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;

const CartManager = (props) => {
  return (
    <Wrapper>
      <PriceWrapper>
        <PriceDisplay price={props.price} />
        <QuantitySelect changeQuantity={props.selectQuantity} qty={props.qty} />
      </PriceWrapper>
      <AddToCartButton handleAddToCart={props.handleAddToCart} />
    </Wrapper>
  );
};

export default CartManager;
