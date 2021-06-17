import React from "react";
import styled from "styled-components";

const ProductTitle = (props) => {
  const Text = styled.h2`
    color: white;
  `;
  return <Text>{props.data}</Text>;
};

export default ProductTitle;
