import { Link } from "react-router-dom";
import logo from "./logo.png";
import styles from "./Cabecalho.module.css";
import CabecalhoLink from "components/CabecalhoLink";

function Cabecalho() {
  return (
    <header className={styles.cabecalho}>
      <Link to="./">
        <img src={logo} alt="Cine Tag"></img>
      </Link>
      <nav>
        <CabecalhoLink url="./">Home</CabecalhoLink>
        <CabecalhoLink url="./Carrinho">Carrinho</CabecalhoLink>
      </nav>
    </header>
  );
}

export default Cabecalho;
