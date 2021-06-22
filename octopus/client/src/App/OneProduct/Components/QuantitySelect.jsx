import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.p`
  color: #1d3b67;
  margin: 0;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  height: 25px;
  width: 25px;
  border: none;
  border-radius: 2px;
  background-color: #1d3b67;
  color: white;
  font-size: 15px;
  cursor: pointer;
  ${(props) =>
    (props.qty === 1) & (props.value === "-")
      ? `background-color:#192B43 `
      : `background-color: #36598D`};
`;

const Quantity = styled.h2`
  color: white;
  margin: 0 5px;
`;

const QuantitySelect = (props) => {
  const onTrigger = (e) => {
    props.changeQuantity(e);
  };

  return (
    <Wrapper>
      <Title>QTY</Title>
      <ButtonsContainer>
        <Button qty={props.qty} value="-" onClick={onTrigger}>
          -
        </Button>
        <Quantity title="Current quantity">{props.qty}</Quantity>
        <Button value="+" onClick={onTrigger}>
          +
        </Button>
      </ButtonsContainer>
    </Wrapper>
  );
};

export default QuantitySelect;
