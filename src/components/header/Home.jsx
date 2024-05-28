import React from 'react'
import Header from './Header';
import Poster from './Poster';
import Slider from './Slider';
import About from './About';
import Services from './Services';
import FaqAccordion from './FaqAccordion';
import AdoptionStories from './AdoptionStories';
import TeamCarousel from './TeamCarousel';
import TestimonialCarousel from './TestimonialCarousel';
import BlogSection from './BlogSection';
import Footer from './Footer';
function Home() {
    return (
        <div>
            <Header />
            <Poster />
            <About />
            <Services />
            <FaqAccordion />
            <AdoptionStories />
            <TeamCarousel />
            <TestimonialCarousel />
            <BlogSection/>
            <Footer/>
            {/* <Slider /> */}
        </div>
    )
}

export default Home;
