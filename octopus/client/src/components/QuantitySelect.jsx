import React from "react";
import styled from "styled-components";

const QuantitySelect = () => {
  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;

  const Title = styled.p`
    color: #1d3b67;
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
  `;

  const Quantity = styled.h2`
    color: white;
    margin: 0 5px;
  `;

  return (
    <Wrapper>
      <Title>QTY</Title>
      <ButtonsContainer>
        <Button>-</Button>
        <Quantity>1</Quantity>
        <Button>+</Button>
      </ButtonsContainer>
    </Wrapper>
  );
};

export default QuantitySelect;
