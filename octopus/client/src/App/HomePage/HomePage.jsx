import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../assets/logo.png";
import Button from "../Components/Button";

const HomePage = () => {
  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 90vh;
    background-color: #05102a;
  `;

  const LogoContainer = styled.img`
    height: 30vh;
  `;

  return (
    <Wrapper>
      <LogoContainer src={Logo} />
      <Link to="/products">
        <Button text={"Go to product page"} />
      </Link>
    </Wrapper>
  );
};

export default HomePage;
