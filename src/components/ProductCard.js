// src/components/ProductCard.js
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import styled from 'styled-components';

const StyledCard = styled(Card)`
  width: 100%;
  border: none;
  text-align: center;
`;

const ProductImage = styled(Card.Img)`
  height: 300px;
  object-fit: cover;
  border-radius: 10px;
`;

const ProductTitle = styled(Card.Title)`
  margin-top: 10px;
  font-size: 1rem;
  font-weight: 400;
`;

const ProductPrice = styled(Card.Text)`
  color: #c76e6e;
  font-size: 1.2rem;
  font-weight: bold;
`;

const AddToCartButton = styled(Button)`
  background-color: #c76e6e;
  border: none;
  width: 100%;
  margin-top: 10px;

  &:hover {
    background-color: #a64f4f;
  }
`;

const ProductCard = ({ product }) => {
  return (
    <StyledCard>
      <ProductImage variant="top" src={product.image} />
      <Card.Body>
        <ProductTitle>{product.title}</ProductTitle>
        <ProductPrice>{product.price}</ProductPrice>
        <AddToCartButton>Add to Cart</AddToCartButton>
      </Card.Body>
    </StyledCard>
  );
};

export default ProductCard;
