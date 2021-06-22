import React from "react";
import styled from "styled-components";
import PriceDisplay from "../Components/PriceDisplay";
import CenteredImage from "../Components/CenteredImage";
import { Link } from "react-router-dom";

const OneCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 200px;
  background-color: #02193b;
  color: white;
  border-radius: 5px;
  overflow: hidden;
`;

const CardHero = styled.div`
  width: 100%;

  height: max-content;

  img {
    max-width: 100%;
    max-height: 100%;
  }
`;

const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 10px;

  h3 {
    margin: 5px 0;
  }
  p {
    margin: 5px 0 10px 0;
  }
`;

const GoToButton = styled.button`
  width: 100%;
  padding: 15px 0;
  text-align: center;
  background-color: #fa1c7b;
  border: none;
  color: white;
  font-size: 20px;
  cursor: pointer;
`;

const ProductCard = (props) => {
  return (
    <OneCard>
      <CardHero>
        <CenteredImage height={"250px"} url={props.data.imgUrl} />
        <ProductDetails>
          <h3>{props.data.name}</h3>
          <p>{props.data.brand}</p>
          <PriceDisplay price={props.data.price} />
        </ProductDetails>
        <Link to={`/products/${props.data.id}`}>
          <GoToButton>Go to product page</GoToButton>
        </Link>
      </CardHero>
    </OneCard>
  );
};

export default ProductCard;
