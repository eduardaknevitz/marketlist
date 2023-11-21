import React from "react";
import { useCarrinhoContext } from "contextos/Carrinho";
import { Card as ReactstrapCard, CardImg, Button, CardTitle } from "reactstrap";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";

function Card({ data }) {
  const { adicionarProduto } = useCarrinhoContext();
  const { image, id, title } = data;

  // const formattedPrice = new Intl.NumberFormat("pt-BR", {
  //   style: "currency",
  //   currency: "BRL",
  // }).format(price);

  return (
    <ReactstrapCard className={styles.container}>
      <Link to={`/getProdutos/${id}`}>
        <CardImg top src={image} alt={title} className={styles.image} />
        <CardTitle tag="h2" className={styles.title}>
          {title}
        </CardTitle>
        {/* <h2>{formattedPrice}</h2> */}
        <Button
          color="info"
          onClick={() => {
            adicionarProduto({ id, title, image });
          }}
        >
          Mais informações
        </Button>
      </Link>
    </ReactstrapCard>
  );
}

export default Card;
