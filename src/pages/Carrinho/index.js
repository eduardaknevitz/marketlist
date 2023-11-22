import Banner from "components/Banner";
import styles from "./Carrinho.module.css";
import Titulo from "components/Titulo";
import Card from "components/Card";
import Cabecalho from "components/Cabecalho";
import Rodape from "components/Rodape";

function Carrinho() {
  return (
    <>
      <Cabecalho />
      <Banner imagem="carrinho" />
      <Titulo>
        <h1>Carrinho</h1>
      </Titulo>
      <section className={styles.container}></section>
      <Rodape />
    </>
  );
}

export default Carrinho;
