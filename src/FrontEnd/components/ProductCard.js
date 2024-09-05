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
  height: 30%; /* Adjust height to fit content */
  margin-bottom: 20px;
`;

const ProductImage = styled(Card.Img)`
  height: 300px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 10px; /* Adjust spacing below the image */
`;

const CardBody = styled(Card.Body)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
  padding: 20px;
  height: auto; /* Allow height to adjust based on content */
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
  margin: 10px 0; /* Add some margin for spacing */
`;

const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1px;
  margin-bottom: 10 px;
`;

const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px; /* Space between quantity control and price */
`;

const QuantityButton = styled.button`
  background: #a64f4f;
  border: none;
  color: white;
  width: 30px;
  height: 30px;
  font-size: 18px;
  cursor: pointer;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
`;

const QuantityInput = styled(FormControl)`
  width: 60px;
  text-align: center;
  margin: 0 5px; /* Add space between buttons and input */
  border: 1px solid #ced4da;
  box-shadow: none;
  outline: none;
  
  -moz-appearance: textfield;
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const AddToCartButton = styled(Button)`
  height: 40px;
  width: 115.9px;
  border: 0px;
  padding: 8px 16px;
  background-color: #a64f4f;
  font-size: 1rem;
  font-weight: 300;
  text-align: center;
  color: white;
  transition: color 0.3s ease;
  text-decoration: none;
  border-radius: 0;
  margin-top: 10px; /* Space above the button */
  align-self: center;
  
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

  const handleQuantityIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleQuantityDecrement = () => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity - 1));
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
      <BottomContainer>
        <QuantityContainer>
          <QuantityButton onClick={handleQuantityDecrement}>-</QuantityButton>
          <QuantityInput
            type="number"
            value={quantity}
            onChange={handleQuantityChange}
            min="1"
          />
          <QuantityButton onClick={handleQuantityIncrement}>+</QuantityButton>
        </QuantityContainer>
        <ProductPrice>{product.price}</ProductPrice>
        <AddToCartButton onClick={handleAddToCart}>Add to Cart</AddToCartButton>
      </BottomContainer>
    </StyledCard>
  );
};

export default ProductCard;
