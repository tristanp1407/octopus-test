import React from "react";
import styled from "styled-components";
import PriceDisplay from "../../Components/PriceDisplay";
import CenteredImage from "../OneProduct/Components/CenteredImage";
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
        <CenteredImage url={props.imgUrl} />
        <ProductDetails>
          <h3>{props.name}</h3>
          <p>{props.brand}</p>
          <PriceDisplay price={props.price} />
        </ProductDetails>
        <Link to={`/products/${props.id}`}>
          <GoToButton>Shop</GoToButton>
        </Link>
      </CardHero>
    </OneCard>
  );
};

export default ProductCard;
