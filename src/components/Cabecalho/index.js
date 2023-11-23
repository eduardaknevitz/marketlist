import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import logo from "./logo.png";
import styles from "./Cabecalho.module.css";
import CabecalhoLink from "components/CabecalhoLink";

function Cabecalho() {
  return (
    <header className={styles.cabecalho}>
      <Container>
        <Row>
          <Col xs="12" sm="6">
            <Link to="/">
              <img src={logo} alt="Logo" />
            </Link>
          </Col>
          <Col xs="12" sm="6">
            <nav>
              <CabecalhoLink url="/inicio">Home</CabecalhoLink>
              <CabecalhoLink url="/Carrinho">Carrinho</CabecalhoLink>
              {/* <CabecalhoLink url="/">Logout</CabecalhoLink> */}
            </nav>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Cabecalho;
