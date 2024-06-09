// src/components/Header.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import { Menu, Button } from 'antd';
import { UserOutlined, HomeOutlined, ReadOutlined, LogoutOutlined, EditOutlined,MediumOutlined  } from '@ant-design/icons';

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
            <div className="flex-grow flex justify-end items-center">
                <Menu mode="horizontal" className="header-nav flex gap-4 text-orange-600">
                    <Menu.Item key="1" onClick={() => navigate('/diet-plans')} className="text-orange-600" icon={<ReadOutlined />}>
                        Diyetler
                    </Menu.Item>
                    <Menu.Item key="2" onClick={() => navigate('/custom-diet')} className="text-orange-600" icon={<ReadOutlined />}>
                        Kişiselleştirilmiş Diyet
                    </Menu.Item>

                    
                    <Menu.Item key="3" onClick={() => navigate('/blog')} className="text-orange-600" icon={<EditOutlined />}>
                        Blog
                    </Menu.Item>

                    <Menu.Item key="4" onClick={() => navigate('/recipes')} className="text-orange-600" icon={<ReadOutlined />}>
                        Tarifler
                    </Menu.Item>
                    
                </Menu>
                {user ? (
                    <div className="flex items-center ml-4">
                        <span className="user-name mr-4 font-bold text-orange-600">{user.username}</span>
                        <Button
                            type="primary"
                            danger
                            className="auth-button"
                            onClick={logout}
                            icon={<LogoutOutlined />}
                        >
                            Logout
                        </Button>
                    </div>
                ) : (
                    <Button
                        type="primary"
                        className="auth-button ml-4"
                        onClick={() => navigate('/auth')}
                        icon={<UserOutlined />}
                    />
                )}
            </div>
        </header>
    );
};

export default Header;
