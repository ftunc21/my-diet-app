// src/AuthContext.jsx
import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = (username, password) => {
        // Basit bir doğrulama örneği
        if (username === 'admin' && password === 'password') {
            setUser({ username });
        } else {
            alert('Geçersiz kullanıcı adı veya şifre');
        }
    };

    const logout = () => {
        setUser(null);
    };

    const register = (username, password) => {
        // Basit bir kayıt örneği
        if (username && password) {
            setUser({ username });
        } else {
            alert('Kullanıcı adı ve şifre gerekli');
        }
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, register }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
