//import React from "react";
//import Navbar from "./Navbar";
//import Slideshow from './Slideshow'
//import '../styles/Sociallink.css';
//import 'font-awesome/css/font-awesome.min.css';
//const Contact = () => {
//    return (
//            <div>
//            <Navbar />
//            <Slideshow/>
//        <div style={{ textAlign: "center", padding: "20px" }}>
//            <h2>Contact Information</h2>
//            <h2><strong>Contact Email:</strong> exploreworldanytime@gmail.com</h2>
//            <p><strong>Hotline WhatsAppNumber:</strong> +1 (929) 586-7442</p>
//            <p><strong>Office Address:</strong> 95 Waring PL, Yonkers, NY</p>
//        </div>
//        <div style={{ textAlign: "center", padding: "20px" }}>
//
//                    <p><strong>Hotline WhatsAppNumber:</strong> +1 (646) 750-3645</p>
//                    <p><strong>Office Address:</strong> 95 Waring PL, Yonkers, NY</p>
//                </div>
//
//        <div className="footer">
//                        <div className="links">
//                            <a href="https://www.google.com/maps/search/?api=1&query=95+Waring+Pl,+Yonkers,+NY+10703" target="_blank" rel="noopener noreferrer">Our Office Location</a>
//                            <a href="https://www.facebook.com/profile.php?id=61563220906458" target="_blank" rel="noopener noreferrer" className="fa fa-facebook"></a>
//                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="fa fa-instagram"></a>
//                            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="fa fa-twitter"></a>
//                            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="fa fa-linkedin"></a>
//                            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="fa fa-youtube"></a>
//                        </div>
//                    </div>
//       </div>
//
//
//    );
//};
//
//export default Contact;


import React from "react";
import Navbar from "./Navbar";
import Slideshow from './Slideshow';
import '../styles/Sociallink.css';
import 'font-awesome/css/font-awesome.min.css';

const Contact = () => {
    return (
        <div>
            <Navbar />
            <div className="slideshow-container">
                <Slideshow />
                <div className="overlay-text"> {/* ✅ Added overlay for text */}
                    <h2>Contact Information</h2>
                    <p><strong>Contact Email:</strong> exploreworldanytime@gmail.com</p>
                    <p><strong>Hotline WhatsAppNumber:</strong> +1 (929) 586-7442</p>
                    <p><strong>Office Address:</strong> 95 Waring PL, Yonkers, NY</p>
                    <p><strong>Hotline WhatsAppNumber:</strong> +1 (646) 750-3645</p>
                </div>
            </div>

            <div className="footer">
                <div className="links">
                    <a href="https://www.google.com/maps/search/?api=1&query=95+Waring+Pl,+Yonkers,+NY+10703" target="_blank" rel="noopener noreferrer">Our Office Location</a>
                    <a href="https://www.facebook.com/profile.php?id=61563220906458" target="_blank" rel="noopener noreferrer" className="fa fa-facebook"></a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="fa fa-instagram"></a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="fa fa-twitter"></a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="fa fa-linkedin"></a>
                    <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="fa fa-youtube"></a>
                </div>
            </div>
        </div>
    );
};

export default Contact;
