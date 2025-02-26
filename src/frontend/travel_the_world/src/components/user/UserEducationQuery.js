import React from 'react';
import UserNavbar from './UserNavbar';
import EducationQueryTable from './EducationQueryTable';
import Navbar from './../Navbar';
const UserEducationQuery = () => {
    return (
        <div className="user-container">
           <Navbar/>
            <UserNavbar/>
            <div className="user-content">
                <div className="intro-text">
                    <h2>Welcome </h2>
                    <p>Manage your application from here.</p>
                   <EducationQueryTable/>
                </div>

            </div>
        </div>
    );
};

export default UserEducationQuery;
