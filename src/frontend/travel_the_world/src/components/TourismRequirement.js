//import React, { useState } from 'react';
//import { useLocation } from 'react-router-dom';
//import TourismProcessQuery from './TourismProcessQuery';
//import '../styles/tourismRequirement.css';
//import Slideshow from './Slideshow';
//import Navbar from './Navbar';
//
//const TourismRequirement = () => {
//    const location = useLocation();
//    const { travelCountry } = location.state || {};
//    const [travelType, setTravelType] = useState('');
//    const [documents, setDocuments] = useState({});
//    const [isModalOpen, setIsModalOpen] = useState(false);
//
//    const documentLists = {
//        leisure: {
//            "Valid Passport": false,
//            "Visa Application Form": false,
//            "Passport Photos": false,
//            "Flight Itinerary": false,
//            "Hotel Booking": false,
//            "Travel Insurance": false,
//            "Proof of Financial Means": false,
//            "Cover Letter": false,
//        },
//        business: {
//            "Valid Passport": false,
//            "Visa Application Form": false,
//            "Passport Photos": false,
//            "Flight Itinerary": false,
//            "Hotel Booking": false,
//            "Travel Insurance": false,
//            "Proof of Financial Means": false,
//            "Cover Letter": false,
//            "Invitation Letter from Business Partner": false,
//            "Conference Registration (if applicable)": false,
//        },
//        student: {
//            "Valid Passport": false,
//            "Visa Application Form": false,
//            "Passport Photos": false,
//            "Flight Itinerary": false,
//            "Hostel/Accommodation Booking": false,
//            "Travel Insurance": false,
//            "Proof of Financial Means": false,
//            "Cover Letter": false,
//            "Acceptance Letter from Educational Institution": false,
//            "Proof of Tuition Payment": false,
//        }
//    };
//
//    const handleTypeChange = (event) => {
//        const selectedType = event.target.value;
//        setTravelType(selectedType);
//        setDocuments(documentLists[selectedType] || {});
//    };
//
//    const handleDocumentChange = (event) => {
//        setDocuments({
//            ...documents,
//            [event.target.name]: event.target.checked
//        });
//    };
//
//    const handleSubmit = () => {
//        setIsModalOpen(true);
//    };
//
//    const closeModal = () => {
//        setIsModalOpen(false);
//        setTravelType(''); // Clear travel type selection
//        setDocuments({}); // Clear selected documents
//    };
//
//    return (
//        <div className="requirement-container">
//            <Navbar />
//            <Slideshow />
//            <h2>Selected Travel Country: {travelCountry}</h2>
//            <label>Select Travel Type:</label>
//            <select value={travelType} onChange={handleTypeChange}>
//                <option value="">--Select Type--</option>
//                <option value="leisure">Leisure</option>
//                <option value="business">Business</option>
//                <option value="student">Student</option>
//            </select>
//
//            <div className="documents-list">
//                <h3>Required Documents</h3>
//                {Object.keys(documents).map((doc, index) => (
//                    <label key={index}>
//                        <input
//                            type="checkbox"
//                            name={doc}
//                            checked={documents[doc]}
//                            onChange={handleDocumentChange}
//                        />
//                        {doc}
//                    </label>
//                ))}
//            </div>
//
//            <button onClick={handleSubmit}>Start Process</button>
//            <TourismProcessQuery
//                isOpen={isModalOpen}
//                onClose={closeModal}
//                travelCountry={travelCountry}
//                travelType={travelType}
//                documents={documents}
//            />
//        </div>
//    );
//};
//
//export default TourismRequirement;

import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import TourismProcessQuery from "./TourismProcessQuery";
import "../styles/tourismRequirement.css";
import Slideshow from "./Slideshow";
import Navbar from "./Navbar";

const TourismRequirement = () => {
    const location = useLocation();
    const { travelCountry } = location.state || {};
    const [travelType, setTravelType] = useState("");
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
        },
    };

    const handleTypeChange = (event) => {
        const selectedType = event.target.value;
        setTravelType(selectedType);
        setDocuments(documentLists[selectedType] || {});
    };

    const handleDocumentChange = (event) => {
        setDocuments({
            ...documents,
            [event.target.name]: event.target.checked,
        });
    };

    const handleSubmit = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setTravelType(""); // Clear travel type selection
        setDocuments({}); // Clear selected documents
    };

    return (
        <div className="tourism-requirement-container">
            <Navbar />
            <Slideshow />
            <h2 className="tourism-requirement-heading">Selected Travel Country: {travelCountry}</h2>
            <label className="tourism-requirement-label">Select Travel Type:</label>
            <select
                className="tourism-requirement-select"
                value={travelType}
                onChange={handleTypeChange}
            >
                <option value="">--Select Type--</option>
                <option value="leisure">Leisure</option>
                <option value="business">Business</option>
                <option value="student">Student</option>
            </select>

            {travelType && (
                <div className="tourism-documents-overlay">
                    <div className="tourism-documents-header">
                        <h3 className="tourism-documents-title">Required Documents: {travelCountry}</h3>
                        <button className="tourism-overlay-close" onClick={closeModal}>
                            &times;
                        </button>
                    </div>
                    <div className="tourism-documents-list">
                        {Object.keys(documents).map((doc, index) => (
                            <label className="tourism-documents-label" key={index}>
                                <span className="tourism-document-name">{doc}</span>
                                <input
                                    type="checkbox"
                                    className="tourism-checkbox"
                                    name={doc}
                                    checked={documents[doc]}
                                    onChange={handleDocumentChange}
                                />
                            </label>
                        ))}
                    </div>
                    <button
                        className="tourism-requirement-button"
                        onClick={handleSubmit}
                    >
                        Start Process
                    </button>
                </div>
            )}

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
