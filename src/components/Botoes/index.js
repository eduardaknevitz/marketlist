import React from "react";
import { Button } from "reactstrap";
import { useCategoriaContext } from "../../contextos/Categorias";
import styles from "./BotoesFiltro.module.css";

function BotoesFiltro({ categorias }) {
  const { handleCategoriaChange } = useCategoriaContext();

  const categoriaLabels = {
    "men's clothing": "Roupas Masculinas",
    "women's clothing": "Roupas Femininas",
    jewelery: "Joias",
    electronics: "Eletrônicos",
  };

  return (
    <div className={styles.botoes}>
      <Button color="secondary" onClick={() => handleCategoriaChange(null)}>
        Todos
      </Button>

      {categorias.map((categoria) => (
        <Button
          key={categoria}
          color="secondary"
          onClick={() => handleCategoriaChange(categoria)}
        >
          {categoriaLabels[categoria] || categoria}
        </Button>
      ))}
    </div>
  );
}

export default BotoesFiltro;
