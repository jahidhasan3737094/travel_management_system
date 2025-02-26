//import React, { useState } from "react";
//import axios from "axios";
//import { useNavigate } from "react-router-dom";
//import Navbar from "./../Navbar";
//const AdminLogin = () => {
//    const [email, setEmail] = useState("");
//    const [password, setPassword] = useState("");
//    const navigate = useNavigate();
//
//    const handleLogin = async (e) => {
//        e.preventDefault();
//        try {
//            const response = await axios.post("http://localhost:8080/api/admin/login", { email, password });
//            localStorage.setItem("adminToken", response.data.token);
//            navigate("/admin/home");
//        } catch (error) {
//            console.error("Login failed:", error);
//        }
//    };
//
//    return (
//        <div>
//           <Navbar />
//            <h2>Admin Login</h2>
//            <form onSubmit={handleLogin}>
//                <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
//                <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
//                <button type="submit">Login</button>
//            </form>
//        </div>
//    );
//};
//
//export default AdminLogin;
//2nd change
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext"; // Import AuthContext
import Navbar from "./../Navbar";

const AdminLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const { login } = useAuth(); // Use AuthContext

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
              const response = await axios.post("http://localhost:8080/api/admin/login", { email, password });

            // Store admin authentication using AuthContext
            login({ email }, response.data.token, true); // Third parameter `true` indicates it's an admin

            navigate("/admin/home");
        } catch (error) {
            console.error("Login failed:", error);
        }
    };

    return (
        <div>
            <Navbar />
            <h2>Admin Login</h2>
            <form onSubmit={handleLogin}>
                <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
                <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default AdminLogin;
