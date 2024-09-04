import React, { useState } from 'react';
import { Card, Button, FormControl } from 'react-bootstrap';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/cartSlice';
import { toast } from 'react-toastify';

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  &:hover, &:focus, &:active {
    text-decoration: none;
    color: inherit;
  }
`;

const StyledCard = styled(Card)`
  width: 100%;
  border: none;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 60%; /* Ensure full height */
  margin-bottom: 20px;
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
  padding: 20px; /* Adjust padding to fit height */
  height: 150px; /* Set a fixed height for consistent layout */
`;

const ProductTitle = styled(Card.Title)`
  font-size: 1rem;
  font-weight: 400;
  font-size: 16px;
  line-height: 22.4px;
  text-align: center;
`;

const ProductPrice = styled(Card.Text)`
  color: #c76e6e;
  font-size: 1.3rem;
  font-weight: lighter;
`;

const QuantityInput = styled(FormControl)`
  width: 60px;
  text-align: center;
  margin: 0 auto 10px;
`;

const AddToCartButton = styled(Button)`
  height: 40px;
  width: 115.9px;
  border: 0px;
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
  margin-top: auto; /* Push button to bottom */

  &:hover {
    opacity: 0.8;
    background-color: #a64f4f;
  }
  &:active {
    background-color: #a64f4f !important;
    opacity: 0.8 !important;
  }
`;

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    const value = Math.max(1, parseInt(e.target.value, 10) || 1); // Ensure minimum quantity of 1
    setQuantity(value);
  };

  const handleAddToCart = () => {
    const productToAdd = { ...product, quantity }; // Include quantity in product data
    dispatch(addItem(productToAdd)); 
    toast.success('Item added to cart!'); 
  };

  return (
    <StyledCard>
      <StyledLink to={`/product/${product.id}`}>
        <ProductImage variant="top" src={product.image} />
        <CardBody>
          <ProductTitle>{product.title}</ProductTitle>
        </CardBody>
      </StyledLink>
      <QuantityInput
            type="number"
            value={quantity}
            onChange={handleQuantityChange}
            min="1"
          />
          <ProductPrice>{product.price}</ProductPrice>
      <AddToCartButton onClick={handleAddToCart}>Add to Cart</AddToCartButton>
    </StyledCard>
  );
};

export default ProductCard;
