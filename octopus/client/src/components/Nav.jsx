import React from "react";
import styled from "styled-components";
import Logo from "../assets/logo.svg";
import Basket from "../assets/basket.svg";

const Nav = () => {
  const Wrapper = styled.div`
    display: flex;
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

  return (
    <Wrapper>
      <LogoStyle src={Logo} />
      <LogoStyle src={Basket} />
    </Wrapper>
  );
};

export default Nav;
