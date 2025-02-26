import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AllUserUpdateInfoForm from './AllUserUpdateInfoForm'; // Assuming this is your update form component
import '../../styles/admin/AllUserTable.css';

const AllUserTable = () => {
    const [allUserInfo, setAllUserInfo] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [updateModalOpen, setUpdateModalOpen] = useState(false); // State to manage modal visibility
    const [selectedUser, setSelectedUser] = useState(null); // State to hold selected user for update

    useEffect(() => {
        fetchAllUsers();
    }, []);

    const fetchAllUsers = async () => {
        try {
            const response = await axios.get('http://localhost:8080/admin/all-user');
            setAllUserInfo(response.data);
        } catch (error) {
            console.error("Error fetching user info: ", error);
        }
    };

    const handleDelete = async (id) => {
        if (!id) {
            console.error("No ID provided for delete");
            return;
        }
        try {
            await axios.delete(`http://localhost:8080/admin/all-user/${id}`);
            fetchAllUsers();
        } catch (error) {
            console.error("Error deleting user info:", error);
        }
    };


    const openUpdateModal = (user) => {
        setSelectedUser(user);
        setUpdateModalOpen(true); // Open the update modal
    };

    const closeUpdateModal = () => {
        setUpdateModalOpen(false); // Close the update modal
        fetchAllUsers(); // Refresh user info after update
    };

    const filteredUsers = allUserInfo.filter(user =>
        (user.firstName && user.firstName.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (user.lastName && user.lastName.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (user.country && user.country.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (user.userEmail && user.userEmail.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    return (
        <div>
            <input
                type="text"
                id="myInput"
                onChange={e => setSearchTerm(e.target.value)}
                placeholder="Search for names, email, or country.."
                title="Type in a name"
            />
            <table id="myTable">
                <thead>
                    <tr className="header">
                        <th style={{ width: '10%' }}>First Name</th>
                        <th style={{ width: '10%' }}>Last Name</th>
                        <th style={{ width: '15%' }}>Email</th>
                        <th style={{ width: '15%' }}>Contact</th>
                        <th style={{width:'15%'}}>userType</th>
                        <th style={{ width: '10%' }}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredUsers.map(user => (
                        <tr key={user.userId}>
                            <td>{user.userFirstName}</td>
                            <td>{user.userLastName}</td>
                            <td>{user.userEmail}</td>
                            <td>{user.phoneNumber}</td>
                            <td>{user.userType}</td>
                            <td>
                                <button onClick={() => openUpdateModal(user)}>Update</button>
                                <button onClick={() => handleDelete(user.userId)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {updateModalOpen && selectedUser && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeUpdateModal}>&times;</span>
                        <AllUserUpdateInfoForm user={selectedUser} onClose={closeUpdateModal} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default AllUserTable;
