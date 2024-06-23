import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Slideshow from './components/Slideshow';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Education from './components/Education'; // Import Education component
import Tourism from './components/Tourism'; // Import Tourism component
import Requirement from './components/Requirement'; // Import Requirement component
import Checkout from './components/Checkout';
import './styles/ShopTravelDropdown.css';
import './styles/ServiceTravelDropdown.css';
import './styles/checkout.css';
import ProcessQuery from './components/ProcessQuery';

import AdminNavbar from './components/admin/AdminNavbar';

import AdminHome from './components/admin/AdminHome';
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
                         <Route path="/requirement" element={<Requirement />} /> {/* Add Requirement route */}
                         <Route path="/checkout" element={<Checkout/>}/>
                         <Route path="/process" element={<ProcessQuery/>}/>


                            {/* Admin routes */}
                                             <Route path="/admin" element={<AdminHome />}>

                                               

                                             </Route>

                    </Routes>

                </div>
            </div>
        </Router>
    );
};

export default App;
