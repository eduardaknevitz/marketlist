import Banner from "components/Banner";
import Cabecalho from "components/Cabecalho";
import Rodape from "components/Rodape";
import Titulo from "components/Titulo";

function Inicio() {
  return (
    <>
      <Cabecalho />
      <Banner imagem="home" />
      <Titulo>
        <h1>Produtos</h1>
      </Titulo>
      <Rodape />
    </>
  );
}

export default Inicio;
