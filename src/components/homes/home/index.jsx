import HeaderOne from "@/src/layout/headers/header";
import React from "react";
import AboutArea from "./about-area";
import SliderArea from "./slider-area";
import FeatureArea from "./feature-area";
import Footer from "@/src/layout/footers/footer";

const HomeOne = () => {
  return (
    <>
      <HeaderOne />
      <SliderArea />
      <AboutArea /> 
      <FeatureArea />
      <Footer />
    </>
  );
};

export default HomeOne;
