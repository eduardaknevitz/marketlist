import { createContext, useContext, useState } from "react";

export const CarrinhoContext = createContext();
CarrinhoContext.displayName = "Carrinho";

export default function CarrinhoProvider({ children }) {
  const [carrinho, setCarrinho] = useState([]);

  return (
    <CarrinhoContext.Provider value={{ carrinho, setCarrinho }}>
      {children}
    </CarrinhoContext.Provider>
  );
}

export function useCarrinhoContext() {
  const { carrinho, setCarrinho } = useContext(CarrinhoContext);

  //Evitar repetição no carrinho do card do produto selecionado
  function adicionarProduto(novoProduto) {
    const produtoRepetido = carrinho.some((item) => item.id === novoProduto.id);

    let novaLista = [...carrinho];

    if (!produtoRepetido) {
      novaLista.push(novoProduto);
      return setCarrinho(novaLista);
    }

    novaLista.splice(novaLista.indexOf(novoProduto), 1);
    return setCarrinho(novaLista);
  }
  return {
    carrinho,
    adicionarProduto,
  };
}
