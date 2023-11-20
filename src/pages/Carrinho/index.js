import Banner from "components/Banner";
import styles from "./Carrinho.module.css";
import Titulo from "components/Titulo";
import Card from "components/Card";

function Carrinho() {
  return (
    <>
      <Banner imagem="carrinho" />
      <Titulo>
        <h1>Carrinho</h1>
      </Titulo>
      <section className={styles.container}>
        <Card
          id="1"
          titulo="teste"
          capa="https://cdn.wizard.com.br/wp-content/uploads/2017/01/05115936/aprenda-os-nomes-das-frutas-em-ingles.jpg"
        />
      </section>
    </>
  );
}

export default Carrinho;
