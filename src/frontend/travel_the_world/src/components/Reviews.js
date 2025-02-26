////
////import React, { useState, useEffect } from 'react';
////import axios from 'axios';
////import Navbar from './Navbar';
////const Reviews = () => {
////    const [reviews, setReviews] = useState([]);
////
////    useEffect(() => {
////        const fetchReviews = async () => {
////            try {
////                const response = await axios.get('http://localhost:8080/reviews/upload-review');
////                setReviews(response.data);
////            } catch (error) {
////                console.error('Error fetching reviews:', error);
////            }
////        };
////
////        fetchReviews();
////    }, []);
////
////    return (
////        <div>
////        <Navbar />
////            <h2>User Reviews</h2>
////            {reviews.length > 0 ? (
////                <ul>
////                    {reviews.map((review) => (
////                        <li key={review.id}>
////                            <h3>{review.username} ({review.rating}/5)</h3>
////                            <p>{review.reviewText}</p>
////                            {review.photoUrl && <img src={review.photoUrl} alt="Review" />}
////                            {review.videoUrl && <video controls src={review.videoUrl} />}
////                            <p>Posted on: {new Date(review.createdAt).toLocaleString()}</p>
////                        </li>
////                    ))}
////                </ul>
////            ) : (
////                <p>No reviews available.</p>
////            )}
////        </div>
////    );
////};
////
////export default Reviews;
//
//import React, { useState, useEffect } from 'react';
//import axios from 'axios';
//import Navbar from './Navbar';
//import Slideshow from './Slideshow'
//const Reviews = () => {
//    const [reviews, setReviews] = useState([]);
//    const [error, setError] = useState(null);
//
////    useEffect(() => {
////        const fetchReviews = async () => {
////            try {
////                const response = await axios.get('http://localhost:8080/reviews/upload-review');
////                if (Array.isArray(response.data)) {
////                    setReviews(response.data);
////                } else {
////                    throw new Error('Unexpected response format');
////                }
////            } catch (err) {
////                console.error('Error fetching reviews:', err);
////                setError('Failed to fetch reviews. Please try again later.');
////            }
////        };
////
////        fetchReviews();
////    }, []);
////
////useEffect(() => {
////    const fetchReviews = async () => {
////        try {
////            const response = await axios.get('http://localhost:8080/reviews/upload-review');
////            console.log('Fetched reviews response:', response.data);
////            if (Array.isArray(response.data)) {
////                setReviews(response.data);
////            } else {
////                throw new Error('Unexpected response format');
////            }
////        } catch (err) {
////            console.error('Error fetching reviews:', err);
////            setError('Failed to fetch reviews. Please try again later.');
////        }
////    };
////
////    fetchReviews();
////}, []);
////
////    return (
////        <div>
////            <Navbar />
////            <h2>User Reviews</h2>
////            {error && <p style={{ color: 'red' }}>{error}</p>}
////            {Array.isArray(reviews) && reviews.length > 0 ? (
////                <ul>
////                    {reviews.map((review) => (
////                        <li key={review.id}>
////                            <h3>{review.username} ({review.rating}/5)</h3>
////                            <p>{review.reviewText}</p>
////                            {review.photoUrl && <img src={review.photoUrl} alt="Review" />}
////                            {review.videoUrl && <video controls src={review.videoUrl} />}
////                            <p>Posted on: {new Date(review.createdAt).toLocaleString()}</p>
////                        </li>
////                    ))}
////                </ul>
////            ) : (
////                !error && <p>No reviews available.</p>
////            )}
////        </div>
////    );
////};
////
////export default Reviews;
//
//  useEffect(() => {
//        const fetchReviews = async () => {
//            try {
//                const response = await axios.get('http://localhost:8080/reviews/upload-review');
//                if (Array.isArray(response.data)) {
//                    setReviews(response.data);
//                } else {
//                    throw new Error('Unexpected response format');
//                }
//            } catch (err) {
//                console.error('Error fetching reviews:', err);
//                setError('Failed to fetch reviews. Please try again later.');
//            }
//        };
//
//        fetchReviews();
//    }, []);
//
//    return (
//        <div>
//            <Navbar />
//            <Slideshow/>
//            <h2>User Reviews</h2>
//            {error && <p style={{ color: 'red' }}>{error}</p>}
//            {reviews.length > 0 ? (
//                <ul>
//                    {reviews.map((review) => (
//                        <li key={review.id} >
//                            <h3>{review.username} ({review.rating}/5)</h3>
//                            <p>{review.reviewText}</p>
//                            {review.photoUrl && <img src={`http://localhost:8080${review.photoUrl}`} alt="Review" className="review-photo"/>}
//                            {review.videoUrl && <video controls src={`http://localhost:8080${review.videoUrl}`} className="review-video" />}
//                            <p>Posted on: {new Date(review.createdAt).toLocaleString()}</p>
//                        </li>
//                    ))}
//                </ul>
//            ) : (
//                !error && <p>No reviews available.</p>
//            )}
//        </div>
//    );
//};
//
//export default Reviews;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import Slideshow from './Slideshow';
import '../styles/reviews.css';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await axios.get('http://localhost:8080/reviews/upload-review');
                if (Array.isArray(response.data)) {
                    setReviews(response.data);
                } else {
                    throw new Error('Unexpected response format');
                }
            } catch (err) {
                console.error('Error fetching reviews:', err);
                setError('Failed to fetch reviews. Please try again later.');
            }
        };

        fetchReviews();
    }, []);

    // Function to generate stars based on rating
    const renderStars = (rating) => {
        return '⭐'.repeat(rating);
    };

    return (
        <div>
            <Navbar />
            <Slideshow />
            <div className="reviews-container">
                <h2 className="reviews-heading">User Reviews</h2>
                {error && <p className="reviews-error-message">{error}</p>}
                {reviews.length > 0 ? (
                    <ul className="reviews-list">
                        {reviews.map((review) => (
                            <li key={review.id} className="review-item">
                                <div className="review-header">
                                    <span>{review.username}</span>
                                    <span className="review-rating">{renderStars(review.rating)}</span>
                                </div>
                                <p className="review-text">{review.reviewText}</p>
                                {review.photoUrl && <img src={`http://localhost:8080${review.photoUrl}`} alt="Review" className="review-photo" />}
                                {review.videoUrl && <video controls src={`http://localhost:8080${review.videoUrl}`} className="review-video" />}
                                <p className="review-date">Posted on: {new Date(review.createdAt).toLocaleString()}</p>
                            </li>
                        ))}
                    </ul>
                ) : (
                    !error && <p>No reviews available.</p>
                )}
            </div>
        </div>
    );
};

export default Reviews;
