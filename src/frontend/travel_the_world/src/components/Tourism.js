import React, { useState } from 'react';
import '../styles/tourism.css';

const Tourism = () => {
    const [filter, setFilter] = useState('');

    const handleFilterChange = (event) => {
        setFilter(event.target.value.toUpperCase());
    };

    return (
        <div className="tourism-container">
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
                    >
                        <a href={`/${country.name.toLowerCase()}`} target="_blank" rel="noopener noreferrer">
                            <img src={`${process.env.PUBLIC_URL}/images/${country.image}`} alt={country.name} className="country-image" />
                            <div className="country-name">{country.name}</div>
                        </a>
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
