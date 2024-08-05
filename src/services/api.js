import axios from 'redaxios';

const API_URL = 'http://localhost:3001';

export const getProducts = async () => {
  const response = await axios.get(`${API_URL}/products`);
  return response.data;
};

export const getProductById = async () => {
    const response = await axios.get(`${API_URL}/products/${productId}`);
    return response.data;
  };
  