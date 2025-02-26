//import axios from 'axios';
//
//const API_URL = 'http://localhost:8080/api/auth/';
//
//const register = (username, password) => {
//    return axios.post(API_URL + 'register', { username, password });
//};
//
//const login = (username, password) => {
//    return axios.post(API_URL + 'login', { username, password });
//};
//
//export default {
//    register,
//    login,
//};
//

//import axios from 'axios';
//
//const API_URL = 'http://localhost:8080'; // Replace with your backend URL
//
//const register = (user) => {
//    return axios.post(`${API_URL}/register/submit`, user);
//};
//
//const login = (username, password) => {
//    return axios.post(`${API_URL}/auth/login`, { email: username, password });
//};
//
//export default {
//    register,
//    login
////};
//import axios from 'axios';
//
//const API_URL = 'http://localhost:8080'; // Replace with your backend URL
//
//const register = (user) => {
//    return axios.post(`${API_URL}/register/submit`, user);
//};
//
//const login = (username, password) => {
//    return axios.post(`${API_URL}/auth/login`, { email: username, password });
//};
//
//// Method to get the current user
//const getCurrentUser = async () => {
//    try {
//        const response = await axios.get(`${API_URL}/auth/me`);
//        return response.data; // Assuming the response contains user data including userId
//    } catch (error) {
//        console.error('Error fetching current user:', error);
//        return null;
//    }
//};
//
//// Method to handle logout
//const logout = () => {
//    return axios.post(`${API_URL}/auth/logout`); // Assuming '/auth/logout' handles user logout
//};
//
//export default {
//    register,
//    login,
//    getCurrentUser,
//    logout
//};

//
//import axios from 'axios';
// // Replace with your backend URL
//const API_URL = 'http://localhost:8080';
//const AuthService = {
//    register: async (user) => {
//        const response = await axios.post('${API_URL}/register/submit', user, {
//            headers: { 'Content-Type': 'application/json' },
//        });
//        return response.data;
//    },
//};
//
//const login = (username, password) => {
//    return axios.post(`${API_URL}/auth/login`, { email: username, password });
//};
//
//// Method to handle logout
//const logout = () => {
//    return axios.post(`${API_URL}/auth/logout`); // Assuming '/auth/logout' handles user logout
//};
//export default {
//
//    login,
//    logout,
//    AuthService
//};

//import axios from 'axios';
//
//// Backend API base URL
//const API_URL = 'http://localhost:8080';
//
//const AuthService = {
//    // Method to register a new user
//    register: async (user) => {
//        try {
//            const response = await axios.post(`${API_URL}/register/submit`, user, {
//                headers: { 'Content-Type': 'application/json' },
//            });
//            return response.data;
//        } catch (error) {
//            console.error('Error during registration:', error);
//            throw error; // Rethrow to handle in calling function
//        }
//    },
//
//    // Method to log in a user
//    login: async (username, password) => {
//        try {
//            const response = await axios.post(`${API_URL}/auth/login`, { email: username, password });
//            return response.data;
//        } catch (error) {
//            console.error('Error during login:', error);
//            throw error;
//        }
//    },
//
//    // Method to log out a user
//    logout: async () => {
//        try {
//            const response = await axios.post(`${API_URL}/auth/logout`);
//            return response.data;
//        } catch (error) {
//            console.error('Error during logout:', error);
//            throw error;
//        }
//    },
//
//    // Method to get the current logged-in user
//    getCurrentUser: async () => {
//        try {
//            const response = await axios.get(`${API_URL}/auth/me`);
//            return response.data; // Assuming the response contains user data
//        } catch (error) {
//            console.error('Error fetching current user:', error);
//            return null; // Return null if user data cannot be fetched
//        }
//    },
//};
//
//export default AuthService;
//
//
//import axios from "axios";
//
//// Backend API base URL
//const API_URL = "http://localhost:8080";
//
//const AuthService = {
//    // Method to register a new user
//    register: async (user) => {
//        try {
//            const response = await axios.post(`${API_URL}/register/submit`, user, {
//                headers: { "Content-Type": "application/json" },
//            });
//            return response.data;
//        } catch (error) {
//            console.error("Error during registration:", error);
//            throw error; // Rethrow to handle in calling function
//        }
//    },
//
//    // Method to log in a user
//    login: async (username, password) => {
//        try {
//            const response = await axios.post(`${API_URL}/auth/login`, { email: username, password });
//            return response.data; // Assuming the backend returns { token, user }
//        } catch (error) {
//            console.error("Error during login:", error);
//            throw error;
//        }
//    },
//
//    // Method to log out a user
//    logout: async () => {
//        try {
//            const response = await axios.post(`${API_URL}/auth/logout`);
//            return response.data;
//        } catch (error) {
//            console.error("Error during logout:", error);
//            throw error;
//        }
//    },
//
//    // Method to get the current logged-in user
//    getCurrentUser: async () => {
//        try {
//            const response = await axios.get(`${API_URL}/auth/me`, {
//                headers: {
//                    Authorization: `Bearer ${localStorage.getItem("token")}`,
//                },
//            });
//            return response.data; // Assuming the response contains user data
//        } catch (error) {
//            console.error("Error fetching current user:", error);
//            return null; // Return null if user data cannot be fetched
//        }
//    },
//};
//
//export default AuthService;

import axios from "axios";

// Backend API base URL
const API_URL = "http://localhost:8080";

const AuthService = {
    // Method to register a new user
    register: async (user) => {
        try {
            const response = await axios.post(`${API_URL}/register/submit`, user, {
                headers: { "Content-Type": "application/json" },
            });
            return response.data;
        } catch (error) {
            console.error("Error during registration:", error);
            throw error; // Rethrow to handle in calling function
        }
    },

    // Method to log in a user
    login: async (username, password) => {
        try {
            const response = await axios.post(`${API_URL}/auth/login`, { email: username, password });
            return response.data; // Assuming the backend returns { token, user }
        } catch (error) {
            console.error("Error during login:", error);
            throw error;
        }
    },

    // Method to log out a user
    logout: async () => {
        try {
            const response = await axios.post(`${API_URL}/auth/logout`);
            return response.data;
        } catch (error) {
            console.error("Error during logout:", error);
            throw error;
        }
    },

    // Method to get the current logged-in user
    getCurrentUser: async () => {
        try {
            const response = await axios.get(`${API_URL}/auth/me`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });
            return response.data; // Assuming the response contains user data
        } catch (error) {
            console.error("Error fetching current user:", error);
            return null; // Return null if user data cannot be fetched
        }
    },

    // Method to fetch education queries for the logged-in user
    getEducationQueries: async (email) => {
        try {
            const response = await axios.get(`${API_URL}/queries/education`, {
                params: { email },
            });
            return response.data;
        } catch (error) {
            console.error("Error fetching education queries:", error);
            throw error; // Rethrow for handling in the calling function
        }
    },

    // Method to fetch tourist queries for the logged-in user
    getTouristQueries: async (email) => {
        try {
            const response = await axios.get(`${API_URL}/queries/tourist`, {
                params: { email },
            });
            return response.data;
        } catch (error) {
            console.error("Error fetching tourist queries:", error);
            throw error; // Rethrow for handling in the calling function
        }
    },
};

export default AuthService;
