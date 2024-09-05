import React from 'react';
import styled from 'styled-components';

const CartItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e0e0e0;
  padding: 15px 0;
`;

const ItemDetails = styled.div`
  display: flex;
  align-items: center;
`;

const ItemImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  margin-right: 15px;
`;

const ItemName = styled.div`
  font-size: 1rem;
  color: #333;
`;

const QuantityControls = styled.div`
  display: flex;
  align-items: center;

  input { 
    
    width: 40px;
    text-align: center;
  }

  button {
    background: none;
    border: 1px solid #ccc;
    padding: 0 10px;
  }
`;

const Price = styled.div`
  font-size: 1rem;
  color: #333;
`;

const CartItem = ({ item }) => (
  <CartItemWrapper>
    <ItemDetails>
      <ItemImage src={item.image} alt={item.name} />
      <div>
        <ItemName>{item.name}</ItemName>
        <div>Size: {item.size}</div>
        <div>AU${item.price}</div>
      </div>
    </ItemDetails>
    <QuantityControls>
      <button>-</button>
      <input type="text" value={item.quantity} readOnly />
      <button>+</button>
    </QuantityControls>
    <Price>AU${(item.price * item.quantity).toFixed(2)}</Price>
  </CartItemWrapper>
);

export default CartItem;
