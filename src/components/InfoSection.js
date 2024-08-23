import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

const SectionContainer = styled(Container)`
  padding: 60px 0;
  text-align: center;
`;

const ImageBox = styled.div`
  background: url(${props => props.bgImage}) no-repeat center center;
  background-size: cover; /* Ensures the image covers the entire box */
  height: 383px;
  width: 383px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;



const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  padding: 20px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h4`
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 10px;
  letter-spacing: 8px;
`;

const SubTitle = styled.h5`
  margin-bottom: 5px;
  letter-spacing: 2px;
`;

const Link = styled.a`
  color: #fff;
  font-size: 15px;
  text-decoration: underline;
  margin-top: 10px;
`;

const InfoSection = () => {
    return (
      <SectionContainer>
        <Row>
          <Col md={4}>
            <ImageBox bgImage="/images/info1.jpg">
              <Overlay>
                <SubTitle>Locally Owned</SubTitle>
                <Title>Our Brand</Title>
                <hr style={{ width: '10%', border: '1px solid #fff' }} />
                <Link href="#journey">Our Journey</Link>
              </Overlay>
            </ImageBox>
          </Col>
          <Col md={4}>
            <ImageBox bgImage="/images/info2.webp">
              <Overlay>
                <SubTitle>Why Choose Us?</SubTitle>
                <Title>Quality</Title>
                <hr style={{ width: '10%', border: '1px solid white' }} />
                <Link href="#approaches">Our Approaches</Link>
              </Overlay>
            </ImageBox>
          </Col>
          <Col md={4}>
            <ImageBox bgImage="/images/info3.webp">
              <Overlay>
                <SubTitle>Want to Know Us?</SubTitle>
                <Title>Australia</Title>
                <hr style={{ width: '10%', border: '1px solid #fff' }} />
                <Link href="#contact">Contact Us</Link>
              </Overlay>
            </ImageBox>
          </Col>
        </Row>
      </SectionContainer>
    );
  };
  
  export default InfoSection;
  