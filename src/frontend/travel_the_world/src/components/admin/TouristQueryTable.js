import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UpdateQueryForm from './UpdateQueryForm'; // Assuming this is your update form component
import '../../styles/admin/UserTouristQueryTable.css';

const TouristQueryTable = () => {
    const [userQueries, setUserQueries] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [touristUpdateModalOpen, setTouristUpdateModalOpen] = useState(false); // State to manage modal visibility
    const [touristSelectedQuery, setTouristSelectedQuery] = useState(null); // State to hold selected query for update

    useEffect(() => {
        fetchTouristUserQueries();
    }, []);

    const fetchTouristUserQueries = async () => {
        try {
            const response = await axios.get('http://localhost:8080/admin/tourist-user-queries');
            setUserQueries(response.data);
        } catch (error) {
            console.error("Error fetching user queries:", error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/admin/tourist_user_queries/${id}`);
            fetchTouristUserQueries();
        } catch (error) {
            console.error("Error deleting user query:", error);
        }
    };

    const touristOpenUpdateModal = (query) => {
        setTouristSelectedQuery(query);
        setTouristUpdateModalOpen(true); // Open the update modal
    };

    const closeUpdateModal = () => {
        setTouristUpdateModalOpen(false); // Close the update modal
        fetchTouristUserQueries(); // Refresh user queries after update
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
                id="mytouristInput"
                onChange={e => setSearchTerm(e.target.value)}
                placeholder="Search for names or countries.."
                title="Type in a name"
            />
            <table id="tourist-myTable">
                <thead>
                    <tr className="tourist-header">
                        <th style={{ width: '10%' }}>First Name</th>
                        <th style={{ width: '10%' }}>Last Name</th>
                        <th style={{ width: '25%' }}>Email</th>
                        <th style={{ width: '10%' }}>Contact</th>
                        <th style={{ width: '10%' }}>Tourist Country</th>
                        <th style={{ width: '10%' }}>Level</th>
                        <th style={{ width: '10%' }}>Query Country</th>
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
                            <td>{query.travelCountry}</td>
                            <td>{query.travelType}</td>
                            <td>{query.queryCountry}</td>
                            <td>{query.documents}</td>
                            <td>
                                <button onClick={() => touristOpenUpdateModal(query)}>Update</button>
                                <button onClick={() => handleDelete(query.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {touristUpdateModalOpen && touristSelectedQuery && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeUpdateModal}>&times;</span>
                        <UpdateQueryForm query={touristSelectedQuery} onClose={closeUpdateModal} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default TouristQueryTable;
