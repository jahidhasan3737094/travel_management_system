import React, { useState } from 'react';
import AdminNavbar from './AdminNavbar';
import '../../styles/admin/AdminUserForm.css'; // Correct path to AdminUserForm.css
const AdminUserForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        role: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData); // Replace with actual submission logic
        // Example: You can send formData to an API endpoint for user creation
    };

    return (
        <div className="admin-container">
            <AdminNavbar />
             <div className="admin-content">
                            <div className="intro-text">
                                <h2>Welcome to the Admin Panel</h2>
                                <p>Manage your application from here.</p>
                            </div>

                             <form onSubmit={handleSubmit}>
                                        <div>
                                            <label htmlFor="name">Full Name:</label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email">Email:</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="password">Password:</label>
                                            <input
                                                type="password"
                                                id="password"
                                                name="password"
                                                value={formData.password}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="role">Role:</label>
                                            <select
                                                id="role"
                                                name="role"
                                                value={formData.role}
                                                onChange={handleChange}
                                                required
                                            >
                                                <option value="">Select Role</option>
                                                <option value="Admin">Admin</option>
                                                <option value="User">User</option>
                                                <option value="UserqueryEditor">UserqueryEditor</option>
                                                {/* Add other roles as needed */}
                                            </select>
                                        </div>
                                        <button type="submit">Create User</button>
                                    </form>

             </div>


        </div>
    );
};

export default AdminUserForm;
