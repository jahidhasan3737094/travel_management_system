import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../styles/admin/adminNavbar.css'; // Correct path to adminNavbar.css

const AdminNavbar = () => {
    const [activeTab, setActiveTab] = useState('Home');
    const [userData, setUserData] = useState({ name: 'Jahid', role: 'Admin', notifications: [] });
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch user data from the backend
        const fetchUserData = async () => {
            try {
                const response = await fetch('/api/user'); // Replace with your API endpoint
                const data = await response.json();
                setUserData(data);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();

        let prevScrollpos = window.pageYOffset;

        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            const navbar = document.getElementById("admin-navbar");

            if (prevScrollpos > currentScrollPos) {
                navbar.style.top = "0";
            } else {
                navbar.style.top = "-90px";
            }
            prevScrollpos = currentScrollPos;
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
        navigate(`/admin/${tabName.toLowerCase()}`);
    };

    const renderTabs = () => {
        const { role } = userData;
        const tabs = [];

        if (role === 'Admin') {
            tabs.push('CreateUser','All-User','EducationQuery','TouristQuery');
        } else if (role === 'EdcuationqueryEditor') {
            tabs.push('Notifications','NewTask', 'OnGoing', 'Completed');
        }else if (role === 'TouristQueryEditor') {
                     tabs.push('Notifications','NewTask', 'OnGoing', 'Completed');
         }else {
            // Add other roles if needed
        }

        return tabs.map((tab) => (
            <button
                key={tab}
                className={`tablinks ${activeTab === tab ? 'active' : ''}`}
                onClick={() => handleTabClick(tab)}
            >
                {tab}
            </button>
        ));
    };

    return (
        <nav id="admin-navbar" className="admin-navbar">
            <div className="admin-navbar-brand">Admin Panel</div>
            <ul className="admin-navbar-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/my-plan">Profile</Link></li>
                <li><Link to="/login">Logout</Link></li>
            </ul>
            <div className="admin-tab">
                <div className="admin-username">{userData.name}</div>
                {renderTabs()}
            </div>
        </nav>
    );
};

export default AdminNavbar;
