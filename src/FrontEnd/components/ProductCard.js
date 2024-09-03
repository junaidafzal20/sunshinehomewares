// src/components/ProductCard.js
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
  text-decoration: none; /* Removes underline */
  color: inherit; /* Inherits color from the parent */
  &:hover, &:focus, &:active {
    text-decoration: none; /* Ensures underline is removed on hover, focus, and active states */
    color: inherit; /* Ensures color does not change on interaction */
  }
`;

const StyledCard = styled(Card)`
  width: 100%;
  border: none;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const ProductImage = styled(Card.Img)`
  height: 300px;
  object-fit: cover;
  border-radius: 10px;
`;

const CardBody = styled(Card.Body)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
  padding: 30px;
`;

const ProductTitle = styled(Card.Title)`
  margin-top: 10px;
  font-size: 1rem;
  font-weight: 400;
  font-size: 16px;
  line-height: 22.4px;
  text-decoration: none solid rgba(255, 255, 255, 0.7);
  text-align: center;
  word-spacing: 0px;
`;

const ProductPrice = styled(Card.Text)`
  color: #c76e6e;
  font-size: 1.3rem;
  font-weight: lighter;
`;

const AddToCartButton = styled(Button)`
  height: 40px;
  width: 115.9px;
  border: 0px solid #111111;
  padding: 8px 16px;
  align-self: center;
  background-color: #a64f4f;
  font-size: 1rem;
  font-weight: 300;
  text-align: center;
  color: white;
  transition: color 0.3s ease;
  text-decoration: none;
  border-radius: 0;

  &:hover {
    opacity: 0.8;
    background-color: #a64f4f;
  }
`;

const ProductCard = ({ product }) => {
  return (
    <StyledLink to={`/product/${product.id}`}>
      <StyledCard>
        <ProductImage variant="top" src={product.image} />
        <CardBody>
          <ProductTitle>{product.title}</ProductTitle>
          <ProductPrice>{product.price}</ProductPrice>
          <AddToCartButton>Add to Cart</AddToCartButton>
        </CardBody>
      </StyledCard>
    </StyledLink>
  );
};

export default ProductCard;
