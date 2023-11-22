import React from "react";
import { Container, Row, Col } from "reactstrap";
import Banner from "components/Banner";
import Titulo from "components/Titulo";
import styles from "./Inicio.module.css";
import Products from "components/Produtos";
import Cabecalho from "components/Cabecalho";
import Rodape from "components/Rodape";

function Inicio() {
  return (
    <>
      <Cabecalho />
      <Banner imagem="home" />
      <Container className={styles.container}>
        <Titulo>
          <h1>Todos produtos</h1>
        </Titulo>
        <Row>
          <Products />
        </Row>
      </Container>
      <Rodape />
    </>
  );
}

export default Inicio;
