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

  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState(undefined);

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
        console.log(res);
        setIsLoading(false);
        setProduct(res.data.product);
        console.log(res.data.product);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Wrapper>
        {product && (
          <>
            <ProductCard data={product} />
          </>
        )}
      </Wrapper>
    </>
  );
};

export default ProductPage;
