import React, { useState } from 'react';
import ProcessQuery from './ProcessQuery';
import '../styles/requirement.css';

const Requirement = () => {
    const [educationLevel, setEducationLevel] = useState('');
    const [documents, setDocuments] = useState({});
    const [isModalOpen, setIsModalOpen] = useState(false);

    const documentLists = {
        undergraduate: {
            "Valid Passport": false,
            "All Transcripts": false,
            "All Certificates": false,
            "IELTS/MOI/SAT": false,
            "Recommendation/Reference Letters": false,
            "Statement of Purpose (SOP)": false,
            "Bank Statement (minimum $30k-$50k)": false,
            "Job Experience Letter (if any, optional)": false,
        },
        masters: {
            "Valid Passport": false,
            "Academic Transcripts (Undergraduate, HSC, SSC)": false,
            "All Certificates": false,
            "IELTS/MOI/SAT": false,
            "Recommendation/Reference Letters": false,
            "Statement of Purpose (SOP)": false,
            "Bank Statement (minimum $30k-$50k)": false,
            "Job Experience Letter (if any, optional)": false,
            "Curriculum Vitae (CV) or Resume": false,
        },
        phd: {
            "Academic Transcripts": false,
            "Curriculum Vitae (CV) or Resume": false,
            "Statement of Purpose (SOP)": false,
            "Letters of Recommendation": false,
            "Research Proposal (Optional)": false,
            "English Language Proficiency Test Scores (IELTS/SAT/TOEFL)": false,
            "Standardized Test Scores (GMAT, GRE)": false,
        }
    };

    const handleLevelChange = (event) => {
        const selectedLevel = event.target.value;
        setEducationLevel(selectedLevel);
        setDocuments(documentLists[selectedLevel] || {});
    };

    const handleDocumentChange = (event) => {
        setDocuments({
            ...documents,
            [event.target.name]: event.target.checked
        });
    };

    const handleSubmit = () => {
        // Open the modal
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="requirement-container">
            <label>Select Education Level:</label>
            <select value={educationLevel} onChange={handleLevelChange}>
                <option value="">--Select Level--</option>
                <option value="undergraduate">Undergraduate</option>
                <option value="masters">Masters</option>
                <option value="phd">PhD</option>
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
            <ProcessQuery isOpen={isModalOpen} onClose={closeModal} />
        </div>
    );
};

export default Requirement;
//