import Banner from "components/Banner";
import Cabecalho from "components/Cabecalho";
import Card from "components/Card";
import Rodape from "components/Rodape";
import Titulo from "components/Titulo";

function Inicio() {
  return (
    <>
      <Cabecalho />
      <Banner imagem="home" />
      <Titulo>
        <h1>Todos produtos</h1>
      </Titulo>
      <Card
        id="1"
        titulo="produto 1"
        capa="https://ser.vitao.com.br/wp-content/uploads/2017/12/shutterstock_252338818-1-920x535.jpg"
      />
      <Rodape />
    </>
  );
}

export default Inicio;
