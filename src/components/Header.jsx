// React kütüphanesini ve gerekli bileşenleri import ediyoruz
import React from 'react';

// useNavigate fonksiyonunu react-router-dom kütüphanesinden import ediyoruz
import { useNavigate } from 'react-router-dom';

// useAuth hook'unu AuthContext'ten import ediyoruz
import { useAuth } from '../AuthContext';

// Ant Design kütüphanesinden bazı bileşenleri ve ikonları import ediyoruz
import { Menu, Button } from 'antd';
import { UserOutlined, HomeOutlined, ReadOutlined, LogoutOutlined } from '@ant-design/icons';

// Header adlı bileşeni tanımlıyoruz
const Header = () => {
    // AuthContext'ten user ve logout fonksiyonlarını alıyoruz
    const { user, logout } = useAuth();

    // Yönlendirme fonksiyonunu kullanmak için useNavigate hook'unu çağırıyoruz
    const navigate = useNavigate();

    // Bileşenin render edileceği JSX yapısını döndürüyoruz
    return (
        <header className="header flex justify-between items-center p-5 bg-white shadow-md">
            {/* Ana sayfaya yönlendiren logo ve buton */}
            <Button
                type="link"
                className="header-logo text-2xl font-bold text-orange-600"
                onClick={() => navigate('/')}
                icon={<HomeOutlined />}
            >
                MealMaster
            </Button>
            <div className="flex-grow flex justify-end items-center">
                {/* Navigasyon menüsü */}
                <Menu mode="horizontal" className="header-nav flex gap-4 text-orange-600">
                    <Menu.Item key="1" onClick={() => navigate('/diet-plans')} className="hover:!text-orange-600 hover:after:!border-b-[#FF5722]" icon={<ReadOutlined />}>
                        Diyetler
                    </Menu.Item>
                    <Menu.Item key="2" onClick={() => navigate('/custom-diet')} className="hover:!text-orange-600 hover:after:!border-b-[#FF5722]" icon={<ReadOutlined />}>
                        Kişiselleştirilmiş Diyet
                    </Menu.Item>
                    <Menu.Item key="4" onClick={() => navigate('/recipes')} className="text-orange-600" icon={<ReadOutlined />}>
                        Tarifler
                    </Menu.Item>
                </Menu>
                {user ? (
                    // Kullanıcı giriş yapmışsa kullanıcı adı ve çıkış butonu
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
                    // Kullanıcı giriş yapmamışsa giriş butonu
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

// Bileşeni dışa aktarıyoruz
export default Header;
