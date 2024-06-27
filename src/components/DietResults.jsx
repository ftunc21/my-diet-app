
import React, { useState } from 'react';

import { useLocation } from 'react-router-dom';


import { Card, Select, Button, Modal, notification } from 'antd';


const { Option } = Select;

const DietResult = () => {

    const location = useLocation();
    const { calorieNeeds } = location.state;


    const mealPlan = {
        'Kahvaltı': [
            { food: 'Yulaf', calories: 300 },
            { food: 'Meyve', calories: 200 },
            { food: 'Omlet', calories: 250 },
            { food: 'Peynirli Sandviç', calories: 350 },
            { food: 'Yoğurt ve Granola', calories: 320 },
            { food: 'Tam Buğday Tost', calories: 280 },
            { food: 'Smoothie', calories: 250 },
            { food: 'Kefir ve Chia Tohumu', calories: 180 },
            { food: 'Avokadolu Tost', calories: 300 },
            { food: 'Çılbır', calories: 250 },
            { food: 'Sebzeli Krep', calories: 270 },
            { food: 'Tam Buğday Gözleme', calories: 280 },

        ],
        'Öğle Yemeği': [
            { food: 'Tavuklu Salata', calories: 350 },
            { food: 'Mercimek Çorbası ve Tam Buğday Ekmek', calories: 300 },
            { food: 'Sebzeli Bulgur Pilavı', calories: 400 },
            { food: 'Somon ve Kuşkonmaz', calories: 350 },
            { food: 'Izgara Köfte ve Salata', calories: 400 },
            { food: 'Kinoa Salatası', calories: 350 },
            { food: 'Ton Balıklı Sandviç', calories: 320 },
            { food: 'Fırında Sebzeler ve Yoğurt', calories: 300 },
            { food: 'Izgara Tavuk ve Kinoa', calories: 350 },
            { food: 'Tam Buğday Makarna', calories: 400 },
            { food: 'Barbunya Pilaki ve Pirinç Pilavı', calories: 450 },
            { food: 'Izgara Hindi ve Sebze', calories: 350 },
        ],
        'Akşam Yemeği': [
            { food: 'Izgara Balık ve Salata', calories: 350 },
            { food: 'Sebzeli Tavuk Güveç', calories: 400 },
            { food: 'Kıymalı Patlıcan ve Yoğurt', calories: 450 },
            { food: 'Fırında Somon ve Kuşkonmaz', calories: 350 },
            { food: 'Et Sote ve Sebze', calories: 400 },
            { food: 'Tavuk Şiş ve Salata', calories: 350 },
            { food: 'Kıymalı Sebzeli Makarna', calories: 450 },
            { food: 'Fırında Kabak Mücver', calories: 350 },
            { food: 'Izgara Hindi ve Sebze', calories: 350 },
            { food: 'Sebzeli Börek', calories: 400 },
            { food: 'Zeytinyağlı Biber Dolması', calories: 350 },
            { food: 'Fırında Tavuk ve Patates', calories: 400 },
        ],
    };


    const daysOfWeek = ['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi', 'Pazar'];


    const getRandomMeal = (mealName) => {
        const meals = mealPlan[mealName];
        return meals[Math.floor(Math.random() * meals.length)];
    };


    const initialMeals = daysOfWeek.reduce((acc, day) => {
        acc[day] = {
            'Kahvaltı': getRandomMeal('Kahvaltı'),
            'Öğle Yemeği': getRandomMeal('Öğle Yemeği'),
            'Akşam Yemeği': getRandomMeal('Akşam Yemeği'),
        };
        return acc;
    }, {});


    const [selectedMeals, setSelectedMeals] = useState(initialMeals);
    const [isModalVisible, setIsModalVisible] = useState(false);


    const handleMealChange = (day, mealName, value) => {
        const selectedOption = mealPlan[mealName].find(option => option.food === value);
        setSelectedMeals(prevMeals => ({
            ...prevMeals,
            [day]: {
                ...prevMeals[day],
                [mealName]: selectedOption,
            },
        }));


        var calculate = 0;
        Object.entries(selectedMeals[day]).map((meal) => {
            calculate += meal[1].calories;
        });


        if (calorieNeeds < calculate) {
            notification.error({
                message: 'Uyarı',
                description: 'Kalori sınırını aştınız.',
            });
        }
    };

    const getMealMaxCalories = (mealName) => {
        switch (mealName) {
            case 'Kahvaltı':
                return (calorieNeeds * 0.30).toFixed(2);
            case 'Öğle Yemeği':
                return (calorieNeeds * 0.35).toFixed(2);
            case 'Akşam Yemeği':
                return (calorieNeeds * 0.35).toFixed(2);
            default:
                return 0;
        }
    };


    const cardColors = [
        '#FFD1DC',
        '#AEC6CF',
        '#77DD77',
        '#CBAACB',
        '#FDFD96',
        '#FFB347',
        '#B0E57C',
    ];


    const handleSave = () => {
        setIsModalVisible(true);
    };


    const handleOk = () => {
        setIsModalVisible(false);
        notification.success({
            message: 'Başarılı',
            description: 'Diyet listesi mail adresinize gönderilmiştir.',
        });
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <div className="container mx-auto px-6 py-12">
            <h2 className="text-4xl font-bold mb-8 text-center text-gray-700">Günlük Kalori İhtiyacı: {calorieNeeds} kcal</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {daysOfWeek.map((day, index) => (
                    <Card
                        key={day}
                        title={day}
                        bordered={false}
                        className="shadow-md p-4"
                        style={{
                            backgroundColor: cardColors[index],
                            borderRadius: '15px',
                            color: '#333'
                        }}
                    >

                        {Object.keys(mealPlan).map(mealName => (
                            <div key={mealName} className="mb-4">
                                <h4 className="text-xl font-bold mb-2" style={{ color: '#444' }}>
                                    {mealName} (Max {getMealMaxCalories(mealName)} kcal)
                                </h4>
                                <Select
                                    defaultValue={selectedMeals[day][mealName].food}
                                    onChange={(value) => handleMealChange(day, mealName, value)}
                                    className="w-full mb-2"
                                >

                                    {mealPlan[mealName]
                                        .filter(option => option.calories <= getMealMaxCalories(mealName))
                                        .map((option, idx) => (
                                            <Option key={idx} value={option.food}>
                                                {option.food} - {option.calories} kcal
                                            </Option>
                                        ))}
                                </Select>
                            </div>
                        ))}
                    </Card>
                ))}
            </div>
            <div className="text-center mt-8">
                <Button type="primary" onClick={handleSave}>Seçilen Öğünleri Kaydet</Button>
            </div>
            <Modal
                title="Onay"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                okText="Onay"
                cancelText="İptal"
            >
                <p>Diyet listesini mail adresinize göndermemizi ister misiniz?</p>
            </Modal>
        </div>
    );
};


export default DietResult;
