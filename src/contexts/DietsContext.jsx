// React kütüphanesini ve gerekli fonksiyonları import ediyoruz
import React, { createContext, useState } from 'react';

// DietsContext'i oluşturuyoruz
export const DietsContext = createContext();

// DietsProvider adlı bileşeni tanımlıyoruz
export const DietsProvider = ({ children }) => {
  // Diyet planlarını yönetmek için useState hook'unu kullanıyoruz
  const [diets, setDiets] = useState([
    {
      // Diyet planı bilgilerini tanımlıyoruz
      title: 'Aralıklı Oruç (Intermittent Fasting) Diyeti', // Diyet başlığı
      ratings: 282, // Değerlendirme puanı
      description: "Aralıklı Oruç (Intermittent Fasting), düzenli bir program dahilinde açlık ve yemek yeme arasında geçiş yapan bir beslenme planıdır.", // Diyet açıklaması
      time: '1 Saat 35 Dk', // Diyet süresi
      difficulty: 'Kolay', // Diyet zorluk seviyesi
      vegetarian: true, // Vejetaryen mi değil mi
      image: 'public/images/indir(2).jpg', // Diyet resmi (gerçek resim yoluyla değiştirilmeli)
    },
    {
      // Başka bir diyet planı bilgileri
      title: 'Monte Cristo Sandviç', // Diyet başlığı
      ratings: 0, // Değerlendirme puanı
      description: "Croque monsieur'den ilham alan bu sandviçle öğle yemeğini iple çekin. Hindi, jambon ve Emmental, yumurtalı ekmek dilimleri arasına cömertçe yerleştirilmiştir", // Diyet açıklaması
      time: '20 Dk', // Diyet süresi
      difficulty: 'Kolay', // Diyet zorluk seviyesi
      vegetarian: false, // Vejetaryen mi değil mi
      image: 'public/images/images.jpg', // Diyet resmi (gerçek resim yoluyla değiştirilmeli)
    },
    {
      // Başka bir diyet planı bilgileri
      title: 'Tavuk Pilav', // Diyet başlığı
      ratings: 176, // Değerlendirme puanı
      description: 'En lezzetli soslarla hazırlanmış tavuk ve tane tane pirinç pilavının tadını çıkarın.', // Diyet açıklaması
      time: '45 Dk', // Diyet süresi
      difficulty: 'Orta', // Diyet zorluk seviyesi
      vegetarian: false, // Vejetaryen mi değil mi
      image: 'public/images/pilav.jpg', // Diyet resmi (gerçek resim yoluyla değiştirilmeli)
    },
  ]);

  // DietsContext.Provider bileşenini döndürüyoruz ve çocuk bileşenleri içerisine yerleştiriyoruz
  return (
    <DietsContext.Provider value={{ diets, setDiets }}>
      {children}
    </DietsContext.Provider>
  );
};
