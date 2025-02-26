//import React, { createContext, useState } from "react";
//
//export const AuthContext = createContext();
//
//export const AuthProvider = ({ children }) => {
//    const [authState, setAuthState] = useState({
//        isAuthenticated: false,
//        user: null,
//    });
//
//    return (
//        <AuthContext.Provider value={{ authState, setAuthState }}>
//            {children}
//        </AuthContext.Provider>
//    );
//};

import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [authState, setAuthState] = useState({
        isAuthenticated: false,
        user: null,
    });

    useEffect(() => {
        // Check for a stored token to set initial authentication state
        const token = localStorage.getItem("token");
        if (token) {
            // Decode token or fetch user data from an API if necessary
            setAuthState({ isAuthenticated: true, user: { username: "testuser" } }); // Replace with actual user data
        }
    }, []);

    const login = (user) => {
        setAuthState({ isAuthenticated: true, user });
    };

    const logout = () => {
        localStorage.removeItem("token");
        setAuthState({ isAuthenticated: false, user: null });
    };

    return (
        <AuthContext.Provider value={{ ...authState, setAuthState, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
