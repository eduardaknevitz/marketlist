import api from "services/network/api";

const fetchProducts = async (categoria) => {
  let response = null;

  if (categoria) {
    response = await api.get(`/products/category/${categoria}`);
  } else {
    response = await api.get("/products");
  }

  const { data } = response;

  return data;
};

export default fetchProducts;
