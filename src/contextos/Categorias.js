import React, { createContext, useContext, useState } from "react";

const CategoriaContext = createContext();

export const useCategoriaContext = () => {
  return useContext(CategoriaContext);
};

export const CategoriaProvider = ({ children }) => {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(null);

  const handleCategoriaChange = (novaCategoria) => {
    setCategoriaSelecionada(novaCategoria);
  };

  return (
    <CategoriaContext.Provider
      value={{ categoriaSelecionada, handleCategoriaChange }}
    >
      {children}
    </CategoriaContext.Provider>
  );
};
