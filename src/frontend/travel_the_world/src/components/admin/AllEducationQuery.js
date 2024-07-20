import React from 'react';
import AdminNavbar from './AdminNavbar';
import UserQueryTable from './UserQueryTable';

const AllEducationQuery = () => {
    return (
        <div className="admin-container">
            <AdminNavbar />
            <div className="admin-content">
                <div className="intro-text">
                    <h2>Welcome to the Admin Panel</h2>
                    <p>Manage your application from here.</p>
                   <UserQueryTable/>
                </div>

            </div>
        </div>
    );
};

export default AllEducationQuery;
