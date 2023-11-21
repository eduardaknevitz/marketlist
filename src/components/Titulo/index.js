// import styles from "./Titulo.module.css";

// function Titulo({ children }) {
//   return <div className={styles.texto}>{children}</div>;
// }

// export default Titulo;
import React from "react";
import { Container, Row, Col } from "reactstrap";
import styles from "./Titulo.module.css";

function Titulo({ children }) {
  return (
    <Container fluid>
      <Row>
        <Col xs={12} className={styles.texto}>
          {children}
        </Col>
      </Row>
    </Container>
  );
}

export default Titulo;
