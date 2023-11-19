import Banner from "components/Banner";
import Cabecalho from "components/Cabecalho";
import Card from "components/Card";
import Rodape from "components/Rodape";
import Titulo from "components/Titulo";
import produtos from "json/db.json";
import styles from "./Inicio.module.css";

function Inicio() {
  return (
    <>
      <Cabecalho />
      <Banner imagem="home" />
      <Titulo>
        <h1>Todos produtos</h1>
      </Titulo>
      <section className={styles.container}>
        {produtos.map((produto) => {
          return <Card {...produto} key={produtos.id} />;
        })}
      </section>
      <Rodape />
    </>
  );
}

export default Inicio;
