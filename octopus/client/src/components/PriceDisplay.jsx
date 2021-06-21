import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  font-weight: bold;
`;

const Number = styled.div`
  font-size: ${(props) => props.fontSize};
  line-height: ${(props) => props.lineHeight};
  color: white;
`;

const PriceDisplay = (props) => {
  let str = props.price.toString();
  let pounds = str.substring(0, 2);
  let pence = str.substring(2, 4);

  return (
    <Wrapper>
      <Number fontSize={"30px"} lineHeight={"27px"}>
        {pounds}
      </Number>
      <Number fontSize={"20px"} lineHeight={"19px"}>
        .{pence}
      </Number>
    </Wrapper>
  );
};

export default PriceDisplay;
