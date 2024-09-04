// src/components/ProductDetail.js
import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/cartSlice";
import { toast } from "react-toastify";

// Styled Components
const MainContainer = styled.div`
  height: fit-content;
  width: 890px;
  margin: 0 auto;
  border-radius: 10px;
  overflow: hidden;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ProductImageContainer = styled.div`
  width: 40%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ProductImage = styled.img`
  width: 100%;
  border-radius: 10px;
`;

const ProductInfo = styled.div`
  padding: 20px;
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ProductTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 5px;
`;

const SKU = styled.p`
  color: #666;
  font-size: 14px;
  margin-bottom: 20px;
`;

const ProductPrice = styled.p`
  color: #c76e6e;
  font-size: 22px;
  font-weight: 400;
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-size: 14px;
  margin-bottom: 5px;
  display: block;
`;

const SizeDropdown = styled.select`
  padding: 10px;
  font-size: 14px;
  margin-bottom: 20px;
  width: 100%;
`;

const AddToCartButton = styled.button`
  background-color: #b55b5b;
  color: #fff;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  border-radius: 5px;
  margin-bottom: 20px;
  &:hover {
    background-color: #c76e6e;
  }
`;

const ProductDescriptionTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
  color: #c76e6e;
  font-weight: 300;
`;

const ProductDescription = styled.p`
  font-size: 16px;
`;

const ProductDetail = ({ product }) => {
  const dispatch = useDispatch();
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]); // State to manage selected size

  if (!product) return <div>Select a product to view details</div>;

  // Function to handle Add to Cart action
  const handleAddToCart = () => {
    const productToAdd = {
      ...product,
      selectedSize: selectedSize || product.sizes[0], // Ensure a size is always selected
    };
    dispatch(addItem(productToAdd)); // Dispatch the addItem action
    toast.success("Item added to cart!");
  };

  return (
    <MainContainer>
      <Container>
        <ProductImageContainer>
          <ProductImage
            src={process.env.PUBLIC_URL + product.image}
            alt={product.title}
          />
        </ProductImageContainer>
        <ProductInfo>
          <ProductTitle>{product.title}</ProductTitle>
          <SKU>SKU: {product.sku}</SKU>
          <ProductPrice>{product.price}</ProductPrice>

          <Label htmlFor="size">Size</Label>
          <SizeDropdown
            id="size"
            value={selectedSize}
            onChange={(e) => setSelectedSize(e.target.value)}
          >
            {product.sizes.map((size, index) => (
              <option key={index} value={size}>
                {size}
              </option>
            ))}
          </SizeDropdown>

          <AddToCartButton onClick={handleAddToCart}>
            Add to Cart
          </AddToCartButton>

          <ProductDescriptionTitle>PRODUCT INFO</ProductDescriptionTitle>
          <ProductDescription>{product.info}</ProductDescription>
        </ProductInfo>
      </Container>
    </MainContainer>
  );
};

export default ProductDetail;
