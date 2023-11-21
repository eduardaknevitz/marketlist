import React from "react";
import { useCarrinhoContext } from "contextos/Carrinho";
import { Card as ReactstrapCard, CardImg, Button, CardTitle } from "reactstrap";
import styles from "./Card.module.css";

function Card({ data }) {
  const { adicionarProduto } = useCarrinhoContext();
  const { image, id, title } = data;
  return (
    <ReactstrapCard className={styles.container}>
      <CardImg top src={image} alt={title} className={styles.capa} />
      <CardTitle tag="h2">{title}</CardTitle>
      <Button
        color="primary"
        onClick={() => {
          adicionarProduto({ id, title, image });
        }}
      >
        Adicionar
      </Button>
    </ReactstrapCard>
  );
}

export default Card;
