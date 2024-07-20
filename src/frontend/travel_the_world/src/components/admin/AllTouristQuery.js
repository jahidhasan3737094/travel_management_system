import React from 'react';
import AdminNavbar from './AdminNavbar';
import TouristQueryTable from './TouristQueryTable';

const AllEducationQuery = () => {
    return (
        <div className="admin-container">
            <AdminNavbar />
            <div className="admin-content">
                <div className="intro-text">
                    <h2>Welcome to the Admin Panel</h2>
                    <p>Manage your application from here.</p>
                   <TouristQueryTable/>
                </div>

            </div>
        </div>
    );
};

export default AllEducationQuery;
