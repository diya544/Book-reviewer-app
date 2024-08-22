// src/Components/Home/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import './Home.css'; // Ensure the path to the CSS file is correct
import 'slick-carousel/slick/slick.css'; // Import slick-carousel CSS
import 'slick-carousel/slick/slick-theme.css'; // Import slick-carousel theme CSS

// Import images with correct paths
import book1 from './assets/book1.jpg';
import book2 from './assets/book2.jpg';
import book3 from './assets/book3.jpg';
import genre1 from './assets/genre1.jpg';
import genre2 from './assets/genre2.jpg';
import genre3 from './assets/genre3.jpg';
import newRelease1 from './assets/newRelease1.jpg';
import newRelease2 from './assets/newRelease2.jpg';
import newRelease3 from './assets/newRelease3.jpg';
import logo from './assets/logo.jpg';

const featuredBooks = [
    { src: book1, alt: 'Featured Book 1' },
    { src: book2, alt: 'Featured Book 2' },
    { src: book3, alt: 'Featured Book 3' },
];

const popularGenres = [
    { src: genre1, alt: 'Genre 1' },
    { src: genre2, alt: 'Genre 2' },
    { src: genre3, alt: 'Genre 3' },
];

const newlyReleasedBooks = [
    { src: newRelease1, alt: 'New Release 1' },
    { src: newRelease2, alt: 'New Release 2' },
    { src: newRelease3, alt: 'New Release 3' },
];

const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
};

const Home = () => {
    return (
        <div className="home-container">
            <div className="home-header">
                <img src={logo} alt="BookReviewer Logo" className="logo" />
                <h1>Book Reviewer</h1>
            </div>
            <div className="quote-section">
                <p>"To read is to voyage through time.” – Carl Sagan</p>
            </div>
            <Link to="/login" className="embark-button">Embark on your journey</Link>
            <div className="content-section">
                <div className="carousel-container">
                    <h2>Featured Books</h2>
                    <Slider {...carouselSettings}>
                        {featuredBooks.map((book, index) => (
                            <div key={index}>
                                <img src={book.src} alt={book.alt} />
                            </div>
                        ))}
                    </Slider>
                </div>
                <div className="carousel-container">
                    <h2>Popular Genres</h2>
                    <Slider {...carouselSettings}>
                        {popularGenres.map((genre, index) => (
                            <div key={index}>
                                <img src={genre.src} alt={genre.alt} />
                            </div>
                        ))}
                    </Slider>
                </div>
                <div className="carousel-container">
                    <h2>Newly Released Books</h2>
                    <Slider {...carouselSettings}>
                        {newlyReleasedBooks.map((book, index) => (
                            <div key={index}>
                                <img src={book.src} alt={book.alt} />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
            <div className="contact-footer">
                <h3>Contact Us</h3>
                <div className="social-media">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <img src="/facebook-icon.png" alt="Facebook" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <img src="/twitter-icon.png" alt="Twitter" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Home;
