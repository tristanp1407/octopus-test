import React from "react";
import styled from "styled-components";

const CenteredImage = (props) => {
  const ImageWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 310px;
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  const ProductImage = styled.img`
    max-width: 100%;
    max-height: 100%;
    position: absolute;
  `;
  return (
    <ImageWrapper>
      <ProductImage src={props.url} />
    </ImageWrapper>
  );
};

export default CenteredImage;
