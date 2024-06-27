
import React, { createContext, useState } from 'react';


export const DietsContext = createContext();


export const DietsProvider = ({ children }) => {

  const [diets, setDiets] = useState([

  ]);


  return (
    <DietsContext.Provider value={{ diets, setDiets }}>
      {children}
    </DietsContext.Provider>
  );
};
