import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Collapse } from 'antd';

const { Panel } = Collapse;

const DietResult = () => {
    const location = useLocation();
    const { calorieNeeds } = location.state;
    const [selectedMeal, setSelectedMeal] = useState(null);

    const mealPlan = [
        {
            name: 'Kahvaltı',
            options: [
                { food: 'Yulaf', calories: (calorieNeeds / 6).toFixed(2), img: 'public/images/yulaf.jpg' },
                { food: 'Meyve', calories: (calorieNeeds / 6).toFixed(2), img: 'public/images/meyve.jpg' },
            ],
            alternatives: [
                { food: 'Omlet', calories: (calorieNeeds / 6).toFixed(2), img: 'public/images/omlet.jpg' },
                { food: 'Peynirli Sandviç', calories: (calorieNeeds / 6).toFixed(2), img: 'public/images/sandvic.jpg' },
            ],
        },
        {
            name: 'Öğle Yemeği',
            options: [
                { food: 'Tavuk', calories: (calorieNeeds / 3).toFixed(2), img: 'public/images/tavuk.jpg' },
                { food: 'Sebze', calories: (calorieNeeds / 3).toFixed(2), img: 'sebze.jpg' },
            ],
            alternatives: [
                { food: 'Köfte', calories: (calorieNeeds / 3).toFixed(2), img: 'kofte.jpg' },
                { food: 'Salata', calories: (calorieNeeds / 3).toFixed(2), img: 'public/images/salata.jpg' },
            ],
        },
        {
            name: 'Akşam Yemeği',
            options: [
                { food: 'Balık', calories: (calorieNeeds / 3).toFixed(2), img: 'public/images/balik.jpg' },
                { food: 'Salata', calories: (calorieNeeds / 3).toFixed(2), img: 'public/images/salata.jpg' },
            ],
            alternatives: [
                { food: 'Et', calories: (calorieNeeds / 3).toFixed(2), img: 'et.jpg' },
                { food: 'Sebze', calories: (calorieNeeds / 3).toFixed(2), img: 'sebze2.jpg' },
            ],
        },
    ];

    return (
        <div className="container mx-auto px-6 py-12">
            <h2 className="text-4xl font-bold mb-4">Günlük Kalori İhtiyacı: {calorieNeeds} kcal</h2>
            {mealPlan.map((meal, index) => (
                <div key={index} className="mb-4">
                    <h3 className="text-2xl font-bold mb-2">{meal.name}</h3>
                    {meal.options.map((option, idx) => (
                        <div
                            key={idx}
                            className="cursor-pointer p-2 border rounded-md mb-2"
                            onClick={() => setSelectedMeal(meal.name)}
                        >
                            <img src={option.img} alt={option.food} className="w-full h-40 object-cover mb-2" />
                            <p>{option.food}: {option.calories} kcal</p>
                        </div>
                    ))}
                    {selectedMeal === meal.name && (
                        <Collapse>
                            <Panel header="Alternatifler" key="1">
                                {meal.alternatives.map((alt, altIdx) => (
                                    <div key={altIdx} className="p-2 border rounded-md mb-2">
                                        <img src={alt.img} alt={alt.food} className="w-full h-40 object-cover mb-2" />
                                        <p>{alt.food}: {alt.calories} kcal</p>
                                    </div>
                                ))}
                            </Panel>
                        </Collapse>
                    )}
                </div>
            ))}
        </div>
    );
};

export default DietResult;
