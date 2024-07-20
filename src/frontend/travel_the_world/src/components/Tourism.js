import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/tourism.css';
import Navbar from './Navbar';

const Tourism = () => {
    const [filter, setFilter] = useState('');
    const navigate = useNavigate();

    const handleFilterChange = (event) => {
        setFilter(event.target.value.toUpperCase());
    };

    const handleCountryClick = (country) => {
        navigate('/tourism-requirement', { state: { travelCountry: country } });
    };

    return (
        <div className="tourism-container">
            <Navbar />
            <h2>Tourism</h2>
            <input
                type="text"
                id="myInput"
                onChange={handleFilterChange}
                placeholder="Search for countries.."
                title="Type in a country"
            />

            <div className="container">
                {countries.map((country, index) => (
                    <div
                        key={index}
                        className="country-card"
                        style={{
                            display: country.name.toUpperCase().indexOf(filter) > -1 ? 'block' : 'none',
                        }}
                        onClick={() => handleCountryClick(country.name)}
                    >
                        <img src={`${process.env.PUBLIC_URL}/images/${country.image}`} alt={country.name} className="country-image" />
                        <div className="country-name">{country.name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const countries = [
    { name: 'Germany', image: 'germany.jpg' },
    { name: 'Dubai', image: 'dubai.png' },
    { name: 'UK', image: 'uk.png' },
    { name: 'Canada', image: 'canada.jpg' },
    { name: 'Italy', image: 'italy.png' },
    { name: 'France', image: 'france.jpg' },
    { name: 'USA', image: 'usa.jpg' },
];

export default Tourism;
