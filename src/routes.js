import Carrinho from "pages/Carrinho";
import Inicio from "pages/Inicio";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Container from "components/Container";
import Login from "components/Login";
import AuthProvider, { useAuthContext } from "contextos/Auth";
import { InfoProduto } from "components/InfoProdutos";

function AppRoutes() {
  const { isLogged } = useAuthContext();

  return (
    <BrowserRouter>
      <Container>
        <Routes>
          {isLogged ? (
            <>
              <Route path="/inicio" element={<Inicio />}></Route>
              <Route path="/carrinho" element={<Carrinho />}></Route>
              <Route path="/produto/:id" element={<InfoProduto />}></Route>
            </>
          ) : (
            <Route path="/" element={<Login />} />
          )}
        </Routes>
      </Container>
    </BrowserRouter>
  );
}
export default AppRoutes;
