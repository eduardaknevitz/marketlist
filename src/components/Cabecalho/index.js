import React from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
} from "reactstrap";
import logo from "./logo.png";
import styles from "./Cabecalho.module.css";
import CabecalhoLink from "components/CabecalhoLink";

function Cabecalho() {
  return (
    <Navbar expand="md" className={styles.cabecalho}>
      <Container className={styles.cabecalho}>
        <NavbarBrand tag={Link} to="/">
          <img src={logo} alt="Logo" />
        </NavbarBrand>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink tag={Link} to="/inicio" className={styles.buttonsLink}>
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/Carrinho" className={styles.buttonsLink}>
              Carrinho
            </NavLink>
          </NavItem>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Cabecalho;
