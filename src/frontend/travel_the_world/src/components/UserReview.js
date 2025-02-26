//// src/components/Reviews.js
//
//import React, { useState } from 'react';
//import AuthService from '../services/AuthService';
//import axios from 'axios';
//import '../styles/reviews.css';
//import UserNavbar from './user/UserNavbar';
//import Navbar from './Navbar';
//const UserReview = () => {
//    const [rating, setRating] = useState(0);
//    const [reviewText, setReviewText] = useState('');
//    const [photo,setPhoto]=useState(null);
//    const [video,setVideo]=useState(null);
//    const [message, setMessage] =useState('');
//
//    const handleSubmit = async (e) => {
//        e.preventDefault();
//
//        if (video && video.size > 10 * 1024 * 1024) { // 10MB size limit
//            setMessage("Video size exceeds 10MB limit");
//            return;
//        }
//
//        const formData = new FormData();
//        formData.append("rating", rating);
//        formData.append("reviewText", reviewText);
//        if (photo) formData.append("photo", photo);
//        if (video) formData.append("video", video);
//
//        try {
//            const response = await axios.post(
//                "http://localhost:8080/reviews/upload-review",
//                formData,
//                {
//                    headers: {
//                        "Content-Type": "multipart/form-data",
//                        Authorization: `Bearer ${localStorage.getItem("token")}`,
//                    },
//                }
//            );
//
//            setMessage("Review submitted successfully");
//            setRating(0);
//            setReviewText("");
//            setPhoto(null);
//            setVideo(null);
//        } catch (error) {
//            if(error.response?.status === 413)
//            {
//                setMessage("File size exceeds the 10MB limit.Please upload a smaller file.");
//            }else{
//                setMessage("Failed to submit review, please try again later.");
//            }
//
//        }
//    };
//
//
//
//
//    return (
//           <div>
//
//               <Navbar />
//               <h2>Submit Your Review</h2>
//               {message && <p>{message}</p>}
//               <form onSubmit={handleSubmit}>
//                   <label>
//                       Rating (1-5):
//                       <input
//                           type="number"
//                           value={rating}
//                           onChange={(e) => setRating(e.target.value)}
//                           min="1"
//                           max="5"
//                           required
//                       />
//                   </label>
//                   <br />
//                   <label>
//                       Review:
//                       <textarea
//                           value={reviewText}
//                           onChange={(e) => setReviewText(e.target.value)}
//                           required
//                       />
//                   </label>
//                   <br />
//                   <label>
//                       Upload Photo:
//                       <input type="file" accept="image/*" onChange={(e) => setPhoto(e.target.files[0])} />
//                   </label>
//                   <br />
//                   <label>
//                       Upload Video:
//                       <input type="file" accept="video/*" onChange={(e) => setVideo(e.target.files[0])} />
//                   </label>
//                   <br />
//                   <button type="submit">Submit Review</button>
//               </form>
//           </div>
//       );
//};
//
//export default UserReview;

import React, { useState } from 'react';
import axios from 'axios';
import '../styles/userreview.css';
import Navbar from './Navbar';

const UserReview = () => {
    const [rating, setRating] = useState(0);
    const [reviewText, setReviewText] = useState('');
    const [photo, setPhoto] = useState(null);
    const [video, setVideo] = useState(null);
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (video && video.size > 10 * 1024 * 1024) {
            setMessage("Video size exceeds 10MB limit");
            return;
        }

        const formData = new FormData();
        formData.append("rating", rating);
        formData.append("reviewText", reviewText);
        if (photo) formData.append("photo", photo);
        if (video) formData.append("video", video);

        try {
            const response = await axios.post(
                "http://localhost:8080/reviews/upload-review",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                }
            );
            setMessage("Review submitted successfully");
            setRating(0);
            setReviewText("");
            setPhoto(null);
            setVideo(null);
        } catch (error) {
            if (error.response?.status === 413) {
                setMessage("File size exceeds the 10MB limit. Please upload a smaller file.");
            } else {
                setMessage("Failed to submit review. Please try again later.");
            }
        }
    };

    return (
        <div>
            <Navbar />
            <h2>Submit Your Review</h2>
            {message && <p>{message}</p>}
            <form onSubmit={handleSubmit}>
                <label>
                    Rating (1-5):
                    <input
                        type="number"
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                        min="1"
                        max="5"
                        required
                    />
                </label>
                <br />
                <label>
                    Review:
                    <textarea
                        value={reviewText}
                        onChange={(e) => setReviewText(e.target.value)}
                        required
                    />
                </label>
                <br />
                <label>
                    Upload Photo:
                    <input type="file" accept="image/*" onChange={(e) => setPhoto(e.target.files[0])} />
                </label>
                <br />
                <label>
                    Upload Video:
                    <input type="file" accept="video/*" onChange={(e) => setVideo(e.target.files[0])} />
                </label>
                <br />
                <button type="submit">Submit Review</button>
            </form>
        </div>
    );
};

export default UserReview;
