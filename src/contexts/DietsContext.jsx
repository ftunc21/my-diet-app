import React, { createContext, useState } from 'react';

export const DietsContext = createContext();

export const DietsProvider = ({ children }) => {
  const [diets, setDiets] = useState([
    {
      title: 'Aralıklı Oruç (Intermittent Fasting) Diyeti',
      ratings: 282,
      description: "Aralıklı Oruç (Intermittent Fasting), düzenli bir program dahilinde açlık ve yemek yeme arasında geçiş yapan bir beslenme planıdır. Açlık dönemlerinde, vücut birincil yakıt kaynağı olarak glikozu (şeker) kullanmaktan enerji için yağ kullanmaya geçer. Kilo kaybına, gelişmiş insülin duyarlılığı ve azaltılmış inflamasyon gibi diğer potansiyel sağlık yararları sağlayabilir. Aralıklı orucun birkaç farklı yöntemi vardır ve en yaygın olanlardan bazıları şunlardır: 16/8 yöntemi: Bu yöntemde, her gün 16 saat boyunca oruç tutulur ve yemek yeme süresi 8 saate sığdırılır. Örneğin, yemek yeme süresi 12:00 ile 20:00 arasında olabilir. 5:2 diyeti: Bu yöntemde, haftada iki gün boyunca çok az kalori alınır ve diğer beş gün boyunca normal şekilde yemek yenir. Örneğin, oruç tutulan günlerde 500-600 kalori alınabilir ve diğer günlerde normal şekilde yemek yenir. Eat-Stop-Eat: Bu yöntemde, haftada bir veya iki gün boyunca 24 saat boyunca oruç tutulur",

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
