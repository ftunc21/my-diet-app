// React kütüphanesini ve gerekli fonksiyonları import ediyoruz
import React, { useState } from 'react';

// Kullanıcı yetkilendirme fonksiyonlarını kullanmak için useAuth hook'unu çağırıyoruz
import { useAuth } from '../AuthContext';

// Ant Design kütüphanesinden bazı bileşenleri import ediyoruz
import { Input, Button, Checkbox } from 'antd';

// useNavigate fonksiyonunu react-router-dom kütüphanesinden import ediyoruz
import { useNavigate } from 'react-router-dom';

// Auth adlı bileşeni tanımlıyoruz
const Auth = () => {
    // Yetkilendirme işlemleri için gerekli fonksiyonları useAuth hook'u ile alıyoruz
    const { login, register } = useAuth();

    // Giriş mi yoksa kayıt mı yapılacağını belirlemek için state kullanıyoruz
    const [isLogin, setIsLogin] = useState(true);

    // Kullanıcı adı, şifre, email ve şifre onaylama bilgilerini yönetmek için state kullanıyoruz
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    // Yönlendirme fonksiyonunu kullanmak için useNavigate hook'unu çağırıyoruz
    const navigate = useNavigate();

    // Form gönderildiğinde çalışacak olan fonksiyonu tanımlıyoruz
    const handleSubmit = async (e) => {
        e.preventDefault(); // Sayfanın yenilenmesini engelliyoruz
        if (isLogin) {
            // Giriş işlemi
            await login(username, password); // login fonksiyonunu çağırıyoruz
        } else {
            // Kayıt işlemi
            if (password === confirmPassword) {
                // Şifreler eşleşiyorsa kayıt fonksiyonunu çağırıyoruz
                await register(username, password, email);
            } else {
                // Şifreler eşleşmiyorsa uyarı mesajı gösteriyoruz
                alert('Şifreler aynı değil');
            }
        }
    };

    // Bileşenin render edileceği JSX yapısını döndürüyoruz
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
                                onChange={(e) => setUsername(e.target.value)} // Kullanıcı adı güncelleme
                            />
                        </div>
                        {!isLogin && (
                            <div className="input-group mb-4">
                                <label className="block mb-1">Email</label>
                                <Input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)} // Email güncelleme
                                />
                            </div>
                        )}
                        <div className="input-group mb-4">
                            <label className="block mb-1">Şifre</label>
                            <Input.Password
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} // Şifre güncelleme
                            />
                        </div>
                        {!isLogin && (
                            <div className="input-group mb-4">
                                <label className="block mb-1">Şifreyi Onaylayın</label>
                                <Input.Password
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)} // Şifre onayı güncelleme
                                />
                            </div>
                        )}
                        {!isLogin && (
                            <div className="input-group mb-4 flex items-center">
                                <Checkbox id="terms" className="mr-2" /> {/* Şartlar ve koşullar onayı */}
                                <label htmlFor="terms">
                                    I agree all statements in <a href="#">Terms of service</a>
                                </label>
                            </div>
                        )}
                        <Button type="primary" htmlType="submit" className="w-full mb-4">
                            {isLogin ? 'Giriş Yap' : 'Üye Ol'} {/* Buton metni */}
                        </Button>
                    </form>
                    <Button type="link" className="toggle-btn w-auto" onClick={() => setIsLogin(!isLogin)}>
                        {isLogin ? 'Hesabınız Yok Mu?' : 'Zaten Üye Misiniz?'} {/* Giriş ve kayıt arasında geçiş butonu */}
                    </Button>
                </div>
                <div className="auth-image flex-1 flex flex-col justify-center items-center">
                    <img src="public/images/furkan.png" alt="Auth Illustration" className="rounded-lg max-w-full" />
                </div>
            </div>
        </div>
    );
};

// Bileşeni dışa aktarıyoruz
export default Auth;
