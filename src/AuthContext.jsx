import React, { createContext, useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            fetch('http://localhost:8000/api/users/profile/', {
                headers: {
                    'Authorization': `Token ${token}`
                }
            })
                .then(response => response.json())
                .then(data => {
                    if (data) {
                        setUser({ username: data.username, email: data.email, token });
                    }
                });
        }
    }, []);

    const login = async (username, password) => {
        const response = await fetch('http://localhost:8000/api/users/login/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        if (response.ok) {
            const data = await response.json();
            setUser({ username: data.username, email: data.email, token: data.token });
            localStorage.setItem('token', data.token);
            navigate('/');
        } else {
            const errorData = await response.json();
            alert(errorData.error || 'Geçersiz kullanıcı adı veya şifre');
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('token');
    };

    const register = async (username, password, email) => {
        const response = await fetch('http://localhost:8000/api/users/register/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password, email }),
        });

        if (response.ok) {
            const data = await response.json();
            setUser({ username: data.username, email: data.email, token: data.token });
            localStorage.setItem('token', data.token);
            navigate('/');
        } else {
            const errorData = await response.json();
            alert(errorData.username || errorData.email || 'Kayıt sırasında bir hata oluştu');
        }
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, register }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);