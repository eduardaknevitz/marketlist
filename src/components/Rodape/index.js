import React from "react";
import { Row, Col } from "reactstrap";

import styles from "./Rodape.module.css";

function Rodape() {
  return (
    <footer className={styles.rodape}>
      <Row>
        <Col xs={12}>
          <p>Desenvolvido por Eduarda Knevitz Soares</p>
        </Col>
      </Row>
    </footer>
  );
}

export default Rodape;
