// React kütüphanesini ve gerekli fonksiyonları import ediyoruz
import React, { createContext, useState } from 'react';

// DietsContext'i oluşturuyoruz
export const DietsContext = createContext();

// DietsProvider adlı bileşeni tanımlıyoruz
export const DietsProvider = ({ children }) => {
  // Diyet planlarını yönetmek için useState hook'unu kullanıyoruz
  const [diets, setDiets] = useState([

  ]);

  // DietsContext.Provider bileşenini döndürüyoruz ve çocuk bileşenleri içerisine yerleştiriyoruz
  return (
    <DietsContext.Provider value={{ diets, setDiets }}>
      {children}
    </DietsContext.Provider>
  );
};
