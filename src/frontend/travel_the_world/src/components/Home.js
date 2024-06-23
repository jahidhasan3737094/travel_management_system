import React from 'react';
import Slideshow from './Slideshow';
import Navbar from './Navbar';
import '../styles/Home.css';
import '../styles/education.css';
import '../styles/Sociallink.css';
import 'font-awesome/css/font-awesome.min.css';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div>

             <Navbar/>
             <Slideshow/>
            <div className="content">

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
                <div className="button-container">
                       <div className="button-column">
                                             <Link to="/education">
                                                 <img src={`${process.env.PUBLIC_URL}/images/education.jpg`} alt="Education" style={{ width: '40%' }} />
                                                 <button className="btn">Education</button>
                                             </Link>
                                         </div>
                                         <div className="button-column">
                                             <Link to="/tourism">
                                                 <img src={`${process.env.PUBLIC_URL}/images/image1.png`} alt="Tourism" style={{ width: '40%' }} />
                                                 <button className="btn">Tourism</button>
                                             </Link>
                                         </div>
                </div>
            </div>
            <div className="footer">
                <div className="links">
                    <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer">Our Office Location</a>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="fa fa-facebook"></a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="fa fa-instagram"></a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="fa fa-twitter"></a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="fa fa-linkedin"></a>
                    <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="fa fa-youtube"></a>
                </div>
            </div>
        </div>
    );
};

export default Home;
