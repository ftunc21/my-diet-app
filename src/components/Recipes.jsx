// src/components/Recipes.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Recipes.css'; // Assume you have a CSS file for styling

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
      <div className="recipes-list">
        {recipes.map((recipe, index) => (
          <div key={index} className="recipe-card">
            <img src={recipe.image} alt={recipe.title} className="recipe-image" />
            <div className="recipe-info">
              <h3 className="recipe-title">{recipe.title}</h3>
              <div className="recipe-ratings">⭐ {recipe.ratings} ratings</div>
              <p className="recipe-description">{recipe.description}</p>
              <div className="recipe-meta">
                <span className="recipe-time">{recipe.time}</span>
                <span className="recipe-difficulty">{recipe.difficulty}</span>
                {recipe.vegetarian && <span className="recipe-vegetarian">Vegetarian</span>}
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="add-recipe-button" onClick={() => navigate('/add-recipe')}>
        Tarif Ekle
      </button>
    </div>
  );
};

export default Recipes;
