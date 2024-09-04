import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { removeItem, updateQuantity } from ".././redux/cartSlice";
import { Button, Container, Row, Col } from "react-bootstrap";

const CartContainer = styled(Container)`
  padding: 20px;
  background: #ffffff;
  max-width: 900px;
  margin: auto;
  margin-top: 85px;
  margin-bottom: 85px;
  text-align: center; /* Center align text */
`;

const ProductRow = styled(Row)`
  padding: 20px 0;
  border-bottom: 1px solid #ddd;
  align-items: center;
`;

const ProductImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
`;

const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ProductTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;

const ProductInfo = styled.div`
  font-size: 14px;
  color: #777;
`;

const QuantityInput = styled.input`
  width: 50px;
  margin-right: 10px;
  text-align: center;
`;

const RemoveButton = styled(Button)`
  background-color: transparent;
  border: none;
  color: #333;
  &:hover {
    background-color: transparent;
  }
`;

const TotalSection = styled.div`
  padding: 20px;
  font-size: 18px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CheckoutButton = styled(Button)`
  width: 25%;
  background-color: #d14333;
  border: none;
  &:hover {
    opacity: 0.8;
    background-color: #a64f4f;
  }
  &:active {
    background-color: #a64f4f !important;
    opacity: 0.8 !important;
  }
`;

const EmptyCartMessage = styled.div`
  font-size: 18px;
  color: #777;
  margin: 20px 0;
`;

const ContinueShoppingLink = styled(Link)`
  color: black;
  font-weight: 200;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    text-decoration-thickness: 1px;
  }
`;

function Cart() {
  const dispatch = useDispatch();
  const { items, totalPrice } = useSelector((state) => state.cart);

  const handleQuantityChange = (id, quantity) => {
    if (quantity > 0) {
      dispatch(updateQuantity({ id, quantity }));
    }
  };

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };

  if (items.length === 0) {
    return (
      <CartContainer>
        <EmptyCartMessage>Your cart is empty.</EmptyCartMessage>
        <ContinueShoppingLink to="/product">Continue Shopping</ContinueShoppingLink>
      </CartContainer>
    );
  }

  return (
    <CartContainer>
      {items.map((item) => (
        <ProductRow key={item.id}>
          <Col xs={3}>
            <ProductImage
              src={process.env.PUBLIC_URL + item.image}
              alt={item.title}
            />
          </Col>
          <Col xs={5}>
            <ProductDetails>
              <ProductTitle>{item.title}</ProductTitle>
              <ProductInfo>Price: {item.price}</ProductInfo>
              <ProductInfo>Size: {item.size}</ProductInfo>
            </ProductDetails>
          </Col>
          <Col xs={2}>
            <QuantityInput
              type="number"
              value={item.quantity}
              onChange={(e) =>
                handleQuantityChange(item.id, parseInt(e.target.value, 10))
              }
              min="1"
            />
          </Col>
          <Col xs={2}>
            <RemoveButton onClick={() => handleRemoveItem(item.id)}>
              🗑
            </RemoveButton>
          </Col>
        </ProductRow>
      ))}
      <TotalSection>
        <div>Subtotal</div>
        <div>AU${totalPrice.toFixed(2)}</div>
      </TotalSection>
      <CheckoutButton>Checkout</CheckoutButton>
    </CartContainer>
  );
}

export default Cart;
