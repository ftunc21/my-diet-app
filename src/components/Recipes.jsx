// src/components/Recipes.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Card, Rate, Tag } from 'antd';


const { Meta } = Card;

const Recipes = () => {
  const navigate = useNavigate();

  const recipes = [
    {
      title: 'Vegetarian Lazanya',
      ratings: 282,
      description: 'Sadece birkaç malzeme kullanarak kolay sebze lazanyamızı yapın. Hazır domates sosu ve beyaz sos kullanabilir veya sosları toplu olarak pişirip dondurabilirsiniz',
      time: '1 Saat 35 Dk',
      difficulty: 'Kolay',
      vegetarian: true,
      image: 'public/images/indir(2).jpg', // Replace with actual image path
    },
    {
      title: 'Monte Cristo Sandviç',
      ratings: 0,
      description: "Croque monsieur'den ilham alan bu sandviçle öğle yemeğini iple çekin. Hindi, jambon ve Emmental, yumurtalı ekmek dilimleri arasına cömertçe yerleştirilmiştir",
      time: '20 Dk',
      difficulty: 'Kolay',
      vegetarian: false,
      image: 'public/images/images.jpg', // Replace with actual image path
    },
    {
      title: 'Tavuk Pilav',
      ratings: 176,
      description: 'En lezzetli soslarla hazırlanmış tavuk ve tane tane pirinç pilavının tadını çıkarın.',
      time: '45 Dk',
      difficulty: 'Orta',
      vegetarian: false,
      image: 'public/images/pilav.jpg', // Replace with actual image path
    },
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-4xl font-bold mb-4">Yemek Tarifleri</h2>
      <div className="recipes-list grid gap-6">
        {recipes.map((recipe, index) => (
          <Card
            key={index}
            hoverable
            cover={<img alt={recipe.title} src={recipe.image} />}
            className="recipe-card"
          >
            <Meta title={recipe.title} description={recipe.description} />
            <div className="mt-4">
              <Rate disabled defaultValue={recipe.ratings / 100} />
              <span className="recipe-ratings ml-2">{recipe.ratings} ratings</span>
            </div>
            <div className="recipe-meta mt-2">
              <Tag color="blue">{recipe.time}</Tag>
              <Tag color="green">{recipe.difficulty}</Tag>
              {recipe.vegetarian && <Tag color="green">Vegetarian</Tag>}
            </div>
          </Card>
        ))}
      </div>
      <Button type="primary" className="mt-6" onClick={() => navigate('/add-recipe')}>
        Tarif Ekle
      </Button>
    </div>
  );
};

export default Recipes;
