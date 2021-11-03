import Axios from 'axios';

const BASE_URL = 'https://6182269884c2020017d89cc2.mockapi.io/api/v1/todos';

export const loadData = () =>
  Axios.get(`${BASE_URL}`);

export const createItem = (unsaved) =>
  Axios.post(`${BASE_URL}`, unsaved);

export const updateItem = (updated) =>
  Axios.put(`${BASE_URL}/${updated.id}`, updated);

export const deleteItem = (id) =>
  Axios.delete(`${BASE_URL}/${id}`);
