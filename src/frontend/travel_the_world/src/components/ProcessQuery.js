import React, { useState } from 'react';
import axios from 'axios';
import '../styles/processQuery.css';

const ProcessQuery = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        contactNumber: '',
        country: '',
        subject: '',
    });
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/admin/user-queries/submit', {
                firstName: formData.firstName,
                lastName: formData.lastName,
                userEmail: formData.email,
                contactNumber: formData.contactNumber,
                country: formData.country,
                subject: formData.subject,
            });

            if (response.status === 200) {
                console.log('Form submitted successfully:', response.data);
                // Show success message
                setSuccessMessage('You will be contacted within 24 hours.');
                // Optionally, reset the form fields
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    contactNumber: '',
                    country: '',
                    subject: '',
                });
                // Hide success message after a delay
                setTimeout(() => {
                    setSuccessMessage('');
                    onClose();
                }, 3000); // Adjust the delay as needed
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            // Handle form submission error (e.g., show an error message)
        }
    };

    if (!isOpen) return null;

    return (
        <>
            <div className="modal">
                <div className="modal-content">
                    <span onClick={onClose} className="close" title="Close Modal">&times;</span>
                    <div className="container">
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-25">
                                    <label htmlFor="firstName">First Name</label>
                                </div>
                                <div className="col-75">
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        placeholder="Your name.."
                                        required
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-25">
                                    <label htmlFor="lastName">Last Name</label>
                                </div>
                                <div className="col-75">
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        placeholder="Your last name.."
                                        required
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-25">
                                    <label htmlFor="email">Email</label>
                                </div>
                                <div className="col-75">
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Your email.."
                                        required
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-25">
                                    <label htmlFor="contactNumber">Contact No</label>
                                </div>
                                <div className="col-75">
                                    <input
                                        type="tel"
                                        id="contactNumber"
                                        name="contactNumber"
                                        value={formData.contactNumber}
                                        onChange={handleChange}
                                        placeholder="Your contact number.."
                                        required
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-25">
                                    <label htmlFor="country">Country</label>
                                </div>
                                <div className="col-75">
                                    <select
                                        id="country"
                                        name="country"
                                        value={formData.country}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Select your country..</option>
                                        <option value="australia">Australia</option>
                                        <option value="canada">Canada</option>
                                        <option value="usa">USA</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-25">
                                    <label htmlFor="subject">Subject</label>
                                </div>
                                <div className="col-75">
                                    <textarea
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        placeholder="Write something.."
                                        style={{ height: '200px' }}
                                        required
                                    ></textarea>
                                </div>
                            </div>
                            <div className="row">
                                <input type="submit" value="Submit" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {successMessage && (
                <div className="popup">
                    <div className="popup-content">
                        <span className="close" onClick={() => setSuccessMessage('')}>&times;</span>
                        <p>{successMessage}</p>
                    </div>
                </div>
            )}
        </>
    );
};

export default ProcessQuery;
//