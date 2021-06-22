import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ProductCard from "./ProductCard";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 85vh;
  background-color: #05102a;
`;

const ProductPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState(undefined);

  let queryBody = `
  query getProductById {
    product(productId: 1) {
      id
      name
      price
      brand
      imgUrl
    }
  }`;

  useEffect(() => {
    fetch("http://127.0.0.1:8000/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: queryBody,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        setIsLoading(false);
        setProduct(res.data.product);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {product && (
        <Wrapper>
          <ProductCard data={product} />
        </Wrapper>
      )}
    </>
  );
};

export default ProductPage;
