import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

// Styled Component for the TileWrapper
const TileWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f6f3ef;
  position: relative;
  padding: 20px;
`;

// Styled Component for ImageTile
const ImageTile = styled.img`
  width: 404px;
  height: 404px;
  object-fit: cover;
`;

// Styled Component for ImageDescription
const ImageDescription = styled.div`
  text-align: center;
  margin-top: 10px;
  font-size: 14px;
  color: #333;
`;

// Styled Component for CustomTile
const CustomTile = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;
  box-sizing: border-box;
  overflow: hidden;
  position: absolute;

  .tile-text {
    max-width: 80%;
    margin: 0 auto;
    color: white;
    z-index: 2;
    font-size: 30px;
    font-weight: bold;
    text-decoration: underline;
  }
`;


// Styled Component for the Mask
const Mask = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

// Main Tiles Component
const Tiles = () => {
  return (
    <Container fluid>
      <Row noGutters style={{ height: "85vh" }}>
        <Col xs={6} className="p-0">
          <TileWrapper>
            <ImageTile src="/images/rotating_candle.webp" alt="Rotating Candle" />
            <ImageDescription>
              Irregular Geometric Wave Rotating Candle
            </ImageDescription>
          </TileWrapper>
        </Col>
        <Col xs={6} className="p-0">
          <TileWrapper>
            <CustomTile imageUrl="/images/tile2.jpg">
              <Mask />
              <div className="tile-text">Home & Kitchen Products</div>
            </CustomTile>
          </TileWrapper>
        </Col>
      </Row>

      <Row noGutters style={{ height: "85vh" }}>
        <Col xs={6} className="p-0">
          <TileWrapper>
            <CustomTile imageUrl="/images/tile3.webp">
              <Mask />
              <div className="tile-text">Crafting</div>
            </CustomTile>
          </TileWrapper>
        </Col>
        <Col xs={6} className="p-0">
          <TileWrapper>
            <ImageTile src="/images/handmadeVase.jpg" alt="Handmade Geometric Ceramic Vase" />
            <ImageDescription>
              Handmade Geometric Ceramic Vase
            </ImageDescription>
          </TileWrapper>
        </Col>
      </Row>
    </Container>
  );
};

export default Tiles;
