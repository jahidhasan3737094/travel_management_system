import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UpdateQueryForm from './UpdateQueryForm'; // Assuming this is your update form component

import '../../styles/admin/UserQueryTable.css';

const UserQueryTable = () => {
    const [userQueries, setUserQueries] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [updateModalOpen, setUpdateModalOpen] = useState(false); // State to manage modal visibility
    const [selectedQuery, setSelectedQuery] = useState(null); // State to hold selected query for update

    useEffect(() => {
        fetchUserQueries();
    }, []);

    const fetchUserQueries = async () => {
        try {
            const response = await axios.get('http://localhost:8080/admin/user-queries');
            setUserQueries(response.data);
        } catch (error) {
            console.error("Error fetching user queries:", error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/admin/user-queries/${id}`);
            fetchUserQueries();
        } catch (error) {
            console.error("Error deleting user query:", error);
        }
    };

    const openUpdateModal = (query) => {
        setSelectedQuery(query);
        setUpdateModalOpen(true); // Open the update modal
    };

    const closeUpdateModal = () => {
        setUpdateModalOpen(false); // Close the update modal
        fetchUserQueries(); // Refresh user queries after update
    };

    const filteredQueries = userQueries.filter(query =>
        (query.firstName && query.firstName.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (query.lastName && query.lastName.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (query.country && query.country.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    return (
        <div>
            <input
                type="text"
                id="myInput"
                onChange={e => setSearchTerm(e.target.value)}
                placeholder="Search for names or countries.."
                title="Type in a name"
            />
            <table id="education_myTable">
                <thead>
                    <tr className="education-header">
                        <th style={{ width: '10%' }}>First Name</th>
                        <th style={{ width: '10%' }}>Last Name</th>
                        <th style={{ width: '15%' }}>Email</th>
                        <th style={{ width: '15%' }}>Contact</th>
                        <th style={{ width: '10%' }}>EducationCountry</th>
                        <th style={{ width: '10%' }}>Level</th>
                        <th style={{ width: '10%' }}>QueryCountry</th>
                        <th style={{ width: '10%' }}>Documents</th>
                        <th style={{ width: '10%' }}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredQueries.map(query => (
                        <tr key={query.id}>
                            <td>{query.firstName}</td>
                            <td>{query.lastName}</td>
                            <td>{query.userEmail}</td>
                            <td>{query.contactNumber}</td>
                            <td>{query.educationCountry}</td>
                            <td>{query.educationLevel}</td>
                            <td>{query.queryCountry}</td>
                            <td>{query.documents}</td>
                            <td>
                                <button onClick={() => openUpdateModal(query)}>Update</button>
                                <button onClick={() => handleDelete(query.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {updateModalOpen && selectedQuery && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeUpdateModal}>&times;</span>
                        <UpdateQueryForm query={selectedQuery} onClose={closeUpdateModal} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserQueryTable;
