import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppRoutes from "routes.js";
import AuthProvider from "contextos/Auth";
import CarrinhoProvider from "contextos/Carrinho";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <CarrinhoProvider>
        <AppRoutes />
      </CarrinhoProvider>
    </AuthProvider>
  </React.StrictMode>
);
