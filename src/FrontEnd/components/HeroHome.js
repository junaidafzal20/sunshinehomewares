import React from "react";
import styled from "styled-components";

const Header = styled.header`
  padding-left: 0;
  margin: 0;
  overflow: hidden;
`;

const HeroContainer = styled.div`
  background-image: url("/images/sofa.jpg"); /* Hardcoded image */
  background-size: cover;
  background-position: center;
  height: 70vh;
  width: 100vw;
  background-repeat: no-repeat;
  position: relative;
  opacity: 0.8;
  box-sizing: border-box;
`;

const Mask = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  position: relative;
  z-index: 2;
`;

const Text = styled.div`
  text-align: center;
  color: white;
`;

const Button = styled.a`
  color: white;
  border: 1px solid white;
  padding: 0.75rem 1.25rem;
  font-size: 1.25rem;
  text-transform: uppercase;
  text-decoration: none;
  display: inline-block;
  transition: all 0.3s ease;

  &:hover {
    color: #c76e6e;
    background-color: white;
  }
`;

const HeroHome = () => {
  return (
    <Header>
      <HeroContainer>
        <Mask />
        <Content>
          <Text>
            <h1 className="mb-3">DISCOVER QUALITY</h1>
            <Button href="#!">Explore Our Collection</Button>
          </Text>
        </Content>
      </HeroContainer>
    </Header>
  );
};

export default HeroHome;
