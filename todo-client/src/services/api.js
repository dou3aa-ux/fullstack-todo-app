// API SERVICE - All backend communication happens here
// axios is a library for making HTTP requests
// It's like fetch() but better (cleaner syntax, auto JSON parsing)

import axios from 'axios';

const API_URL = 'http://localhost:5000/api/todos';

export const todosApi = {
  // async/await means: "wait for the response before continuing"

  getAll: async () => {
    const response = await axios.get(API_URL);
    return response.data;
  },

  create: async (title) => {
    const response = await axios.post(API_URL, { title });
    return response.data;
  },

  update: async (id, completed) => {  // ← make sure BOTH params are here
    const response = await axios.put(`${API_URL}/${id}`, { completed });
    return response.data;
  },

  delete: async (id) => {
    await axios.delete(`${API_URL}/${id}`);
  }
};