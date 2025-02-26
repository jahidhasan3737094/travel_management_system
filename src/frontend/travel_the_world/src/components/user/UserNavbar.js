//import React, { useEffect, useState } from 'react';
//import { useNavigate } from 'react-router-dom';
//import '../../styles/user/userProfileNavbar.css';
//
//const UserNavbar = () => {
//    const [activeTab, setActiveTab] = useState('home');
//    const [userData, setUserData] = useState({ name: 'Jahid', role: 'user', notifications: [] });
//    const navigate = useNavigate();
//
//    const handleTabClick = (tabName) => {
//        const formattedTabName = tabName.toLowerCase();
//        console.log("Navigating to:", `/profile/info/${formattedTabName}`); // Debugging
//        setActiveTab(formattedTabName);
//        navigate(`/profile/info/${formattedTabName}`);
//    };
//
//    const renderTabs = () => {
//        const { role } = userData;
//        const tabs = [];
//
//        if (role === 'user') {
//            tabs.push('EducationQuery', 'TouristQuery');
//        }
//
//        return tabs.map((tab) => (
//            <button
//                key={tab}
//                className={`tablinks ${activeTab === tab.toLowerCase() ? 'active' : ''}`}
//                onClick={() => handleTabClick(tab)}
//            >
//                {tab}
//            </button>
//        ));
//    };
//
//    return (
//        <nav id="user-navbar" className="user-navbar">
//            <div className="user-tab">
//                <div className="user-username">{userData.name}</div>
//                {renderTabs()}
//            </div>
//        </nav>
//    );
//};
//
//export default UserNavbar;

//import React, { useEffect, useState } from 'react';
//import { useNavigate } from 'react-router-dom';
//import '../../styles/user/userProfileNavbar.css';
//
//const UserNavbar = () => {
//    const [activeTab, setActiveTab] = useState('home');
//    const [userData, setUserData] = useState({ name: '', role: 'user', notifications: [] });
//    const navigate = useNavigate();
//
//    useEffect(() => {
//        // Fetch logged-in user's name from localStorage
//        const storedUsername = localStorage.getItem("username");
//        console.log(localStorage.getItem("username"));
//
//        if (storedUsername) {
//            setUserData((prev) => ({ ...prev, name: storedUsername }));
//        }
//    }, []);
//
//    const handleTabClick = (tabName) => {
//        const formattedTabName = tabName.toLowerCase();
//        console.log("Navigating to:", `/profile/info/${formattedTabName}`); // Debugging
//        setActiveTab(formattedTabName);
//        navigate(`/profile/info/${formattedTabName}`);
//    };
//
//    const renderTabs = () => {
//        const { role } = userData;
//        const tabs = [];
//
//        if (role === 'user') {
//            tabs.push('EducationQuery', 'TouristQuery');
//        }
//
//        return tabs.map((tab) => (
//            <button
//                key={tab}
//                className={`tablinks ${activeTab === tab.toLowerCase() ? 'active' : ''}`}
//                onClick={() => handleTabClick(tab)}
//            >
//                {tab}
//            </button>
//        ));
//    };
//
//    return (
//        <nav id="user-navbar" className="user-navbar">
//            <div className="user-tab">
//                <div className="user-username">
//                    {userData.name ? userData.name : "Guest"} {/* ✅ Show logged-in user */}
//                </div>
//                {renderTabs()}
//            </div>
//        </nav>
//    );
//};
//
//export default UserNavbar;

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/user/userProfileNavbar.css';

const UserNavbar = () => {
    const [activeTab, setActiveTab] = useState('home');
    const [userData, setUserData] = useState({ name: '', role: 'user', notifications: [] });
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch logged-in user's data from localStorage stored as "user"
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            const userObj = JSON.parse(storedUser);
            // Extract the username (ensure your user object contains a 'username' field)
            setUserData(prev => ({ ...prev, name: userObj.username }));
        }
    }, []);

    const handleTabClick = (tabName) => {
        const formattedTabName = tabName.toLowerCase();
        console.log("Navigating to:", `/profile/info/${formattedTabName}`); // Debugging
        setActiveTab(formattedTabName);
        navigate(`/profile/info/${formattedTabName}`);
    };

    const renderTabs = () => {
        const { role } = userData;
        const tabs = [];

        if (role === 'user') {
            tabs.push('EducationQuery', 'TouristQuery');
        }

        return tabs.map((tab) => (
            <button
                key={tab}
                className={`tablinks ${activeTab === tab.toLowerCase() ? 'active' : ''}`}
                onClick={() => handleTabClick(tab)}
            >
                {tab}
            </button>
        ));
    };

    return (
        <nav id="user-navbar" className="user-navbar">
            <div className="user-tab">
                <div className="user-username">
                    {userData.name ? userData.name : "Guest"} {/* Show logged-in user */}
                </div>
                {renderTabs()}
            </div>
        </nav>
    );
};

export default UserNavbar;
