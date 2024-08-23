import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import products from '../data/products';

// Styled components
const Section = styled.section`
  text-align: center;
  padding: 2rem;
  max-width: 100vw; /* Ensure section fits within viewport width */
  overflow-x: hidden; /* Prevent horizontal overflow */
`;

const Title = styled.h2`
  font-family: 'Poppins-SemiBold', 'Poppins', sans-serif;
  font-size: 24px;
  letter-spacing: 6px;
  line-height: 28.8px;
  text-decoration: none solid rgb(17, 17, 17);
  text-align: center;
  word-spacing: 0px;
  margin-bottom: 1rem;
`;

const Divider = styled.div`
  width: 50px;
  height: 3px;
  background-color: black;
  margin: 0 auto 2rem;
`;

const SliderContainer = styled.div`
  max-width: 100%; /* Ensure slider container fits within viewport */
  overflow: hidden; /* Prevent overflow from the slider */
  margin: 0 auto; /* Center the slider container */
`;

// Adjusting styling for arrows
const StyledSlider = styled(Slider)`
  position: relative; /* Ensure positioning context for custom arrows */

  .slick-slide {
    display: flex;
    justify-content: center;
    padding: 0 0.5rem; /* Space between images */
  }

  .slick-prev,
  .slick-next {
    font-size: 24px;
    color: transparent; /* Set color for arrows */
    z-index: 10;
    transition: color 0.3s ease;
    
    &::before {
      color: black; /* Ensure arrows are black */
    }
  }

  .slick-prev {
    left: 10px; /* Adjust position if needed */
  }

  .slick-next {
    right: 10px; /* Adjust position if needed */
  }
`;

const ProductCard = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 210px;
  box-sizing: border-box; /* Ensure padding and border are included in width */
  margin: 0 0.25rem; /* Adjust margin between cards */
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const ProductTitle = styled.p`
  font-size: 1rem;
  margin: 0.5rem 0;
`;

const ProductPrice = styled.p`
  font-size: 1rem;
  font-weight: 100;
  color: black;
  text-align: left;
  width: 100%;
`;

const ViewAllButton = styled.button`
  margin-top: 2rem;
  padding: 0.5rem 2rem;
  border: 1px solid #c76e6e;
  background-color: transparent;
  color: #c76e6e;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #a75050;
    color: white;
  }
`;

// Slider settings
const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true, // Enable default arrows
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export default function PopularPicksSlider() {
  return (
    <Section>
      <Title>POPULAR PICKS</Title>
      <Divider />
      <SliderContainer>
        <StyledSlider {...settings}>
          {products.map((product) => (
            <ProductCard key={product.id}>
              <ProductImage src={product.image} alt={product.title} />
              <ProductTitle>{product.title}</ProductTitle>
              <ProductPrice>{product.price}</ProductPrice>
            </ProductCard>
          ))}
        </StyledSlider>
      </SliderContainer>
      <ViewAllButton>View All Products</ViewAllButton>
    </Section>
  );
}
