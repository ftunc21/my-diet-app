import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Button } from 'antd';

const RecipeDetail = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        const fetchRecipe = async () => {
            const data = await getRecipeById(id);
            setRecipe(data);
        };
        fetchRecipe();
    }, [id]);

    if (!recipe) return <div>Loading...</div>;

    return (
        <div className="container mx-auto px-6 py-12">
            <h2 className="text-4xl font-bold mb-4">{recipe.title}</h2>
            <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover mb-4" />
            <p>{recipe.description}</p>
            <div className="recipe-meta mt-2">
                <Button type="primary" className="mt-4" onClick={() => window.history.back()}>
                    Geri Dön
                </Button>
            </div>
        </div>
    );
};

export default RecipeDetail;
