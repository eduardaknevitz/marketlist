import Cabecalho from "components/Cabecalho";
import Banner from "components/Banner";
import Rodape from "components/Rodape";

function Inicio() {
  return (
    <>
      <Cabecalho />
      <Banner imagem="home" />
      <Rodape />;
    </>
  );
}

export default Inicio;
