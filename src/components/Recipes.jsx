// React kütüphanesini ve gerekli bileşenleri import ediyoruz
import React, { useContext, useState, useEffect } from 'react';

// useNavigate fonksiyonunu react-router-dom kütüphanesinden import ediyoruz
import { useNavigate } from 'react-router-dom';

// Ant Design kütüphanesinden bazı bileşenleri ve ikonları import ediyoruz
import { Button, Card, Rate, Tag, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

// Tarifler bağlamını (context) import ediyoruz
import { RecipesContext } from '../contexts/RecipesContext';

// Card bileşeninden Meta bileşenini çıkartıyoruz
const { Meta } = Card;

// Recipes adlı bileşeni tanımlıyoruz
const Recipes = () => {
  // Yönlendirme fonksiyonunu kullanmak için useNavigate hook'unu çağırıyoruz
  const navigate = useNavigate();

  // Seçilen tarifleri yönetmek için useState hook'unu kullanıyoruz
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  // Tarifler bağlamını (context) kullanarak recipes ve setRecipes değerlerini alıyoruz
  const { recipes, setRecipes } = useContext(RecipesContext);

  // Bileşen yüklendiğinde tarifleri fetch ederek güncelleyen useEffect hook'u
  useEffect(() => {
    // API'den tarifleri çekiyoruz
    fetch('http://localhost:8000/api/recipes/')
      .then(response => response.json()) // Gelen cevabı JSON formatında dönüştürüyoruz
      .then(data => setRecipes(data)) // Çekilen verileri setRecipes fonksiyonu ile güncelliyoruz
      .catch(error => {
        // Hata oluşursa hatayı konsola yazdırıyoruz ve hata mesajı gösteriyoruz
        console.error('Error:', error);
        message.error('Tarifler yüklenirken bir hata oluştu.');
      });
  }, []);

  // Bileşenin render edileceği JSX yapısını döndürüyoruz
  return (
    <div className="flex flex-row mx-auto px-6 py-12">
      <div className="w-2/3 pr-6">
        {/* Sayfa başlığını belirliyoruz */}
        <h2 className="text-4xl font-bold mb-4">Yemek Tarifleri</h2>

        {/* Tarifleri listelemek için grid düzeni kullanıyoruz */}
        <div className="recipes-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Tarifleri map fonksiyonu ile döngüye sokuyoruz */}
          {recipes.map((recipe, index) => (
            <Card
              key={index} // Her bir öğe için benzersiz anahtar belirliyoruz
              hoverable // Kart üzerine gelindiğinde hover efekti ekliyoruz
              cover={<img alt={recipe.title} src={recipe.image} className="w-full h-48 object-cover" />} // Kart üzerindeki resim
              className="recipe-card" // Kart için ek sınıf
              onClick={() => setSelectedRecipe(recipe)} // Kart tıklandığında seçili tarifi güncelliyoruz
            >
              {/* Kartın başlık ve açıklama kısmı */}
              <Meta title={recipe.title} description={recipe.description} />
              <div className="mt-4">
                {/* Tarif puanlaması */}
                <Rate disabled defaultValue={recipe.ratings / 100} />
                <span className="recipe-ratings ml-2">{recipe.ratings} ratings</span>
              </div>
              <div className="recipe-meta mt-2">
                {/* Tarif süresi ve zorluk seviyesi etiketleri */}
                <Tag color="blue">{recipe.time} dakika</Tag>
                <Tag color="green">{recipe.difficulty}</Tag>
              </div>
            </Card>
          ))}
        </div>
      </div>
      <div className="w-1/3 pl-6">
        {/* Seçilen tarif varsa detaylarını gösteriyoruz */}
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
          // Seçili tarif yoksa "Tarif Ekle" butonunu gösteriyoruz
          <div className="flex items-center justify-center h-full">
            <Button
              type="dashed"
              icon={<PlusOutlined />} // PlusOutlined ikonu
              onClick={() => navigate('/add-recipe')} // Butona tıklandığında add-recipe sayfasına yönlendiriyoruz
            >
              Tarif Ekle
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

// Bileşeni dışa aktarıyoruz
export default Recipes;
