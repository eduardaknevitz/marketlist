import React, { useEffect, useContext, useState } from "react";

import fetchProducts from "../../services/getProdutos";
import Card from "../Card";
import fetchCategories from "services/getCategorias";

function Products() {
  const [products, setProducts] = useState([]);

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
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    // (loading && <Loading />) || (
    <section className="products container">
      {products.map((product) => (
        <Card key={product.id} data={product} />
      ))}
    </section>
  );
}

export default Products;
