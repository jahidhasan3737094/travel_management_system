import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Slideshow from './components/Slideshow';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import './styles/ShopTravelDropdown.css';
import './styles/ServiceTravelDropdown.css';

const App = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <Slideshow />
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;
