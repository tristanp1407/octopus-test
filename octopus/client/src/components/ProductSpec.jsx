import React from "react";
import styled from "styled-components";

const Text = styled.p`
  color: #1d3b67;
`;

const ProductSpec = (props) => {
  return (
    <Text>
      {props.power}
      {" // Packet of "}
      {props.quantity}
    </Text>
  );
};

export default ProductSpec;
