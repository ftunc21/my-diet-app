// React kütüphanesini ve gerekli fonksiyonları import ediyoruz
import React, { useContext, useState, useEffect } from 'react';

// useNavigate fonksiyonunu react-router-dom kütüphanesinden import ediyoruz
import { useNavigate } from 'react-router-dom';

// Ant Design kütüphanesinden bazı bileşenleri import ediyoruz
import { Button, Card, Rate, Tag, message } from 'antd';

// PlusOutlined ikonunu Ant Design ikon kütüphanesinden import ediyoruz
import { PlusOutlined } from '@ant-design/icons';

// Diyetler bağlamını (context) import ediyoruz
import { DietsContext } from '../contexts/DietsContext';

// Card bileşeninden Meta bileşenini çıkartıyoruz
const { Meta } = Card;

// DietPlans adlı bileşeni tanımlıyoruz
const DietPlans = () => {
  // Yönlendirme fonksiyonunu kullanmak için useNavigate hook'unu çağırıyoruz
  const navigate = useNavigate();

  // Seçilen diyet planını yönetmek için useState hook'unu kullanıyoruz
  const [selectedDiet, setSelectedDiet] = useState(null);

  // Diyetler bağlamını (context) kullanarak diets ve setDiets değerlerini alıyoruz
  const { diets, setDiets } = useContext(DietsContext);

  // Bileşen yüklendiğinde diyet planlarını fetch ederek güncelleyen useEffect hook'u
  useEffect(() => {
    // API'den diyet planlarını çekiyoruz
    fetch('http://localhost:8000/api/diets/')
      .then(response => response.json()) // Gelen cevabı JSON formatında dönüştürüyoruz
      .then(data => setDiets(data)) // Çekilen verileri setDiets fonksiyonu ile güncelliyoruz
      .catch(error => {
        // Hata oluşursa hatayı konsola yazdırıyoruz ve hata mesajı gösteriyoruz
        console.error('Error:', error);
        message.error('Diyetler yüklenirken bir hata oluştu.');
      });
  }, []);

  // Bileşenin render edileceği JSX yapısını döndürüyoruz
  return (
    <div className="flex flex-row mx-auto px-6 py-12">
      <div className="w-2/3 pr-6">
        {/* Sayfa başlığını belirliyoruz */}
        <h2 className="text-4xl font-bold mb-4">Diyet Planları</h2>

        {/* Diyet planlarını listelemek için grid düzeni kullanıyoruz */}
        <div className="diets-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Diyet planlarını map fonksiyonu ile döngüye sokuyoruz */}
          {diets.map((diet, index) => (
            <Card
              key={index} // Her bir öğe için benzersiz anahtar belirliyoruz
              hoverable // Kart üzerine gelindiğinde hover efekti ekliyoruz
              cover={<img alt={diet.title} src={diet.image} className="w-full h-48 object-cover" />} // Kart üzerindeki resim
              className="diet-card" // Kart için ek sınıf
              onClick={() => setSelectedDiet(diet)} // Kart tıklandığında seçili diyeti güncelliyoruz
            >
              {/* Kartın başlık ve açıklama kısmı */}
              <Meta title={diet.title} description={diet.description} />
              <div className="mt-4">
                {/* Diyet planının puanlaması */}
                <Rate disabled defaultValue={diet.ratings / 100} />
                <span className="diet-ratings ml-2">{diet.ratings} ratings</span>
              </div>
              <div className="diet-meta mt-2">
                {/* Diyet planının pişirme süresi ve zorluk seviyesi etiketleri */}
                <Tag color="blue">{diet.time} dakika</Tag>
                <Tag color="green">{diet.difficulty}</Tag>
              </div>
            </Card>
          ))}
        </div>
      </div>
      <div className="w-1/3 pl-6">
        {/* Seçilen diyet planı varsa detaylarını gösteriyoruz */}
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
          // Seçili diyet planı yoksa "Diyet Planı Ekle" butonunu gösteriyoruz
          <div className="flex items-center justify-center h-full">
            <Button
              type="dashed"
              icon={<PlusOutlined />} // PlusOutlined ikonu
              onClick={() => navigate('/create-diet')} // Butona tıklandığında create-diet sayfasına yönlendiriyoruz
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
