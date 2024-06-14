import React, { createContext, useState } from 'react';

export const RecipesContext = createContext();

export const RecipesProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([
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
  ]);

  return (
    <RecipesContext.Provider value={{ recipes, setRecipes }}>
      {children}
    </RecipesContext.Provider>
  );
};
