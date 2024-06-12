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

import axios from 'axios';

const API_URL = 'http://localhost:8080'; // Replace with your backend URL

const register = (user) => {
    return axios.post(`${API_URL}/register/submit`, user);
};

export default {
    register,
};
