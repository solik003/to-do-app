import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/todos';

export const getTodos = async () => {
  const res = await axios.get(`${API_URL}?_limit=10`);
  return res.data;
};