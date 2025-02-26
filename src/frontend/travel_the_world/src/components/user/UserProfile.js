import React from 'react';
import '../../styles/user/userProfile.css';
import UserNavbar from './UserNavbar';
import Navbar from './../Navbar';

const UserProfile = () => {
    return(
         <div className="user-container">
         <UserNavbar/>
                <Navbar/>
                    <div className="user-content">
                        <div className="user-intro-text">
                            <h2>Welcome </h2>
                            <p>Manage your profile from here.</p>
                        </div>

                    </div>
                </div>

    );
};

export default UserProfile;