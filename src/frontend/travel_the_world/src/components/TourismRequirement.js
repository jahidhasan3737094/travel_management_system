import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import TourismProcessQuery from './TourismProcessQuery';
import '../styles/requirement.css';
import Slideshow from './Slideshow';
import Navbar from './Navbar';

const TourismRequirement = () => {
    const location = useLocation();
    const { travelCountry } = location.state || {};
    const [travelType, setTravelType] = useState('');
    const [documents, setDocuments] = useState({});
    const [isModalOpen, setIsModalOpen] = useState(false);

    const documentLists = {
        leisure: {
            "Valid Passport": false,
            "Visa Application Form": false,
            "Passport Photos": false,
            "Flight Itinerary": false,
            "Hotel Booking": false,
            "Travel Insurance": false,
            "Proof of Financial Means": false,
            "Cover Letter": false,
        },
        business: {
            "Valid Passport": false,
            "Visa Application Form": false,
            "Passport Photos": false,
            "Flight Itinerary": false,
            "Hotel Booking": false,
            "Travel Insurance": false,
            "Proof of Financial Means": false,
            "Cover Letter": false,
            "Invitation Letter from Business Partner": false,
            "Conference Registration (if applicable)": false,
        },
        student: {
            "Valid Passport": false,
            "Visa Application Form": false,
            "Passport Photos": false,
            "Flight Itinerary": false,
            "Hostel/Accommodation Booking": false,
            "Travel Insurance": false,
            "Proof of Financial Means": false,
            "Cover Letter": false,
            "Acceptance Letter from Educational Institution": false,
            "Proof of Tuition Payment": false,
        }
    };

    const handleTypeChange = (event) => {
        const selectedType = event.target.value;
        setTravelType(selectedType);
        setDocuments(documentLists[selectedType] || {});
    };

    const handleDocumentChange = (event) => {
        setDocuments({
            ...documents,
            [event.target.name]: event.target.checked
        });
    };

    const handleSubmit = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setTravelType(''); // Clear travel type selection
        setDocuments({}); // Clear selected documents
    };

    return (
        <div className="requirement-container">
            <Navbar />
            <Slideshow />
            <h2>Selected Travel Country: {travelCountry}</h2>
            <label>Select Travel Type:</label>
            <select value={travelType} onChange={handleTypeChange}>
                <option value="">--Select Type--</option>
                <option value="leisure">Leisure</option>
                <option value="business">Business</option>
                <option value="student">Student</option>
            </select>

            <div className="documents-list">
                <h3>Required Documents</h3>
                {Object.keys(documents).map((doc, index) => (
                    <label key={index}>
                        <input
                            type="checkbox"
                            name={doc}
                            checked={documents[doc]}
                            onChange={handleDocumentChange}
                        />
                        {doc}
                    </label>
                ))}
            </div>

            <button onClick={handleSubmit}>Start Process</button>
            <TourismProcessQuery
                isOpen={isModalOpen}
                onClose={closeModal}
                travelCountry={travelCountry}
                travelType={travelType}
                documents={documents}
            />
        </div>
    );
};

export default TourismRequirement;
