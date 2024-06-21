import React, { createContext, useState } from 'react';

export const DietsContext = createContext();

export const DietsProvider = ({ children }) => {
  const [diets, setDiets] = useState([
    {
      title: 'Aralıklı Oruç (Intermittent Fasting) Diyeti',
      ratings: 282,
      description: "Aralıklı Oruç (Intermittent Fasting), düzenli bir program dahilinde açlık ve yemek yeme arasında geçiş yapan bir beslenme planıdır. ",

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
    <DietsContext.Provider value={{ diets, setDiets }}>
      {children}
    </DietsContext.Provider>
  );
};
