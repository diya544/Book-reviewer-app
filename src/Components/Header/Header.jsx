// src/Components/Home/Home.jsx

import React from 'react';
import Slider from 'react-slick';
import Header from '../Header/Header'; // Import the Header component
import './Home.css'; // Import the Home CSS
import 'slick-carousel/slick/slick.css'; // Import slick-carousel CSS
import 'slick-carousel/slick/slick-theme.css'; // Import slick-carousel theme CSS

// Sample data for carousels
const carouselItems = [
  { src: '/path/to/image1.jpg', alt: 'Image 1' },
  { src: '/path/to/image2.jpg', alt: 'Image 2' },
  // Add more items as needed
];

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="home-container">
      <Header /> {/* Include Header component */}
      
      {/* Full-height container for content */}
      <div className="home-content">
        <div className="home-header">
          <div className="logo">
            <img src="/path/to/logo.png" alt="Logo" /> {/* Include your logo */}
          </div>
          <h1>Welcome to My App</h1>
        </div>

        {/* Quote Section */}
        <div className="quote-section">
          <p>"Your inspirational quote goes here."</p>
        </div>

        {/* Embark Button */}
        <a href="/explore" className="embark-button">Start Exploring</a>

        {/* Content Section with Carousels */}
        <div className="content-section">
          <div className="carousel-container">
            <Slider {...settings}>
              {carouselItems.map((item, index) => (
                <div key={index}>
                  <img src={item.src} alt={item.alt} />
                </div>
              ))}
            </Slider>
          </div>
          {/* Add more carousels or content here if needed */}
        </div>

        {/* Contact Footer */}
        <div className="contact-footer">
          <h3>Contact Us</h3>
          <div className="social-media">
            <a href="#"><img src="/path/to/facebook-icon.png" alt="Facebook" /></a>
            <a href="#"><img src="/path/to/twitter-icon.png" alt="Twitter" /></a>
            {/* Add more social media icons */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
