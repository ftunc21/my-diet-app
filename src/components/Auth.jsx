// src/components/Auth.jsx
import React, { useState } from 'react';
import { useAuth } from '../AuthContext';
import './Auth.css';

const Auth = () => {
    const { login, register } = useAuth();
    const [isLogin, setIsLogin] = useState(true);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isLogin) {
            login(username, password);
        } else {
            if (password === confirmPassword) {
                register(username, password);
            } else {
                alert('Şifreler aynı değil');
            }
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-box">
                <div className="auth-content">
                    <h2>{isLogin ? 'Giriş Yap' : 'Üye Ol'}</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="input-group">
                            <label>Kullanıcı Adı</label>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        {!isLogin && (
                            <div className="input-group">
                                <label>Email</label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        )}
                        <div className="input-group">
                            <label>Şifre</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        {!isLogin && (
                            <div className="input-group">
                                <label>Şifreyi Onaylayın</label>
                                <input
                                    type="password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                            </div>
                        )}
                        {!isLogin && (
                            <div className="input-group">
                                <input type="checkbox" id="terms" />
                                <label htmlFor="terms">I agree all statements in <a href="#">Terms of service</a></label>
                            </div>
                        )}
                        <button type="submit">{isLogin ? 'Giriş Yap' : 'Üye Ol'}</button>
                    </form>
                    <button className="toggle-btn" onClick={() => setIsLogin(!isLogin)}>
                        {isLogin ? 'Hesabınız Yok Mu? ' : 'Zaten Üye Misiniz?'}
                    </button>
                </div>
                <div className="auth-image">
                    <img src="public\images\furkan.png" alt="Auth Illustration" />
                    {!isLogin && <p>Zaten Üye Misiniz?</p>}
                </div>
            </div>
        </div>
    );
};

export default Auth;
