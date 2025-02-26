// src/App.js

//import React from 'react';
//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import { AuthProvider } from './contexts/AuthContext'; // Import AuthProvider
//import Navbar from './components/Navbar';
//import Slideshow from './components/Slideshow';
//import Login from './components/Login';
//import Register from './components/Register';
//import Contact from "./components/Contact";
//import Home from './components/Home';
//import Education from './components/Education';
//import Tourism from './components/Tourism';
//import Requirement from './components/Requirement';
//import TourismRequirement from './components/TourismRequirement';
//import Checkout from './components/Checkout';
//import ProcessQuery from './components/ProcessQuery';
//import UserQueryTable from './components/admin/UserQueryTable';
//import AdminNavbar from './components/admin/AdminNavbar';
//import AdminHome from './components/admin/AdminHome';
//import AdminUserForm from './components/admin/AdminUserForm';
//import AllEducationQuery from './components/admin/AllEducationQuery';
//import UserEducationQuery from './components/user/UserEducationQuery';
//import UserTouristQuery from './components/user/UserTouristQuery';
//import AllTouristQuery from './components/admin/AllTouristQuery';
//import AllUserInfo from './components/admin/AllUserInfo';
//import Reviews from './components/Reviews'; // Import Reviews component
//import UserProfile from './components/user/UserProfile';
//import UserReview from './components/UserReview';
//import './styles/ShopTravelDropdown.css';
//import './styles/ServiceTravelDropdown.css';
//import './styles/checkout.css';
//
//const App = () => {
//    return (
//        <AuthProvider> {/* Wrap with AuthProvider */}
//            <Router>
//                <div>
//
//                    <div className="content">
//                        <Routes>
//                            <Route path="/" element={<Home />} />
//                            <Route path="/login" element={<Login />} />
//                            <Route path="/register" element={<Register />} />
//                            <Route path="/education" element={<Education />} />
//                            <Route path="/tourism" element={<Tourism />} />
//                            <Route path="/requirement" element={<Requirement />} />
//                            <Route path="/tourism-requirement" element={<TourismRequirement />} />
//                            <Route path="/checkout" element={<Checkout />} />
//                            <Route path="/process" element={<ProcessQuery />} />
//                            <Route path="/reviews" element={<Reviews />} /> {/* Add Reviews route */}
//                             <Route path="/upload-review" element={<UserReview/>}/> {/* Add the Reviews route */}
//                             <Route path="/profile/info" element={<UserProfile/>}/>
//                             <Route path="/profile/info/educationquery" element={<UserEducationQuery/>}/>
//                              <Route path="/profile/info/touristquery" element={<UserTouristQuery />} />
//                              <Route path="/contact" element={<Contact/>} />
//
//                            {/* Admin routes */}
//                            <Route path="/admin" element={<AdminHome />} />
//                            <Route path="/admin/createuser" element={<AdminUserForm />} />
//                            <Route path="/admin/educationquery" element={<AllEducationQuery />} />
//                            <Route path="/admin/touristquery" element={<AllTouristQuery />} />
//                            <Route path="/admin/all-user" element={<AllUserInfo />} />
//                        </Routes>
//                    </div>
//                </div>
//            </Router>
//        </AuthProvider>
//    );
//};
//
//export default App;
////


 //src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Navbar from './components/Navbar';
import Slideshow from './components/Slideshow';
import Login from './components/Login';
import AdminLogin from './components/admin/AdminLogin';
import Register from './components/Register';
import Contact from "./components/Contact";
import Home from './components/Home';
import Education from './components/Education';
import Tourism from './components/Tourism';
import Requirement from './components/Requirement';
import TourismRequirement from './components/TourismRequirement';
import Checkout from './components/Checkout';
import ProcessQuery from './components/ProcessQuery';
import UserQueryTable from './components/admin/UserQueryTable';
import AdminProfile from './components/admin/AdminProfile';
import AdminNavbar from './components/admin/AdminNavbar';
import AdminUserForm from './components/admin/AdminUserForm';
import AllEducationQuery from './components/admin/AllEducationQuery';
import UserEducationQuery from './components/user/UserEducationQuery';
import UserTouristQuery from './components/user/UserTouristQuery';
import AllTouristQuery from './components/admin/AllTouristQuery';
import AllUserInfo from './components/admin/AllUserInfo';
import Reviews from './components/Reviews';
import UserProfile from './components/user/UserProfile';
import UserReview from './components/UserReview';
import './styles/ShopTravelDropdown.css';
import './styles/ServiceTravelDropdown.css';
import './styles/checkout.css';

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <div>
                    <div className="content">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/login" element={<Login />} />

                            <Route path="/register" element={<Register />} />
                            <Route path="/education" element={<Education />} />
                            <Route path="/tourism" element={<Tourism />} />
                            <Route path="/requirement" element={<Requirement />} />
                            <Route path="/tourism-requirement" element={<TourismRequirement />} />
                            <Route path="/checkout" element={<Checkout />} />
                            <Route path="/process" element={<ProcessQuery />} />
                            <Route path="/reviews" element={<Reviews />} />
                            <Route path="/upload-review" element={<UserReview />} />
                            <Route path="/contact" element={<Contact />} />

                            {/* Protected Routes */}
                            <Route element={<ProtectedRoute />}>
                                <Route path="/profile/info" element={<UserProfile />} />
                                <Route path="/profile/info/educationquery" element={<UserEducationQuery />} />
                                <Route path="/profile/info/touristquery" element={<UserTouristQuery />} />
                            </Route>

                            <Route path="/admin/login" element={<AdminLogin />} />

                            {/* Admin Routes */}
                            <Route path="/admin" element={<ProtectedRoute />}>
                                <Route path="home" element={<AdminProfile />} />

                                <Route path="createuser" element={<AdminUserForm />} />
                                <Route path="educationquery" element={<AllEducationQuery />} />
                                <Route path="touristquery" element={<AllTouristQuery />} />
                                <Route path="all-user" element={<AllUserInfo />} />
                            </Route>
                        </Routes>
                    </div>
                </div>
            </Router>
        </AuthProvider>
    );
};

export default App;
