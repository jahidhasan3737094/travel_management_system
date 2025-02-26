import React from 'react';
import AdminNavbar from './AdminNavbar';
import AllUserTable from './AllUserTable';

const AllUserInfo = () => {
    return (
        <div className="admin-container">
            <AdminNavbar />
            <div className="intro-text">
                <h2>Welcome to Admin Panel</h2>
                <p>Manage ALL User Details here.</p>
                <AllUserTable/>
            </div>
        </div>
    );
};

export default AllUserInfo;
