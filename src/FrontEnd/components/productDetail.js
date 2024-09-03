import React from 'react';
import styled from 'styled-components';

// Main Container with specified height and width
const MainContainer = styled.div`
  height: fit-content;
  width: 890px;
  margin: 0 auto; /* Center the container */
  border-radius: 10px;
  overflow: hidden; /* Hide any overflow to keep the design clean */

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
  font-weight: bold;
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
  background-color: #c76e6e;
  color: #fff;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  border-radius: 5px;
  margin-bottom: 20px;
  &:hover {
    background-color: #b55b5b;
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
  if (!product) return <div>Select a product to view details</div>;

  return (
    <MainContainer>
      <Container>
        <ProductImageContainer>
          <ProductImage src={product.image} alt={product.title} />
        </ProductImageContainer>
        <ProductInfo>
          <ProductTitle>{product.title}</ProductTitle>
          <SKU>SKU: {product.sku}</SKU>
          <ProductPrice>{product.price}</ProductPrice>

          <Label htmlFor="size">Size</Label>
          <SizeDropdown id="size">
            {product.sizes.map((size, index) => (
              <option key={index} value={size}>
                {size}
              </option>
            ))}
          </SizeDropdown>

          <AddToCartButton>Add to Cart</AddToCartButton>

          <ProductDescriptionTitle>PRODUCT INFO</ProductDescriptionTitle>
          <ProductDescription>{product.info}</ProductDescription>
        </ProductInfo>
      </Container>
    </MainContainer>
  );
};

export default ProductDetail;
