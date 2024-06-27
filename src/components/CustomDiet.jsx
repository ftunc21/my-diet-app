import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, InputNumber, Button, Select } from 'antd';

const DietPlans = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate();

    const onFinish = (values) => {
        const { age, weight, height, gender, activityLevel } = values;
        const calorieNeeds = calculateCalorieNeeds(age, weight, height, gender, activityLevel);
        navigate('/diet-result', { state: { calorieNeeds } });
    };

    const calculateCalorieNeeds = (age, weight, height, gender, activityLevel) => {
        let bmr;
        if (gender === 'male') {
            bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
        } else {
            bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
        }
        const calorieNeeds = bmr * activityLevel;
        return Math.round(calorieNeeds);
    };

    return (
        <div className="container mx-auto px-6 py-12">
            <h2 className="text-4xl font-bold mb-4 text-orange-500">Kişisel Bilgiler</h2>
            <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
                className="bg-white p-6 rounded-lg shadow-md"
            >
                <Form.Item
                    name="age"
                    label="Yaş"
                    rules={[{ required: true, message: 'Lütfen yaşınızı girin!' }]}
                >
                    <InputNumber min={1} className="w-full" />
                </Form.Item>
                <Form.Item
                    name="weight"
                    label="Kilo (kg)"
                    rules={[{ required: true, message: 'Lütfen kilonuzu girin!' }]}
                >
                    <InputNumber min={1} className="w-full" />
                </Form.Item>
                <Form.Item
                    name="height"
                    label="Boy (cm)"
                    rules={[{ required: true, message: 'Lütfen boyunuzu girin!' }]}
                >
                    <InputNumber min={1} className="w-full" />
                </Form.Item>
                <Form.Item
                    name="gender"
                    label="Cinsiyet"
                    rules={[{ required: true, message: 'Lütfen cinsiyetinizi seçin!' }]}
                >
                    <Select placeholder="Cinsiyetinizi seçin">
                        <Select.Option value="male">Erkek</Select.Option>
                        <Select.Option value="female">Kadın</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    name="activityLevel"
                    label="Aktivite Seviyesi"
                    rules={[{ required: true, message: 'Lütfen aktivite seviyenizi seçin!' }]}
                >
                    <Select placeholder="Aktivite seviyenizi seçin">
                        <Select.Option value={1.2}>Az hareketli</Select.Option>
                        <Select.Option value={1.375}>Hafif hareketli</Select.Option>
                        <Select.Option value={1.55}>Orta derecede hareketli</Select.Option>
                        <Select.Option value={1.725}>Çok hareketli</Select.Option>
                        <Select.Option value={1.9}>Aşırı hareketli</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="w-full bg-orange-500">Hesapla</Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default DietPlans;
