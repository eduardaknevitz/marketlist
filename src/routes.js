import Carrinho from "pages/Carrinho";
import Inicio from "pages/Inicio";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cabecalho from "components/Cabecalho";
import Rodape from "components/Rodape";
import Container from "components/Container";
import CarrinhoProvider from "contextos/Carrinho";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Cabecalho />
      <Container>
        <CarrinhoProvider>
          <Routes>
            <Route path="/" element={<Inicio />}></Route>
            <Route path="/carrinho" element={<Carrinho />}></Route>
          </Routes>
        </CarrinhoProvider>
      </Container>
      <Rodape />
    </BrowserRouter>
  );
}
export default AppRoutes;
