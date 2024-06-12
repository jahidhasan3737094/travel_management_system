import React from 'react';
import '../styles/Slideshow.css';

const images = [
    'images/image1.png',
    'images/image2.png',
    'images/image3.png'
];

const Slideshow = () => {
    return (
        <div className="slideshow">
            {images.map((image, index) => (
                <div className="slide" key={index}>
                    <img src={image} alt={`Slide ${index + 1}`} />
                </div>
            ))}
        </div>
    );
};

export default Slideshow;
