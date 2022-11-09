import React from "react";
import { Title } from "../../../App";
import AboutSection from "../AboutSection/AboutSection";
import Banner from "../Banner/Banner";
import RecentPhoto from "../RecentPhoto/RecentPhoto";
import ServiceSection from "../ServiceSection/ServiceSection";

const Home = () => {
  return (
    <div>
      <Title title="Home" />
      <Banner></Banner>
      <AboutSection></AboutSection>
      <ServiceSection></ServiceSection>
      <RecentPhoto></RecentPhoto>
    </div>
  );
};

export default Home;
