import React from "react";
import HeroSlider from "../components/HeroSlider";
import PopularServices from "../components/PopularServices";
import WinterTips from "../components/WinterTips";
import ExpertVets from "../components/ExpertVets";
import WhyChooseUs from "../components/WhyChooseUs";

const HomePage = () => {
  return (
    <div>
      {/* Hero Slider Section */}
      <HeroSlider />

      {/* Popular Services Section */}
      <PopularServices />

      {/* Winter Tips Section */}
      <WinterTips />

      {/* Expert Vets Section */}
      <ExpertVets />
      {/* Why Choose Us Section */}
      <WhyChooseUs />
    </div>
  );
};

export default HomePage;
