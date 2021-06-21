import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #02193b;
  color: white;
  padding: 10px 30px;
  font-size: 12px;
`;

const ProductDescription = (props) => {
  return (
    <Wrapper>
      <h2>Description</h2>
      <p>{props.data}</p>
    </Wrapper>
  );
};

export default ProductDescription;
