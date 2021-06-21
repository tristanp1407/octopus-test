import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 10vh;
  padding: 15px;
  color: #8094b4;
  font-size: 10px;
  line-height: 17px;
  background-color: #02193b;
`;

const Footer = () => {
  return (
    <Wrapper>
      Octopus Energy is a company registered in England and Wales.
      <br />
      Registered number: 09263424 Registered address: 33 Holborn, London, EC1N
      2HT. Trading office: 20-24 Broadwick Street, London, W1F 8HT
    </Wrapper>
  );
};

export default Footer;
