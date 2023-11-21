import api from "services/network/api";

const fetchCategories = async (category) => {
  const response = await api.get("/products/categories");

  const { data } = response;

  return data;
};

export default fetchCategories;
