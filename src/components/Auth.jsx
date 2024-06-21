import React, { useState } from 'react';
import { useAuth } from '../AuthContext';
import { Input, Button, Checkbox } from 'antd';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
    const { login, register } = useAuth();
    const [isLogin, setIsLogin] = useState(true);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isLogin) {
            login(username, password).then(() => navigate('/'));
        } else {
            if (password === confirmPassword) {
                register(username, password).then(() => navigate('/'));
            } else {
                alert('Şifreler aynı değil');
            }
        }
    };

    return (
        <div className="auth-container flex justify-center items-center h-screen bg-gray-100">
            <div className="auth-box flex bg-white p-10 rounded-2xl shadow-lg max-w-4xl w-full">
                <div className="auth-content flex-1 pr-5">
                    <h2 className="mb-5">{isLogin ? 'Giriş Yap' : 'Üye Ol'}</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="input-group mb-4">
                            <label className="block mb-1">Kullanıcı Adı</label>
                            <Input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        {!isLogin && (
                            <div className="input-group mb-4">
                                <label className="block mb-1">Email</label>
                                <Input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        )}
                        <div className="input-group mb-4">
                            <label className="block mb-1">Şifre</label>
                            <Input.Password
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        {!isLogin && (
                            <div className="input-group mb-4">
                                <label className="block mb-1">Şifreyi Onaylayın</label>
                                <Input.Password
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                            </div>
                        )}
                        {!isLogin && (
                            <div className="input-group mb-4 flex items-center">
                                <Checkbox id="terms" className="mr-2" />
                                <label htmlFor="terms">
                                    I agree all statements in <a href="#">Terms of service</a>
                                </label>
                            </div>
                        )}
                        <Button type="primary" htmlType="submit" className="w-full mb-4">
                            {isLogin ? 'Giriş Yap' : 'Üye Ol'}
                        </Button>
                    </form>
                    <Button type="link" className="toggle-btn w-auto" onClick={() => setIsLogin(!isLogin)}>
                        {isLogin ? 'Hesabınız Yok Mu?' : 'Zaten Üye Misiniz?'}
                    </Button>
                </div>
                <div className="auth-image flex-1 flex flex-col justify-center items-center">
                    <img src="public/images/furkan.png" alt="Auth Illustration" className="rounded-lg max-w-full" />
                </div>
            </div>
        </div>
    );
};

export default Auth;
