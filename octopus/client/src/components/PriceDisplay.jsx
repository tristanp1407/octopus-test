import React from "react";
import styled from "styled-components";

const PriceDisplay = (props) => {
  let str = props.price.toString();
  let pounds = str.substring(0, 2);
  let pence = str.substring(2, 4);

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

  return (
    <Wrapper>
      <Number fontSize={"25px"} lineHeight={"21px"}>
        {pounds}
      </Number>
      <Number fontSize={"15px"} lineHeight={"14px"}>
        .{pence}
      </Number>
    </Wrapper>
  );
};

export default PriceDisplay;
