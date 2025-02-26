//import React, { useEffect, useState } from 'react';
//import { Link, useNavigate } from 'react-router-dom';
//import '../../styles/admin/adminNavbar.css'; // Correct path to adminNavbar.css
//
//const AdminNavbar = () => {
//    const [activeTab, setActiveTab] = useState('Home');
//    const [userData, setUserData] = useState({ name: 'Jahid', role:'Admin', notifications: [] });
//    const navigate = useNavigate();
//
//    useEffect(() => {
//        // Fetch user data from the backend
////        const fetchUserData = async () => {
////            try {
////                const response = await fetch('/api/user'); // Replace with your API endpoint
////                const data = await response.json();
////                setUserData(data);
////            } catch (error) {
////                console.error('Error fetching user data:', error);
////            }
////        };
////
////        fetchUserData();
//
//        let prevScrollpos = window.pageYOffset;
//
//        const handleScroll = () => {
//            const currentScrollPos = window.pageYOffset;
//            const navbar = document.getElementById("admin-navbar");
//
//            if (prevScrollpos > currentScrollPos) {
//                navbar.style.top = "0";
//            } else {
//                navbar.style.top = "-90px";
//            }
//            prevScrollpos = currentScrollPos;
//        };
//
//        window.addEventListener('scroll', handleScroll);
//
//        return () => {
//            window.removeEventListener('scroll', handleScroll);
//        };
//    }, []);
//
//    const handleTabClick = (tabName) => {
//        setActiveTab(tabName);
//        navigate(`/admin/${tabName.toLowerCase()}`);
//    };
//
//    const renderTabs = () => {
//        const { role } = userData;
//        const tabs = [];
//
//        if (role === 'Admin') {
//            tabs.push('CreateUser','All-User','EducationQuery','TouristQuery');
//        } else if (role === 'EdcuationqueryEditor') {
//            tabs.push('Notifications','NewTask', 'OnGoing', 'Completed');
//        }else if (role === 'TouristQueryEditor') {
//                     tabs.push('Notifications','NewTask', 'OnGoing', 'Completed');
//         }else {
//            // Add other roles if needed
//        }
//
//        return tabs.map((tab) => (
//            <button
//                key={tab}
//                className={`tablinks ${activeTab === tab ? 'active' : ''}`}
//                onClick={() => handleTabClick(tab)}
//            >
//                {tab}
//            </button>
//        ));
//    };
//
//    return (
//        <nav id="admin-navbar" className="admin-navbar">
//            <div className="admin-navbar-brand">Admin Panel</div>
//            <ul className="admin-navbar-links">
//                <li><Link to="/">Home</Link></li>
//                <li><Link to="/my-plan">Profile</Link></li>
//                <li><Link to="/login">Logout</Link></li>
//            </ul>
//            <div className="admin-tab">
//                <div className="admin-username">{userData.name}</div>
//                {renderTabs()}
//            </div>
//        </nav>
//    );
//};
//
//export default AdminNavbar;
////
//so far everything works.
//working for logged in username on navbar.
//import React, { useEffect, useState } from 'react';
//import { Link, useNavigate } from 'react-router-dom';
//import '../../styles/admin/adminNavbar.css';
//
//const AdminNavbar = () => {
//    const [activeTab, setActiveTab] = useState('Home');
//    const [userData, setUserData] = useState({ name: '', role: '' });
//    const navigate = useNavigate();
//
//    useEffect(() => {
//        // ✅ Fetch admin data from the backend
//        const fetchAdminData = async () => {
//            try {
//                const token = localStorage.getItem("adminToken");
//                console.log("Admin Token Being Sent:", token); // ✅ Log the token
//
//                if (!token) {
//                    console.error("Admin not authenticated");
//                    navigate("/admin/login");
//                    return;
//                }
//
//                const response = await fetch('http://localhost:8080/api/admin/me', {
//                    method: "GET",
//                    headers: {
//                        "Authorization": `Bearer ${token}`, // ✅ Ensure correct format
//                        "Content-Type": "application/json"
//                    }
//                });
//
//                if (!response.ok) {
//                    const errorText = await response.text();
//                    throw new Error(`Error fetching admin data: ${response.status} - ${errorText}`);
//                }
//
//                const data = await response.json();
//                console.log("Fetched Admin Data:", data); // ✅ Log backend response
//                setUserData({ name: data.username, role: data.role });
//
//            } catch (error) {
//                console.error('Error fetching admin data:', error);
//            }
//        };
//
//        fetchAdminData();
//
//    }, [navigate]);
//
//    return (
//        <nav id="admin-navbar" className="admin-navbar">
//            <div className="admin-navbar-brand">Admin Panel</div>
//            <ul className="admin-navbar-links">
//                <li><Link to="/admin/home">Home</Link></li> {/* ✅ Correct link */}
//                <li><Link to="/admin/profile">Profile</Link></li>
//                <li>
//                    <Link to="/admin/login" onClick={() => localStorage.removeItem("adminToken")}>Logout</Link>
//                </li>
//            </ul>
//            <div className="admin-tab">
//                <div className="admin-username">{userData.name || "Loading..."}</div> {/* ✅ Display username */}
//            </div>
//        </nav>
//    );
//};
//
//export default AdminNavbar;


// AdminNavbar.js
//import React, { useEffect, useState } from 'react';
//import { Link, useNavigate } from 'react-router-dom';
////import { Link, useNavigate } from 'react-router-dom';
//import '../../styles/admin/adminNavbar.css';
//
//const AdminNavbar = () => {
//    const [activeTab, setActiveTab] = useState('dashboard');
//    const [adminData, setAdminData] = useState({ name: '', role: 'admin' });
//    const navigate = useNavigate();
//
//    useEffect(() => {
//        // Fetch logged-in admin's name from localStorage
//        const storedAdmin = localStorage.getItem("username");
//        if (storedAdmin) {
//            setAdminData((prev) => ({ ...prev, name: storedAdmin }));
//        }
//    }, []);
//
//    const handleTabClick = (tabName) => {
//        const formattedTabName = tabName.toLowerCase();
//        setActiveTab(formattedTabName);
//        navigate(`/admin/${formattedTabName}`);
//    };
//
//    const renderTabs = () => {
//        const { role } = adminData;
//        const tabs = [];
//
//        if (role === 'admin') {
//             tabs.push('CreateUser','All-User','EducationQuery','TouristQuery');
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
//        <nav id="admin-navbar" className="admin-navbar">
//        <div className="admin-navbar-brand">Admin Panel</div>
//                    <ul className="admin-navbar-links">
//                        <li><Link to="/admin/home">Home</Link></li>
//
//                        <li><Link to="/login">Logout</Link></li>
//                    </ul>
//
//            <div className="admin-tab">
//                <div className="admin-username">
//                    {adminData.name ? adminData.name : "Admin"}
//                </div>
//                {renderTabs()}
//                <button onClick={() => {
//                    localStorage.removeItem("adminToken");
//                    localStorage.removeItem("adminUsername");
//                    navigate("/admin/login");
//                }} className="logout">Logout</button>
//            </div>
//        </nav>
//    );
//};
//
//export default AdminNavbar;

import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../styles/admin/adminNavbar.css';

const AdminNavbar = () => {
    const [activeTab, setActiveTab] = useState('dashboard');
    const [adminData, setAdminData] = useState({ name: '', role: 'admin' });
    const navigate = useNavigate();

    useEffect(() => {
        // Retrieve the admin object from localStorage using the correct key ("admin")
        const storedAdmin = localStorage.getItem("admin");
        if (storedAdmin) {
            const adminObj = JSON.parse(storedAdmin);
            // Extract the name from the admin object (adjust property as needed)
            const adminName = adminObj.username || adminObj.name || "Admin";
            setAdminData(prev => ({ ...prev, name: adminName }));
        }
    }, []);

    const handleTabClick = (tabName) => {
        const formattedTabName = tabName.toLowerCase();
        setActiveTab(formattedTabName);
        navigate(`/admin/${formattedTabName}`);
    };

    const renderTabs = () => {
        const { role } = adminData;
        const tabs = [];

        if (role === 'admin') {
            tabs.push('CreateUser', 'All-User', 'EducationQuery', 'TouristQuery');
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

    const handleLogout = () => {
        // Clear admin-related data from localStorage
        localStorage.removeItem("adminToken");
        localStorage.removeItem("admin");
        // Redirect to the admin login page
        navigate("/admin/login");
    };

    return (
        <nav id="admin-navbar" className="admin-navbar">
            <div className="admin-navbar-brand">Admin Panel</div>
            <ul className="admin-navbar-links">
                <li><Link to="/admin/home">Home</Link></li>
                {/* Removed redundant logout link */}
            </ul>

            <div className="admin-tab">
                <div className="admin-username">
                    {adminData.name ? adminData.name : "Admin"}
                </div>
                {renderTabs()}
                <button onClick={handleLogout} className="logout">
                    Logout
                </button>
            </div>
        </nav>
    );
};

export default AdminNavbar;
