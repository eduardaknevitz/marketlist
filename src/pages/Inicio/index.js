import React from "react";
import { Container, Row, Col } from "reactstrap";
import Banner from "components/Banner";
import Card from "components/Card";
import Titulo from "components/Titulo";

import styles from "./Inicio.module.css";
import Products from "components/Produtos";

function Inicio() {
  return (
    <>
      <Banner imagem="home" />
      <Container>
        <Titulo>
          <h1>Todos produtos</h1>
        </Titulo>
        <Row>
          <Products />
        </Row>
      </Container>
    </>
  );
}

export default Inicio;
