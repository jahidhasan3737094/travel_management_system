import React, { useState } from 'react';
import axios from 'axios';
import '../../styles/user/UserUpdateQueryForm.css';
const UserUpdateQueryForm = ({ query, onClose }) => {
    const [updatedQuery, setUpdatedQuery] = useState({
        firstName: query.firstName,
        lastName: query.lastName,
        userEmail: query.userEmail,
        contactNumber: query.contactNumber,
        educationCountry: query.educationCountry,
        educationLevel: query.educationLevel,
        queryCountry: query.queryCountry,
        documents: query.documents,
        subject:query.subject
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedQuery({
            ...updatedQuery,
            [name]: value
        });
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:8080/admin/user-queries/${query.id}`, updatedQuery);
            onClose(); // Close the modal after successful update
        } catch (error) {
            console.error("Error updating user query:", error);
        }
    };

    return (
        <div>
            <h2>Update Query</h2>
            <form onSubmit={handleUpdate}>
                <label htmlFor="firstName">First Name</label>
                <input
                    type="text"
                    placeholder="Enter First Name"
                    name="firstName"
                    value={updatedQuery.firstName}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="lastName">Last Name</label>
                <input
                    type="text"
                    placeholder="Enter Last Name"
                    name="lastName"
                    value={updatedQuery.lastName}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="userEmail">Email</label>
                <input
                    type="email"
                    placeholder="Enter Email"
                    name="userEmail"
                    value={updatedQuery.userEmail}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="contactNumber">Contact Number</label>
                <input
                    type="tel"
                    placeholder="Enter Contact Number"
                    name="contactNumber"
                    value={updatedQuery.contactNumber}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="educationCountry">Education Country</label>
                <input
                    type="text"
                    placeholder="Enter Education Country"
                    name="educationCountry"
                    value={updatedQuery.educationCountry}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="educationLevel">Education Level</label>
                <input
                    type="text"
                    placeholder="Enter Education Level"
                    name="educationLevel"
                    value={updatedQuery.educationLevel}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="queryCountry">Query Country</label>
                <input
                    type="text"
                    placeholder="Enter Query Country"
                    name="queryCountry"
                    value={updatedQuery.queryCountry}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="documents">Documents</label>
                <input
                    type="text"
                    placeholder="Enter Documents"
                    name="documents"
                    value={updatedQuery.documents}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="subject">Subject</label>

                    <textarea
                      id="subject"
                      name="subject"
                      value={updatedQuery.subject}
                      onChange={handleChange}
                      placeholder="Write something.."
                      style={{ height: '200px' }}
                      required
                      ></textarea>
                <div className="btn-group">
                    <input type="submit" value="Update" />
                    <button type="button" className="cancelbtn" onClick={onClose}>Cancel</button>
                </div>
            </form>
        </div>
    );
};

export default UserUpdateQueryForm;
