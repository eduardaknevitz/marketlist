import React from "react";
import { Row, Col } from "reactstrap";

import styles from "./Rodape.module.css";

function Rodape() {
  return (
    <footer className={styles.rodape}>
      <Row>
        <Col xs={12} className="text-center">
          <h2>Desenvolvido por Eduarda Knevitz Soares</h2>
        </Col>
      </Row>
    </footer>
  );
}

export default Rodape;
