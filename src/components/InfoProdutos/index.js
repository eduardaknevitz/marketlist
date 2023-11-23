import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import fetchProductById from "services/getProdutoById";
import styles from "./InfoProdutos.module.css";
import Cabecalho from "components/Cabecalho";
import Rodape from "components/Rodape";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Button,
} from "reactstrap";

export const InfoProduto = () => {
  const { id } = useParams();
  const [produto, setProduto] = useState(null);
  const [productAdded, setProductAdded] = useState(false);
  const navigate = useNavigate();

  const getProductsById = () => {
    fetchProductById(id)
      .then((response) => {
        setProduto(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getProductsById();
  }, []);

  const buttonComprar = () => {
    setProductAdded(true);
  };

  const buttonVoltar = () => {
    navigate("/inicio");
  };

  return (
    <>
      <Cabecalho />
      <Container className="mt-4 mb-4">
        {produto && (
          <Row>
            <Col md={6} className="mx-auto">
              <Card>
                <div className={styles.div}>
                  <CardImg
                    src={produto.image}
                    alt={produto.title}
                    className={styles.image}
                  />
                </div>
                <CardBody>
                  <CardTitle tag="h2">{produto.title}</CardTitle>
                  <CardText>{produto.description}</CardText>
                  <CardText className={styles.price}>
                    <strong>${produto.price}</strong>
                  </CardText>
                  <Button
                    color="primary"
                    onClick={buttonComprar}
                    className={styles.button}
                  >
                    Comprar
                  </Button>
                  <Button
                    color="secondary"
                    onClick={buttonVoltar}
                    className={`${styles.button} mt-2`}
                  >
                    Voltar
                  </Button>
                  {productAdded && (
                    <div className="mt-2 alert alert-success text-center">
                      Produto adicionado ao carrinho!
                    </div>
                  )}
                </CardBody>
              </Card>
            </Col>
          </Row>
        )}
      </Container>
      <Rodape />
    </>
  );
};
