import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  max-width: 1000px;
  overflow: hidden;
  height: 10vh;
  color: #8094b4;
  background-color: #02193b;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  span {
    font-size: 10px;
    line-height: 17px;
    margin-left: 15px;
  }
`;

const Footer = () => {
  return (
    <Wrapper>
      <span>
        Octopus Energy is a company registered in England and Wales.
        <br />
        Registered number: 09263424 Registered address: 33 Holborn, London, EC1N
        2HT. Trading office: 20-24 Broadwick Street, London, W1F 8HT
      </span>
    </Wrapper>
  );
};

export default Footer;
