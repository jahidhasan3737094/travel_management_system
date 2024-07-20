import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Slideshow from './components/Slideshow';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Education from './components/Education';
import Tourism from './components/Tourism';
import Requirement from './components/Requirement';
import TourismRequirement from './components/TourismRequirement'; // Import TourismRequirement component
import Checkout from './components/Checkout';
import ProcessQuery from './components/ProcessQuery';
import UserQueryTable from './components/admin/UserQueryTable';
import AdminNavbar from './components/admin/AdminNavbar';
import AdminHome from './components/admin/AdminHome';
import AdminUserForm from'./components/admin/AdminUserForm';
import AllEducationQuery from './components/admin/AllEducationQuery';
import AllTouristQuery from './components/admin/AllTouristQuery';
import './styles/ShopTravelDropdown.css';
import './styles/ServiceTravelDropdown.css';
import './styles/checkout.css';

const App = () => {
    return (
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
                        <Route path="/tourism-requirement" element={<TourismRequirement />} /> {/* Add TourismRequirement route */}
                        <Route path="/checkout" element={<Checkout />} />
                        <Route path="/process" element={<ProcessQuery />} />
                        {/* Admin routes */}
                        <Route path="/admin" element={<AdminHome />} />
                        <Route path="/admin/createuser" element={<AdminUserForm />} />
                        <Route path="/admin/educationquery" element={<AllEducationQuery />} />
                        <Route path="/admin/touristquery" element={<AllTouristQuery/>}/>

                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;
