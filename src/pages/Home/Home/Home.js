import React from 'react';
import AboutSection from '../AboutSection/AboutSection';
import Banner from '../Banner/Banner';
import ServiceSection from '../ServiceSection/ServiceSection';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutSection></AboutSection>
            <ServiceSection></ServiceSection>
        </div>
    );
};

export default Home;