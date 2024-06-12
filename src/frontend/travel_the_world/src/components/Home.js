import React from 'react';
import Slideshow from './Slideshow';
import '../styles/Home.css';

const Home = () => {
    return (
        <div>
            <Slideshow />
            <div className="content">
                <div className="search-container">
                    <input type="text" placeholder="Search..." className="search-input" />
                    <button className="search-button">Search</button>
                </div>

                    <div className="intro-text">
                                    <h2>Travel the World: Your All-in-One Travel Companion Plan, Book, Explore!</h2>
                                    <p>Travel the World is your one-stop shop for all your travel needs. Explore breathtaking destinations, find step-by-step visa and interview guidance, and book flights, buses, and trains - all in one place.</p>
                                    <h3>Features:</h3>
                                    <ul>
                                        <li><strong>Destination Guides:</strong> Discover hidden gems and must-see attractions.</li>
                                        <li><strong>Visa & Interview Support:</strong> Navigate complex visa applications with confidence.</li>
                                        <li><strong>Seamless Booking:</strong> Book flights, buses, and trains with ease.</li>
                                        <li><strong>Personalized Profile:</strong> Manage your travel plans and track past adventures.</li>
                                        <li><strong>24/7 Support:</strong> Get help from our travel experts whenever you need it.</li>
                                    </ul>
                                    <p>Start your dream vacation today!</p>
                                </div>
                <div className="links">
                    <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer">Our Office Location</a>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                </div>
            </div>
        </div>
    );
};

export default Home;
