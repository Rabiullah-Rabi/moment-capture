import React from 'react';
import AboutSection from '../AboutSection/AboutSection';
import Banner from '../Banner/Banner';
import RecentPhoto from '../RecentPhoto/RecentPhoto';
import ServiceSection from '../ServiceSection/ServiceSection';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutSection></AboutSection>
            <ServiceSection></ServiceSection>
            <RecentPhoto></RecentPhoto>
        </div>
    );
};

export default Home;