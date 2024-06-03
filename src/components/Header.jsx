// src/components/Header.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import './Header.css';
import { FaRegUserCircle } from "react-icons/fa";

const Header = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    return (
        <header className="header">
            <button className="header-logo" onClick={() => navigate('/')}>MealMaster</button>
            <nav className="header-nav">
                <button onClick={() => navigate('/diet-plans')}>Diyetler</button>
                <button onClick={() => navigate('/reviews')}>Tarifler</button>
                <button onClick={() => navigate('/blog')}>Blog</button>
                {user ? (
                    <>
                        <span className="user-name">{user.username}</span>
                        <button className="auth-button" onClick={logout}>Logout</button>
                    </>
                ) : (
                    <button className="auth-button" onClick={() => navigate('/auth')}> <FaRegUserCircle /></button>
                )}
            </nav>
        </header>
    );
};

export default Header;
