import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import HeroImage from "../components/common/HeroImage";

const TileWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #F6F3EF;
  position: relative;
  border: 1px solid #ccc;
  padding: 20px;
`;

const ImageTile = styled.img`
  width: 404px;
  height: 404px;
  object-fit: cover;
`;

const ImageDescription = styled.div`
  text-align: center;
  margin-top: 10px;
  font-size: 14px;
  color: #333;
`;

const CustomHeroHome = styled(HeroImage)`
  width: 100%;
  height: 100%;
  background-image: url(${props => props.imageUrl});
  background-size: 759.6px 631.037px; /* Set explicit dimensions */
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
  
  .hero-text {
    max-width: 80%;
    margin: 0 auto;
  }
`;


const Tiles = () => {
  return (
    <Container fluid>
      <Row noGutters style={{ height: '85vh' }}>
        <Col xs={6} className="p-0">
          <TileWrapper>
            <ImageTile
              src="/images/rotating_candle.webp"
              alt="Rotating Candle"
            />
            <ImageDescription>
              Irregular Geometric Wave Rotating Candle
            </ImageDescription>
          </TileWrapper>
        </Col>
        <Col xs={6} className="p-0">
          <TileWrapper>
            <CustomHeroHome
              imageUrl="/images/tile2.jpg"
              heading="Home & Kitchen Products"
              buttonText="Explore Our Collection"
              showButton={false}
            />
          </TileWrapper>
        </Col>
      </Row>

      <Row noGutters style={{ height: '85vh' }}>
        <Col xs={6} className="p-0">
          <TileWrapper>
            <div>Tile 3 Content</div>
          </TileWrapper>
        </Col>
        <Col xs={6} className="p-0">
          <TileWrapper>
            <ImageTile
              src="/images/handmadeVase.jpg"
              alt="Handmade Textured Ceramic Vase"
            />
            <ImageDescription>
              Handmade Textured Ceramic Vase
            </ImageDescription>
          </TileWrapper>
        </Col>
      </Row>
    </Container>
  );
};

export default Tiles;
