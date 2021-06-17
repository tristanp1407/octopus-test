import React from "react";
import styled from "styled-components";
import data from "../data";
import CenteredImage from "./CenteredImage";
import ProductTitle from "./ProductTitle";
import ProductSpec from "./ProductSpec";
import PriceDisplay from "./PriceDisplay";
import QuantitySelect from "./QuantitySelect";

const OneProduct = () => {
  const ProductOverview = styled.div`
    background: linear-gradient(#05102a 60%, #02193b 60%);
    width: 100vw;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  `;

  const ProductInfo = styled.div`
    padding: 0 20px 5px 20px;
  `;

  const OneSection = styled.div`
    width: 100%;
    background: ${(props) => props.backgroundColor};
    color: white;
  `;
  return (
    <>
      <ProductOverview>
        <CenteredImage url={data.product.imgUrl} />
        <ProductInfo>
          <ProductTitle data={data.product.name} />
          <ProductSpec
            power={data.product.power}
            quantity={data.product.quantity}
          />
        </ProductInfo>
      </ProductOverview>

      <OneSection backgroundColor={"#05102A"}>
        <PriceDisplay price={data.product.price} />
        <QuantitySelect />
      </OneSection>
    </>
  );
};

export default OneProduct;
