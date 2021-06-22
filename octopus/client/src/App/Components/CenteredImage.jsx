import React from "react";
import styled from "styled-components";

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: ${props => props.height};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProductImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  position: absolute;
`;

const CenteredImage = (props) => {
  return (
    <ImageWrapper height={props.height}>
      <ProductImage src={props.url} />
    </ImageWrapper>
  );
};

export default CenteredImage;
