import React, { useState } from 'react';
import '../styles/education.css';
import { Link } from 'react-router-dom';
import '../styles/footer.css';
const Education = () => {
    const [filter, setFilter] = useState('');

    const handleFilterChange = (event) => {
        setFilter(event.target.value.toUpperCase());
    };

    return (
        <div className="education-container">
            <h2>Education</h2>
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
                        <Link to="/requirement">
                            <img src={`${process.env.PUBLIC_URL}/images/${country.image}`} alt={country.name} className="country-image" />
                            <div className="country-name">{country.name}</div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};
const countries = [
    { name: 'Germany', image: 'germany.jpg' },
    { name: 'Sweden', image: 'sweden.png' },
    { name: 'UK', image: 'uk.png' },
    { name: 'Canada', image: 'canada.jpg' },
    { name: 'Italy', image: 'italy.png' },
    { name: 'France', image: 'france.jpg' },
    { name: 'USA', image: 'usa.jpg' },  // Corrected path for USA image
];

export default Education;
//