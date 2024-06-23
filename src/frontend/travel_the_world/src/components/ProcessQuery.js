import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/processQuery.css';

const ProcessQuery = ({ isOpen, onClose, educationCountry, educationLevel, documents }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        userEmail: '',
        contactNumber: '',
        queryCountry: '',
        educationCountry,
        educationLevel,
        documents: Object.keys(documents).filter((doc) => documents[doc]).join(', '),
        subject: '',
    });
    const [successMessage, setSuccessMessage] = useState('');

    useEffect(() => {
        setFormData({
            ...formData,
            educationCountry,
            educationLevel,
            documents: Object.keys(documents).filter((doc) => documents[doc]).join(', '),
        });
    }, [educationCountry, educationLevel, documents]);

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
            const response = await axios.post('http://localhost:8080/admin/user-queries/submit', formData);

            if (response.status === 200) {
                console.log('Form submitted successfully:', response.data);
                setSuccessMessage('You will be contacted within 24 hours.');
                setFormData({
                    firstName: '',
                    lastName: '',
                    userEmail: '',
                    contactNumber: '',
                    queryCountry: '',
                    educationCountry,
                    educationLevel,
                    documents: Object.keys(documents).filter((doc) => documents[doc]).join(', '),
                    subject: '',
                });
                setTimeout(() => {
                    setSuccessMessage('');
                    onClose(); // Close the modal after success
                }, 3000);
            }
        } catch (error) {
            console.error('Error submitting form:', error);
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
                                        id="userEmail"
                                        name="userEmail"
                                        value={formData.userEmail}
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
                                    <label htmlFor="queryCountry">Query Country</label>
                                </div>
                                <div className="col-75">
                                    <input
                                        type="text"
                                        id="queryCountry"
                                        name="queryCountry"
                                        value={formData.queryCountry}
                                        onChange={handleChange}
                                        placeholder="Country related to your query.."
                                        required
                                    />
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
