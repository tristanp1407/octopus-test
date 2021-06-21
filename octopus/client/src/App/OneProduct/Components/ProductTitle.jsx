import React from "react";
import styled from "styled-components";

const Text = styled.h2`
  color: white;
`;

const ProductTitle = (props) => {
  return <Text>{props.data}</Text>;
};

export default ProductTitle;
