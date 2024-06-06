// src/components/Header.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import { Menu, Button } from 'antd';
import { UserOutlined, HomeOutlined, ReadOutlined, LogoutOutlined } from '@ant-design/icons';


const Header = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    return (
        <header className="header flex justify-between items-center p-5 bg-white shadow-md">
            <Button
                type="link"
                className="header-logo text-2xl font-bold text-orange-600"
                onClick={() => navigate('/')}
                icon={<HomeOutlined />}
            >
                MealMaster
            </Button>
            <Menu mode="horizontal" className="header-nav flex gap-4">
                <Menu.Item key="1" onClick={() => navigate('/diet-plans')} icon={<ReadOutlined />}>
                    Diyetler
                </Menu.Item>
                <Menu.Item key="2" onClick={() => navigate('/recipes')} icon={<ReadOutlined />}>
                    Tarifler
                </Menu.Item>
                <Menu.Item key="3" onClick={() => navigate('/blog')} icon={<ReadOutlined />}>
                    Blog
                </Menu.Item>
                {user ? (
                    <>
                        <span className="user-name mr-4 font-bold text-gray-800">{user.username}</span>
                        <Button
                            type="primary"
                            danger
                            className="auth-button"
                            onClick={logout}
                            icon={<LogoutOutlined />}
                        >
                            Logout
                        </Button>
                    </>
                ) : (
                    <Button
                        type="primary"
                        className="auth-button"
                        onClick={() => navigate('/auth')}
                        icon={<UserOutlined />}
                    />
                )}
            </Menu>
        </header>
    );
};

export default Header;
