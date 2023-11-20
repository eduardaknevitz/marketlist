import Banner from "components/Banner";
import Card from "components/Card";
import Titulo from "components/Titulo";
import produtos from "json/db.json";
import styles from "./Inicio.module.css";

function Inicio() {
  return (
    <>
      <Banner imagem="home" />
      <Titulo>
        <h1>Todos produtos</h1>
      </Titulo>
      <section className={styles.container}>
        {produtos.map((produto) => {
          return <Card {...produto} key={produtos.id} />;
        })}
      </section>
    </>
  );
}

export default Inicio;
