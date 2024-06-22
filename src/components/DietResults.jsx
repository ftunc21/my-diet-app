// React kütüphanesini ve gerekli fonksiyonları import ediyoruz
import React, { useState } from 'react';

// useLocation fonksiyonunu react-router-dom kütüphanesinden import ediyoruz
import { useLocation } from 'react-router-dom';

// Ant Design kütüphanesinden bazı bileşenleri import ediyoruz
import { Card, Select, Button, Modal, notification } from 'antd';

// Option bileşenini Select bileşeninden çıkartıyoruz
const { Option } = Select;

// DietResult adlı bileşeni tanımlıyoruz
const DietResult = () => {
    // useLocation hook'u ile yönlendirme durumunu alıyoruz
    const location = useLocation();
    const { calorieNeeds } = location.state; // Kalori ihtiyacını alıyoruz

    // Örnek öğün planlarını tanımlıyoruz
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

    // Haftanın günlerini tanımlıyoruz
    const daysOfWeek = ['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi', 'Pazar'];

    // Rastgele bir öğün seçmek için fonksiyon tanımlıyoruz
    const getRandomMeal = (mealName) => {
        const meals = mealPlan[mealName];
        return meals[Math.floor(Math.random() * meals.length)];
    };

    // İlk öğünleri rastgele seçerek başlatıyoruz
    const initialMeals = daysOfWeek.reduce((acc, day) => {
        acc[day] = {
            'Kahvaltı': getRandomMeal('Kahvaltı'),
            'Öğle Yemeği': getRandomMeal('Öğle Yemeği'),
            'Akşam Yemeği': getRandomMeal('Akşam Yemeği'),
        };
        return acc;
    }, {});

    // Seçilen öğünleri ve modal görünürlüğünü yönetmek için state kullanıyoruz
    const [selectedMeals, setSelectedMeals] = useState(initialMeals);
    const [isModalVisible, setIsModalVisible] = useState(false);

    // Öğün değiştirildiğinde çalışacak fonksiyonu tanımlıyoruz
    const handleMealChange = (day, mealName, value) => {
        const selectedOption = mealPlan[mealName].find(option => option.food === value);
        setSelectedMeals(prevMeals => ({
            ...prevMeals,
            [day]: {
                ...prevMeals[day],
                [mealName]: selectedOption,
            },
        }));

        // Toplam kaloriyi hesaplıyoruz
        var calculate = 0;
        Object.entries(selectedMeals[day]).map((meal) => {
            calculate += meal[1].calories;
        });

        // Kalori ihtiyacını aşıp aşmadığını kontrol ediyoruz
        if (calorieNeeds < calculate) {
            notification.error({
                message: 'Uyarı',
                description: 'Kalori sınırını aştınız.',
            });
        }
    };

    // Öğün için maksimum kalori değerini döndüren fonksiyonu tanımlıyoruz
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

    // Kartların renklerini tanımlıyoruz
    const cardColors = [
        '#FFD1DC', // pastel blue
        '#AEC6CF', // pastel green
        '#77DD77', // pastel yellow
        '#CBAACB', // pastel pink
        '#FDFD96', // pastel purple
        '#FFB347', // pastel orange
        '#B0E57C', // pastel teal
    ];

    // Öğünleri kaydetmek için modal gösteren fonksiyonu tanımlıyoruz
    const handleSave = () => {
        setIsModalVisible(true);
    };

    // Modal onaylandığında çalışacak fonksiyonu tanımlıyoruz
    const handleOk = () => {
        setIsModalVisible(false);
        notification.success({
            message: 'Başarılı',
            description: 'Diyet listesi mail adresinize gönderilmiştir.',
        });
    };

    // Modal iptal edildiğinde çalışacak fonksiyonu tanımlıyoruz
    const handleCancel = () => {
        setIsModalVisible(false);
    };

    // Bileşenin render edileceği JSX yapısını döndürüyoruz
    return (
        <div className="container mx-auto px-6 py-12">
            <h2 className="text-4xl font-bold mb-8 text-center text-gray-700">Günlük Kalori İhtiyacı: {calorieNeeds} kcal</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Haftanın günlerine göre diyet planı kartlarını oluşturuyoruz */}
                {daysOfWeek.map((day, index) => (
                    <Card
                        key={day} // Her bir öğe için benzersiz anahtar belirliyoruz
                        title={day} // Kartın başlığı olarak günü belirliyoruz
                        bordered={false} // Kartın kenarlığını kaldırıyoruz
                        className="shadow-md p-4" // Kart için stil belirliyoruz
                        style={{
                            backgroundColor: cardColors[index], // Kartın arka plan rengini belirliyoruz
                            borderRadius: '15px', // Kartın köşe yuvarlaklığını ayarlıyoruz
                            color: '#333' // Kartın yazı rengini ayarlıyoruz
                        }}
                    >
                        {/* Öğünleri listelemek için döngü oluşturuyoruz */}
                        {Object.keys(mealPlan).map(mealName => (
                            <div key={mealName} className="mb-4">
                                <h4 className="text-xl font-bold mb-2" style={{ color: '#444' }}>
                                    {mealName} (Max {getMealMaxCalories(mealName)} kcal)
                                </h4>
                                <Select
                                    defaultValue={selectedMeals[day][mealName].food} // Varsayılan olarak seçilen öğünü belirliyoruz
                                    onChange={(value) => handleMealChange(day, mealName, value)} // Öğün değiştirildiğinde çalışacak fonksiyon
                                    className="w-full mb-2" // Select bileşeni için stil belirliyoruz
                                >
                                    {/* Öğün seçeneklerini filtreleyerek listeliyoruz */}
                                    {mealPlan[mealName]
                                        .filter(option => option.calories <= getMealMaxCalories(mealName)) // Maksimum kaloriyi aşmayan öğünleri filtreliyoruz
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
                <Button type="primary" onClick={handleSave}>Seçilen Öğünleri Kaydet</Button> {/* Öğünleri kaydetme butonu */}
            </div>
            <Modal
                title="Onay" // Modal başlığı
                visible={isModalVisible} // Modal görünürlüğü
                onOk={handleOk} // Onay butonuna tıklandığında çalışacak fonksiyon
                onCancel={handleCancel} // İptal butonuna tıklandığında çalışacak fonksiyon
                okText="Onay" // Onay butonu metni
                cancelText="İptal" // İptal butonu metni
            >
                <p>Diyet listesini mail adresinize göndermemizi ister misiniz?</p>
            </Modal>
        </div>
    );
};

// Bileşeni dışa aktarıyoruz
export default DietResult;
