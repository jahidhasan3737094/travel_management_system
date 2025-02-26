import React from 'react';
import UserNavbar from './UserNavbar';
import UserTouristQueryTable from './UserTouristQueryTable';
import Navbar from './../Navbar';
const UserTouristQuery = () => {
    return (
        <div className="user-container">
            <Navbar/>
            <UserNavbar />
            <div className="user-content">
                <div className="intro-text">
                    <h2>Welcome</h2>
                    <p>Manage your application from here.</p>
                   <UserTouristQueryTable/>
                </div>

            </div>
        </div>
    );
};

export default UserTouristQuery;
