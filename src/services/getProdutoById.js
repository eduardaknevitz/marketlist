import api from "services/network/api";

const fetchProductById = async (id) => {
  const response = await api.get(`/products/${id}`);

  const { data } = response;

  return data;
};

export default fetchProductById;
