import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Card, Rate, Tag, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { RecipesContext } from '../contexts/RecipesContext';

const { Meta } = Card;

const Recipes = () => {
  const navigate = useNavigate();
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const { recipes, setRecipes } = useContext(RecipesContext);

  useEffect(() => {
    fetch('http://localhost:8000/api/recipes/')
      .then(response => response.json())
      .then(data => setRecipes(data))
      .catch(error => {
        console.error('Error:', error);
        message.error('Tarifler yüklenirken bir hata oluştu.');
      });
  }, []);

  return (
    <div className="flex flex-row mx-auto px-6 py-12">
      <div className="w-2/3 pr-6">
        <h2 className="text-4xl font-bold mb-4">Yemek Tarifleri</h2>
        <div className="recipes-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recipes.map((recipe, index) => (
            <Card
              key={index}
              hoverable
              cover={<img alt={recipe.title} src={recipe.image} className="w-full h-48 object-cover" />}
              className="recipe-card"
              onClick={() => setSelectedRecipe(recipe)}
            >
              <Meta title={recipe.title} description={recipe.description} />
              <div className="mt-4">
                <Rate disabled defaultValue={recipe.ratings / 100} />
                <span className="recipe-ratings ml-2">{recipe.ratings} ratings</span>
              </div>
              <div className="recipe-meta mt-2">
                <Tag color="blue">{recipe.time} dakika</Tag>
                <Tag color="green">{recipe.difficulty}</Tag>
              </div>
            </Card>
          ))}
        </div>
      </div>
      <div className="w-1/3 pl-6">
        {selectedRecipe ? (
          <div className="recipe-preview p-4 border border-gray-300 rounded-lg">
            <h3 className="text-2xl font-bold mb-2">{selectedRecipe.title}</h3>
            <img src={selectedRecipe.image} alt={selectedRecipe.title} className="w-full h-48 object-cover mb-4" />
            <p>{selectedRecipe.detailed_description}</p>
            <Button type="primary" className="mt-4" onClick={() => setSelectedRecipe(null)}>
              Geri Dön
            </Button>
          </div>
        ) : (
          <div className="flex items-center justify-center h-full">
            <Button
              type="dashed"
              icon={<PlusOutlined />}
              onClick={() => navigate('/add-recipe')}
            >
              Tarif Ekle
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Recipes;
