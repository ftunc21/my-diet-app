
import React, { useContext, useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';


import { Button, Card, Rate, Tag, message } from 'antd';


import { PlusOutlined } from '@ant-design/icons';

import { DietsContext } from '../contexts/DietsContext';


const { Meta } = Card;

const DietPlans = () => {

  const navigate = useNavigate();


  const [selectedDiet, setSelectedDiet] = useState(null);


  const { diets, setDiets } = useContext(DietsContext);


  useEffect(() => {
    // API'den diyet planlarını çekiyoruz
    fetch('http://localhost:8000/api/diets/')
      .then(response => response.json())
      .then(data => setDiets(data))
      .catch(error => {

        console.error('Error:', error);
        message.error('Diyetler yüklenirken bir hata oluştu.');
      });
  }, []);


  return (
    <div className="flex flex-row mx-auto px-6 py-12">
      <div className="w-2/3 pr-6">

        <h2 className="text-4xl font-bold mb-4">Diyet Planları</h2>


        <div className="diets-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {diets.map((diet, index) => (
            <Card
              key={index}
              hoverable
              cover={<img alt={diet.title} src={diet.image} className="w-full h-48 object-cover" />}
              className="diet-card" // Kart için ek sınıf
              onClick={() => setSelectedDiet(diet)}
            >

              <Meta title={diet.title} description={diet.description} />
              <div className="mt-4">

                <Rate disabled defaultValue={diet.ratings / 100} />
                <span className="diet-ratings ml-2">{diet.ratings} ratings</span>
              </div>
              <div className="diet-meta mt-2">

                <Tag color="blue">{diet.time} dakika</Tag>
                <Tag color="green">{diet.difficulty}</Tag>
              </div>
            </Card>
          ))}
        </div>
      </div>
      <div className="w-1/3 pl-6">

        {selectedDiet ? (
          <div className="diet-preview p-4 border border-gray-300 rounded-lg">
            <h3 className="text-2xl font-bold mb-2">{selectedDiet.title}</h3>
            <img src={selectedDiet.image} alt={selectedDiet.title} className="w-full h-48 object-cover mb-4" />
            <p>{selectedDiet.detailed_description}</p>
            <Button type="primary" className="mt-4" onClick={() => setSelectedDiet(null)}>
              Geri Dön
            </Button>
          </div>
        ) : (

          <div className="flex items-center justify-center h-full">
            <Button
              type="dashed"
              icon={<PlusOutlined />}
              onClick={() => navigate('/create-diet')}
            >
              Diyet Planı Ekle
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

// Bileşeni dışa aktarıyoruz
export default DietPlans;
