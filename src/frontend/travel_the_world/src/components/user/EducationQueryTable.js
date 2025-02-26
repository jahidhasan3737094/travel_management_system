import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UpdateQueryForm from './UpdateQueryForm'; // Assuming you have an update form component
import '../../styles/user/UserEducationQueryTable.css';

const EducationQueryTable = () => {
    const [userQueries, setUserQueries] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [educationUpdateModalOpen, setEducationUpdateModalOpen] = useState(false);
    const [educationSelectedQuery, setEducationSelectedQuery] = useState(null);

    useEffect(() => {
        fetchEducationUserQueries();
    }, []);

    const fetchEducationUserQueries = async () => {
        try {
            let userEmail = localStorage.getItem("userEmail");

            if (!userEmail) {
                console.error("User email is missing. Please log in.");
                return;
            }

            userEmail = userEmail.trim();
           // console.log("Fetching education queries for:", userEmail); // Debugging log

            const response = await axios.get(`http://localhost:8080/user/education-user-queries/by-email?email=${encodeURIComponent(userEmail)}`);
            setUserQueries(response.data);
        } catch (error) {
            console.error("Error fetching education queries:", error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/user/education_user_queries/${id}`);
            fetchEducationUserQueries();
        } catch (error) {
            console.error("Error deleting education query:", error);
        }
    };

    const educationOpenUpdateModal = (query) => {
        setEducationSelectedQuery(query);
        setEducationUpdateModalOpen(true);
    };

    const closeUpdateModal = () => {
        setEducationUpdateModalOpen(false);
        fetchEducationUserQueries();
    };

    const filteredQueries = userQueries.filter(query =>
        (query.firstName && query.firstName.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (query.lastName && query.lastName.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (query.queryCountry && query.queryCountry.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    return (
        <div>
            <h2>Education Queries</h2>

            <input
                type="text"
                id="myInput"
                onChange={e => setSearchTerm(e.target.value)}
                placeholder="Search by Query country.."
                title="Type in a name"
            />

            <table id="myTable">
                <thead>
                    <tr className="header">
                        <th style={{ width: '10%' }}>Education Country</th>
                        <th style={{ width: '10%' }}>Level</th>
                        <th style={{ width: '10%' }}>Query Country</th>
                        <th style={{ width: '10%' }}>Documents</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredQueries.map(query => (
                        <tr key={query.id}>
                            <td>{query.educationCountry}</td>
                            <td>{query.educationLevel}</td>
                            <td>{query.queryCountry}</td>
                            <td>{query.documents}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {educationUpdateModalOpen && educationSelectedQuery && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeUpdateModal}>&times;</span>
                        <UpdateQueryForm query={educationSelectedQuery} onClose={closeUpdateModal} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default EducationQueryTable;
