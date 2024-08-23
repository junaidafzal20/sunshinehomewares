import React from "react";
import HeroImage from "../components/common/HeroImage"; 

const HeroHome = () => {
  return (
    <div>
      <HeroImage
        imageUrl="/images/sofa.jpg"
        heading="DISCOVER QUALITY"
        buttonText="Explore Our Collection"
        showButton={true}
      />
    </div>
  );
};

export default HeroHome;
