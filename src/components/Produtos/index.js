import React, { useEffect, useState } from "react";
import fetchProducts from "../../services/getProdutos";
import Card from "../Card";
import fetchCategories from "../../services/getCategorias";
import BotoesFiltro from "../Botoes";
import {
  CategoriaProvider,
  useCategoriaContext,
} from "../../contextos/Categorias";
import style from "../Card/Card.module.css";

function Products() {
  const [products, setProducts] = useState([]);
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    fetchProducts()
      .then((response) => {
        console.log(response);
        setProducts(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    fetchCategories()
      .then((response) => {
        setCategorias(response);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <CategoriaProvider>
      <ProductsContent products={products} categorias={categorias} />
    </CategoriaProvider>
  );
}

function ProductsContent({ products, categorias }) {
  const { categoriaSelecionada } = useCategoriaContext();

  const produtosFiltrados = categoriaSelecionada
    ? products.filter((produto) => produto.category === categoriaSelecionada)
    : products;

  return (
    <section className="products container">
      <BotoesFiltro categorias={categorias} />
      <div className={style.cardsContainer}>
        {produtosFiltrados.map((produto) => (
          <Card key={produto.id} data={produto} />
        ))}
      </div>
    </section>
  );
}

export default Products;
