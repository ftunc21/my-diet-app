// React kütüphanesini ve gerekli bileşenleri import ediyoruz
import React, { useEffect, useState } from 'react';

// useParams fonksiyonunu react-router-dom kütüphanesinden import ediyoruz
import { useParams } from 'react-router-dom';

// Ant Design kütüphanesinden Button bileşenini import ediyoruz
import { Button } from 'antd';

// RecipeDetail adlı bileşeni tanımlıyoruz
const RecipeDetail = () => {
    // URL parametrelerinden id değerini alıyoruz
    const { id } = useParams();

    // Tarif detaylarını yönetmek için useState hook'unu kullanıyoruz
    const [recipe, setRecipe] = useState(null);

    // Bileşen yüklendiğinde tarif detaylarını fetch eden useEffect hook'u
    useEffect(() => {
        // Belirli id'ye sahip tarifi fetch eden asenkron fonksiyon
        const fetchRecipe = async () => {
            const data = await getRecipeById(id); // Tarif detaylarını getiriyoruz
            setRecipe(data); // Tarif detaylarını state'e kaydediyoruz
        };
        fetchRecipe();
    }, [id]); // id değiştiğinde useEffect hook'u tekrar çalışır

    // Tarif henüz yüklenmemişse yükleniyor mesajı gösteriyoruz
    if (!recipe) return <div>Loading...</div>;

    // Bileşenin render edileceği JSX yapısını döndürüyoruz
    return (
        <div className="container mx-auto px-6 py-12">
            <h2 className="text-4xl font-bold mb-4">{recipe.title}</h2> {/* Tarif başlığı */}
            <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover mb-4" /> {/* Tarif resmi */}
            <p>{recipe.description}</p> {/* Tarif açıklaması */}
            <div className="recipe-meta mt-2">
                <Button type="primary" className="mt-4" onClick={() => window.history.back()}>
                    Geri Dön {/* Geri dön butonu */}
                </Button>
            </div>
        </div>
    );
};

// Bileşeni dışa aktarıyoruz
export default RecipeDetail;
