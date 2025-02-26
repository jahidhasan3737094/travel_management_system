// AdminProfile.js
import React from 'react';
import AdminNavbar from './AdminNavbar';
import '../../styles/admin/adminProfile.css';

const AdminProfile = () => {
    return (
        <div className="admin-profile">
            <AdminNavbar />
            <div className="admin-content">
                <h2>Welcome, Admin!</h2>
                <p>Manage your system settings and users from the dashboard.</p>
            </div>
        </div>
    );
};

export default AdminProfile;