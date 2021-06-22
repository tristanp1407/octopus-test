import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../assets/logo.svg";
import Basket from "../assets/basket.svg";

const Wrapper = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  height: 5vh;
  width: 100vw;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #05102a;
`;

const LogoStyle = styled.img`
  height: 20px;
  margin: 7px;
`;

const BasketWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const BasketCount = styled.div`
  height: 20px;
  width: 20px;
  background-color: #fa1c7b;
  border-radius: 50%;
  color: white;
  text-align: center;
  font-weight: bold;
  ${(props) => (!props.totalItems ? "display: none" : null)}
`;

const Nav = (props) => {
  let totalItems = 0;
  const getNumberofItems = () => {
    for (var i = 0; i < props.cartItems.length; i++) {
      totalItems = totalItems + props.cartItems[i].quantity;
      return totalItems;
    }
  };
  getNumberofItems();

  return (
    <Wrapper>
      <Link to="/">
        <LogoStyle src={Logo} />
      </Link>

      <BasketWrapper>
        <BasketCount title="Basket Items" totalItems={totalItems}>
          {totalItems}
        </BasketCount>
        <LogoStyle src={Basket} />
      </BasketWrapper>
    </Wrapper>
  );
};

export default Nav;
