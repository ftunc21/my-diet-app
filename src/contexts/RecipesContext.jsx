// React kütüphanesini ve gerekli fonksiyonları import ediyoruz
import React, { createContext, useState } from 'react';

// RecipesContext'i oluşturuyoruz
export const RecipesContext = createContext();

// RecipesProvider adlı bileşeni tanımlıyoruz
export const RecipesProvider = ({ children }) => {
  // Tarifleri yönetmek için useState hook'unu kullanıyoruz
  const [recipes, setRecipes] = useState([
    {
      // Tarif bilgilerini tanımlıyoruz
      title: 'Vegetarian Lazanya', // Tarif başlığı
      ratings: 282, // Değerlendirme puanı
      description: 'Sadece birkaç malzeme kullanarak kolay sebze lazanyamızı yapın. Hazır domates sosu ve beyaz sos kullanabilir veya sosları toplu olarak pişirip dondurabilirsiniz', // Tarif açıklaması
      time: '1 Saat 35 Dk', // Tarif süresi
      difficulty: 'Kolay', // Tarif zorluk seviyesi
      vegetarian: true, // Vejetaryen mi değil mi
      image: 'public/images/indir(2).jpg', // Tarif resmi (gerçek resim yoluyla değiştirilmeli)
    },
    {
      // Başka bir tarif bilgileri
      title: 'Monte Cristo Sandviç', // Tarif başlığı
      ratings: 0, // Değerlendirme puanı
      description: "Croque monsieur'den ilham alan bu sandviçle öğle yemeğini iple çekin. Hindi, jambon ve Emmental, yumurtalı ekmek dilimleri arasına cömertçe yerleştirilmiştir", // Tarif açıklaması
      time: '20 Dk', // Tarif süresi
      difficulty: 'Kolay', // Tarif zorluk seviyesi
      vegetarian: false, // Vejetaryen mi değil mi
      image: 'public/images/images.jpg', // Tarif resmi (gerçek resim yoluyla değiştirilmeli)
    },
    {
      // Başka bir tarif bilgileri
      title: 'Tavuk Pilav', // Tarif başlığı
      ratings: 176, // Değerlendirme puanı
      description: 'En lezzetli soslarla hazırlanmış tavuk ve tane tane pirinç pilavının tadını çıkarın.', // Tarif açıklaması
      time: '45 Dk', // Tarif süresi
      difficulty: 'Orta', // Tarif zorluk seviyesi
      vegetarian: false, // Vejetaryen mi değil mi
      image: 'public/images/pilav.jpg', // Tarif resmi (gerçek resim yoluyla değiştirilmeli)
    },
    {
      // Tekrar eden tarif bilgileri
      title: 'Vegetarian Lazanya', // Tarif başlığı
      ratings: 282, // Değerlendirme puanı
      description: 'Sadece birkaç malzeme kullanarak kolay sebze lazanyamızı yapın. Hazır domates sosu ve beyaz sos kullanabilir veya sosları toplu olarak pişirip dondurabilirsiniz', // Tarif açıklaması
      time: '1 Saat 35 Dk', // Tarif süresi
      difficulty: 'Kolay', // Tarif zorluk seviyesi
      vegetarian: true, // Vejetaryen mi değil mi
      image: 'public/images/indir(2).jpg', // Tarif resmi (gerçek resim yoluyla değiştirilmeli)
    },
    {
      // Tekrar eden tarif bilgileri
      title: 'Monte Cristo Sandviç', // Tarif başlığı
      ratings: 0, // Değerlendirme puanı
      description: "Croque monsieur'den ilham alan bu sandviçle öğle yemeğini iple çekin. Hindi, jambon ve Emmental, yumurtalı ekmek dilimleri arasına cömertçe yerleştirilmiştir", // Tarif açıklaması
      time: '20 Dk', // Tarif süresi
      difficulty: 'Kolay', // Tarif zorluk seviyesi
      vegetarian: false, // Vejetaryen mi değil mi
      image: 'public/images/images.jpg', // Tarif resmi (gerçek resim yoluyla değiştirilmeli)
    },
    {
      // Tekrar eden tarif bilgileri
      title: 'Tavuk Pilav', // Tarif başlığı
      ratings: 176, // Değerlendirme puanı
      description: 'En lezzetli soslarla hazırlanmış tavuk ve tane tane pirinç pilavının tadını çıkarın.', // Tarif açıklaması
      time: '45 Dk', // Tarif süresi
      difficulty: 'Orta', // Tarif zorluk seviyesi
      vegetarian: false, // Vejetaryen mi değil mi
      image: 'public/images/pilav.jpg', // Tarif resmi (gerçek resim yoluyla değiştirilmeli)
    },
    {
      // Tekrar eden tarif bilgileri
      title: 'Vegetarian Lazanya', // Tarif başlığı
      ratings: 282, // Değerlendirme puanı
      description: 'Sadece birkaç malzeme kullanarak kolay sebze lazanyamızı yapın. Hazır domates sosu ve beyaz sos kullanabilir veya sosları toplu olarak pişirip dondurabilirsiniz', // Tarif açıklaması
      time: '1 Saat 35 Dk', // Tarif süresi
      difficulty: 'Kolay', // Tarif zorluk seviyesi
      vegetarian: true, // Vejetaryen mi değil mi
      image: 'public/images/indir(2).jpg', // Tarif resmi (gerçek resim yoluyla değiştirilmeli)
    },
    {
      // Tekrar eden tarif bilgileri
      title: 'Monte Cristo Sandviç', // Tarif başlığı
      ratings: 0, // Değerlendirme puanı
      description: "Croque monsieur'den ilham alan bu sandviçle öğle yemeğini iple çekin. Hindi, jambon ve Emmental, yumurtalı ekmek dilimleri arasına cömertçe yerleştirilmiştir", // Tarif açıklaması
      time: '20 Dk', // Tarif süresi
      difficulty: 'Kolay', // Tarif zorluk seviyesi
      vegetarian: false, // Vejetaryen mi değil mi
      image: 'public/images/images.jpg', // Tarif resmi (gerçek resim yoluyla değiştirilmeli)
    },
    {
      // Tekrar eden tarif bilgileri
      title: 'Tavuk Pilav', // Tarif başlığı
      ratings: 176, // Değerlendirme puanı
      description: 'En lezzetli soslarla hazırlanmış tavuk ve tane tane pirinç pilavının tadını çıkarın.', // Tarif açıklaması
      time: '45 Dk', // Tarif süresi
      difficulty: 'Orta', // Tarif zorluk seviyesi
      vegetarian: false, // Vejetaryen mi değil mi
      image: 'public/images/pilav.jpg', // Tarif resmi (gerçek resim yoluyla değiştirilmeli)
    },
    {
      // Tekrar eden tarif bilgileri
      title: 'Vegetarian Lazanya', // Tarif başlığı
      ratings: 282, // Değerlendirme puanı
      description: 'Sadece birkaç malzeme kullanarak kolay sebze lazanyamızı yapın. Hazır domates sosu ve beyaz sos kullanabilir veya sosları toplu olarak pişirip dondurabilirsiniz', // Tarif açıklaması
      time: '1 Saat 35 Dk', // Tarif süresi
      difficulty: 'Kolay', // Tarif zorluk seviyesi
      vegetarian: true, // Vejetaryen mi değil mi
      image: 'public/images/indir(2).jpg', // Tarif resmi (gerçek resim yoluyla değiştirilmeli)
    },
    {
      // Tekrar eden tarif bilgileri
      title: 'Monte Cristo Sandviç', // Tarif başlığı
      ratings: 0, // Değerlendirme puanı
      description: "Croque monsieur'den ilham alan bu sandviçle öğle yemeğini iple çekin. Hindi, jambon ve Emmental, yumurtalı ekmek dilimleri arasına cömertçe yerleştirilmiştir", // Tarif açıklaması
      time: '20 Dk', // Tarif süresi
      difficulty: 'Kolay', // Tarif zorluk seviyesi
      vegetarian: false, // Vejetaryen mi değil mi
      image: 'public/images/images.jpg', // Tarif resmi (gerçek resim yoluyla değiştirilmeli)
    },
    {
      // Tekrar eden tarif bilgileri
      title: 'Tavuk Pilav', // Tarif başlığı
      ratings: 176, // Değerlendirme puanı
      description: 'En lezzetli soslarla hazırlanmış tavuk ve tane tane pirinç pilavının tadını çıkarın.', // Tarif açıklaması
      time: '45 Dk', // Tarif süresi
      difficulty: 'Orta', // Tarif zorluk seviyesi
      vegetarian: false, // Vejetaryen mi değil mi
      image: 'public/images/pilav.jpg', // Tarif resmi (gerçek resim yoluyla değiştirilmeli)
    },
  ]);

  // RecipesContext.Provider bileşenini döndürüyoruz ve çocuk bileşenleri içerisine yerleştiriyoruz
  return (
    <RecipesContext.Provider value={{ recipes, setRecipes }}>
      {children}
    </RecipesContext.Provider>
  );
};
