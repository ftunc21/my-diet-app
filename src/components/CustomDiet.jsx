// React kütüphanesini ve gerekli fonksiyonları import ediyoruz
import React from 'react';

// useNavigate fonksiyonunu react-router-dom kütüphanesinden import ediyoruz
import { useNavigate } from 'react-router-dom';

// Ant Design kütüphanesinden bazı bileşenleri import ediyoruz
import { Form, Input, Button, Select, InputNumber } from 'antd';

// DietPlans adlı bileşeni tanımlıyoruz
const DietPlans = () => {
    // Ant Design form fonksiyonunu kullanmak için form değişkenini oluşturuyoruz
    const [form] = Form.useForm();

    // Yönlendirme fonksiyonunu kullanmak için useNavigate hook'unu çağırıyoruz
    const navigate = useNavigate();

    // Form gönderildiğinde çalışacak olan fonksiyonu tanımlıyoruz
    const onFinish = (values) => {
        // Form verilerini değişkenlere ayırıyoruz
        const { age, weight, height, gender, activityLevel } = values;

        // Kalori ihtiyacını hesaplıyoruz
        const calorieNeeds = calculateCalorieNeeds(age, weight, height, gender, activityLevel);

        // Hesaplama sonucunu diet-result sayfasına yönlendiriyoruz
        navigate('/diet-result', { state: { calorieNeeds } });
    };

    // Kalori ihtiyacını hesaplamak için fonksiyonu tanımlıyoruz
    const calculateCalorieNeeds = (age, weight, height, gender, activityLevel) => {
        let bmr;
        // Erkekler için BMR hesaplama formülü
        if (gender === 'male') {
            bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
        } else {
            // Kadınlar için BMR hesaplama formülü
            bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
        }
        // Günlük kalori ihtiyacını hesaplıyoruz
        const calorieNeeds = bmr * activityLevel;
        // Hesaplanan kalori ihtiyacını yuvarlayarak döndürüyoruz
        return Math.round(calorieNeeds);
    };

    // Bileşenin render edileceği JSX yapısını döndürüyoruz
    return (
        <div className="container mx-auto px-6 py-12">
            {/* Sayfa başlığını belirliyoruz */}
            <h2 className="text-4xl font-bold mb-4">Diyetler</h2>

            {/* Ant Design form bileşenini oluşturuyoruz */}
            <Form
                form={form} // Form kontrolünü sağlamak için form nesnesini bağlıyoruz
                layout="vertical" // Dikey düzen kullanıyoruz
                onFinish={onFinish} // Form başarıyla gönderildiğinde çalışacak fonksiyon
                className="bg-white p-6 rounded-lg shadow-md" // Form stilini belirliyoruz
            >
                {/* Yaş girişi için form alanı */}
                <Form.Item
                    name="age"
                    label="Yaş"
                    rules={[{ required: true, message: 'Lütfen yaşınızı girin!' }]} // Zorunlu alan kuralları
                >
                    <InputNumber min={1} className="w-full" /> {/* Yaş girişi için sayı input alanı */}
                </Form.Item>

                {/* Kilo girişi için form alanı */}
                <Form.Item
                    name="weight"
                    label="Kilo (kg)"
                    rules={[{ required: true, message: 'Lütfen kilonuzu girin!' }]} // Zorunlu alan kuralları
                >
                    <InputNumber min={1} className="w-full" /> {/* Kilo girişi için sayı input alanı */}
                </Form.Item>

                {/* Boy girişi için form alanı */}
                <Form.Item
                    name="height"
                    label="Boy (cm)"
                    rules={[{ required: true, message: 'Lütfen boyunuzu girin!' }]} // Zorunlu alan kuralları
                >
                    <InputNumber min={1} className="w-full" /> {/* Boy girişi için sayı input alanı */}
                </Form.Item>

                {/* Cinsiyet seçimi için form alanı */}
                <Form.Item
                    name="gender"
                    label="Cinsiyet"
                    rules={[{ required: true, message: 'Lütfen cinsiyetinizi seçin!' }]} // Zorunlu alan kuralları
                >
                    <Select placeholder="Cinsiyetinizi seçin"> {/* Cinsiyet seçimi için dropdown */}
                        <Select.Option value="male">Erkek</Select.Option> {/* Erkek seçeneği */}
                        <Select.Option value="female">Kadın</Select.Option> {/* Kadın seçeneği */}
                    </Select>
                </Form.Item>

                {/* Aktivite seviyesi seçimi için form alanı */}
                <Form.Item
                    name="activityLevel"
                    label="Aktivite Seviyesi"
                    rules={[{ required: true, message: 'Lütfen aktivite seviyenizi seçin!' }]} // Zorunlu alan kuralları
                >
                    <Select placeholder="Aktivite seviyenizi seçin"> {/* Aktivite seviyesi için dropdown */}
                        <Select.Option value={1.2}>Az hareketli</Select.Option> {/* Az hareketli seçeneği */}
                        <Select.Option value={1.375}>Hafif hareketli</Select.Option> {/* Hafif hareketli seçeneği */}
                        <Select.Option value={1.55}>Orta derecede hareketli</Select.Option> {/* Orta derecede hareketli seçeneği */}
                        <Select.Option value={1.725}>Çok hareketli</Select.Option> {/* Çok hareketli seçeneği */}
                        <Select.Option value={1.9}>Aşırı hareketli</Select.Option> {/* Aşırı hareketli seçeneği */}
                    </Select>
                </Form.Item>

                {/* Hesapla butonu */}
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="w-full">Hesapla</Button> {/* Form gönderme butonu */}
                </Form.Item>
            </Form>
        </div>
    );
};

// Bileşeni dışa aktarıyoruz
export default DietPlans;
